import { useQuery } from '@tanstack/react-query'

import { groupBy } from 'lodash'
import { getDateTime } from '../utils/timeHelpers'
import { EPG_API_URL, EPG_API_FIELDS } from '../config'

const END_TIME = 60000
const SCHEDULE_URL = EPG_API_URL ?? null

type ProgramRawImage = {
  Url: string
  SourceImageWidth: number
  SourceImageHeight: number
}

type ProgramRaw = {
  Pid: string
  Title: string
  Description: string
  ChannelName: string
  ChannelNumber: string
  Start: number
  End: number
  LiveChannelPid: string
  LiveProgramPid: string
  Images: {
    VideoFrame: ProgramRawImage[]
  }
}

type ProgramImage = {
  url: string
  width: number
  height: number
}

type Program = {
  id: string
  title: string
  description: string
  channelName: string
  channelNumber: string
  start: number
  end: number
  liveChannelPid: string
  liveProgramPid: string
  images?: ProgramImage[]
}

type ScheduleRaw = {
  Content: ProgramRaw[]
}

type ScheduleParams = {
  epgIds: string[]
  startTime?: number
  endTime?: number
}

type ScheduleType = Record<Program['id'], Program[]>

type ScheduleQueryKey = ['schedule', ScheduleParams]

function getScheduleQueryKey(params: ScheduleParams): ScheduleQueryKey {
  return ['schedule', params]
}

// function useSchedule(params: ScheduleParams, options: Pick<UseQueryOptions, 'select'> = {}) {
function useSchedule(params: ScheduleParams) {
  const query = useQuery({
    queryKey: getScheduleQueryKey(params),
    queryFn: async () => fetchSchedule(params),
    // refetchInterval: END_TIME,
    // refetchInterval: 60000 * 20, // 20 min
    // placeholderData: (previousData, previousQuery) => previousData,
    // refetchOnReconnect: true,
    // select: options?.select,
  })

  return query
}

async function fetchSchedule({ epgIds, startTime, endTime }: ScheduleParams) {
  const urlOrigin = SCHEDULE_URL ? new URL(SCHEDULE_URL).origin : null
  const fetchOptions = {
    headers: {
      origin: urlOrigin ?? 'https://www.google.com',
    },
  }
  try {
    const ids = epgIds.join(',')
    const time = getDateTime()
    const timers = {
      startTime: startTime ?? time,
      endTime: endTime ?? time + END_TIME,
    }

    const url = `${SCHEDULE_URL}schedules?liveChannelPids=${ids}&startTime=${timers.startTime}&endTime=${timers.endTime}&fields=${EPG_API_FIELDS}&includeRelations=Genre&orderBy=START_TIME`

    console.log('LOG: > fetchSchedule > url:', url)

    const response = await fetch(url, fetchOptions)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = (await response.json()) as ScheduleRaw

    return onSuccess(data)
  } catch (error) {
    void onError(error)
  }
}

const onSuccess = (data: ScheduleRaw) => {
  try {
    if (!data || !data?.Content) {
      throw new Error('No data')
    }
    const programs = transformer(data.Content)
    const programsGrouped = groupBy(programs, 'liveChannelPid') as ScheduleType
    return programsGrouped
  } catch (error) {
    throw new Error('Error grouping data')
  }
}

const onError = (error: unknown) => {
  console.log('LOG: > useScheduleFetch > error:', error)
  // Handle error in some way
}

function transformer(programs: ProgramRaw[]): Program[] {
  try {
    if (!programs) {
      return []
    }
    return programs.map((program) => {
      const images = program.Images.VideoFrame.map((image) => ({
        url: image.Url,
        width: image.SourceImageWidth,
        height: image.SourceImageHeight,
      }))
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
        images,
      }
      return payload
    })
  } catch (error) {
    throw new Error('useSchedule: Error transforming data' + error)
  }
}

export { useSchedule }
