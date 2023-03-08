import React from 'react';
import { useEffect, useRef, useReducer } from 'react'
import { groupBy } from "lodash";
import { getDateTime } from '../utils/timeHelpers';
import {EPG_API_URL, EPG_API_FIELDS} from '../config';

const END_TIME = 60000;

type ProgramRawImage = {
  Url: string,
  SourceImageWidth: number,
  SourceImageHeight: number,  
}

type ProgramRaw = {
  Pid: string,
  Title: string,
  Description: string,
  ChannelName: string,
  ChannelNumber: string,
  Start: number,
  End: number,
  LiveChannelPid: string,
  LiveProgramPid: string,
  Images: {
    VideoFrame: ProgramRawImage[],
  }
}

type ScheduleRaw = {
  Content: ProgramRaw[]
}

type ProgramImage = {
  url: string;
  sourceWidth: number;
  sourceHeight: number;
}

type Program = {
  id: string,
  title: string,
  description: string,
  channelName: string,
  channelNumber: string,
  start: number,
  end: number,
  liveChannelPid: string,
  liveProgramPid: string,
  // images?: ProgramImage[],
}


function transformer(programs: ProgramRaw[]): Program[] {
  try {
    if (!programs) {      
      return []
    }
    return programs.map((program) => {
      // const images = program.Images.VideoFrame.map((image) => ({url: image.Url, sourceWidth: image.SourceImageWidth, sourceHeight: image.SourceImageHeight}))
      const payload = {
        id: program.Pid,
        title: program.Title,
        description: program.Description,
        channelName: program.ChannelName,
        channelNumber: program.ChannelNumber,
        start: program.Start,
        end: program.End,
        liveChannelPid: program.LiveChannelPid.toLowerCase(),
        liveProgramPid: program.LiveProgramPid,
        // images,
      }
      return payload
    })  
  } catch (error) {
    throw new Error("Error transforming data" + error);    
  }
}


interface ScheduleState<T> {
  loading: boolean
  data?: T
  error?: Error
  timestamp?: number
}

type ScheduleAction<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error }

type UseScheduleOptions = {
  startTime?: number,
  endTime?: number
}

type ScheduleType = Record<Program['id'], Program[]>

function useScheduleFetch<T = ScheduleType>(
  epgIds: string[], 
  options?: UseScheduleOptions | undefined
): ScheduleState<T> {
  const { startTime, endTime } = options || {}
  
  const cancelRequest = useRef<boolean>(false)
  // Set initial state and reducer
  const initialState: ScheduleState<T> = {
    loading: true,
    error: undefined,
    data: undefined,
    timestamp: undefined,
  } 
  // Keep state logic separated
  const fetchReducer =(state: ScheduleState<T>, action: ScheduleAction<T>): ScheduleState<T> => {
    switch (action.type) {
      case 'fetched':
        return {
          ...initialState,
          loading: false,
          data: action.payload,
          timestamp: new Date().getTime()
        }
      case 'error':
        return {
          ...initialState,
          error: action.payload,
          loading: false,
          timestamp: new Date().getTime()
        }
      default:
        return state
    }
  }
  // Initialize reducer
  const [state, dispatch] = useReducer(fetchReducer, initialState)

  const urlOrigin = EPG_API_URL ? new URL(EPG_API_URL).origin : null

  const fetchOptions = {
    headers: {
      origin:  urlOrigin ?? "https://www.google.com",
    }
  }

  const onError = (error: unknown) => {
    console.log('LOG: > useScheduleFetch > error:', error)
    dispatch({ type: 'error', payload: error as Error })
  }

  const onSuccess = (data: ScheduleRaw) => {
    try {
      if (!data || !data?.Content) {
        throw new Error('No data')
      }
      const programs = transformer(data.Content)
      const programsGrouped = groupBy(programs, "liveChannelPid") as T;
      dispatch({ type: 'fetched', payload: programsGrouped})
    } catch (error) {
      throw new Error("Error grouping data");
    }   
  }

  const isTimeToFetch = () => {
    const { timestamp } = state
    if (!timestamp) {
      return true
    }
    const bufferDifference = 30000
    if(new Date().getTime() - bufferDifference > timestamp + END_TIME) {
      return true
    }
    return false
  }

  useEffect(() => {
    cancelRequest.current = false

    const fetchData = async () => {         
      try {
        const ids = epgIds.join(",");    
        const time = getDateTime();    
        const timers = {
          startTime: startTime ?? time,
          endTime: endTime ?? time + 60000,
        }        

        const url = `${EPG_API_URL}schedules?liveChannelPids=${ids}&startTime=${timers.startTime}&endTime=${timers.endTime}&fields=${EPG_API_FIELDS}&includeRelations=Genre&orderBy=START_TIME`
        
        const response = await fetch(url, fetchOptions)
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = (await response.json()) as ScheduleRaw
        
        if (cancelRequest.current) return

        void onSuccess(data)        
      } catch (error) {
        if (cancelRequest.current) return
        void onError(error)
      }
    }

    isTimeToFetch() && void fetchData()

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [epgIds, endTime, startTime])

  return React.useMemo(() => state, [state])
}

export { useScheduleFetch }
export type { Program, ProgramRaw, ProgramRawImage, ProgramImage, UseScheduleOptions}