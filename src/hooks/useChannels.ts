import { create } from 'zustand'

import type { Channel } from '../data/mock_channels'
import { useThrottledCallback } from 'use-debounce'

type ChannelStore = {
  current: Channel | undefined
  channels: Channel[]
  setCurrent: (channel: Channel) => void
  setChannels: (channels: Channel[]) => void
}

const useChannelStore = create<ChannelStore>((set) => ({
  current: undefined,
  channels: [],
  setCurrent: (channel: Channel) => set((state) => ({ ...state, current: channel })),
  setChannels: (channels: Channel[]) => set((state) => ({ ...state, channels: channels })),
}))

function initializeChannels(channels: Channel[]) {
  useChannelStore.getState().setChannels(channels)
  const savedChannelId = getChannelId()
  if (savedChannelId) {
    changeChannel(savedChannelId)
  } else {
    // No channel, set first one
    useChannelStore.getState().current === undefined && nextChannel()
  }
}

function saveChannelId(channelId: Channel['id']) {
  try {
    localStorage.setItem('channelId', JSON.stringify(channelId))
  } catch (error) {
    console.error('LOG: > saveChannelId > error:', error)
  }
}

function getChannelId(): string | null {
  try {
    const item = localStorage.getItem('channelId')
    return item ? JSON.parse(item) : null
  } catch (error) {
    console.log('LOG: > getChannelId > error:', error)
    return null
  }
}

function useChannels() {
  const { current, channels } = useChannelStore()

  const onNextChannel = useThrottledCallback(nextChannel, 300)
  const onPrevChannel = useThrottledCallback(prevChannel, 300)
  const onChangeChannel = useThrottledCallback(changeChannel, 300)

  return {
    current: current,
    channels: channels,
    onNextChannel,
    onPrevChannel,
    onChangeChannel,
  }
}

function saveChannel(channel: Channel) {
  try {
    useChannelStore.getState().setCurrent(channel)
    saveChannelId(channel.id)
  } catch (error) {
    console.log('LOG: > saveChannel > error:', error)
  }
}

function changeChannel(id: string) {
  try {
    const { current, channels } = useChannelStore.getState()
    if (current?.id === id) {
      return
    }
    const foundIndex = channels.findIndex((channel) => channel.id === id)
    const channel = channels[foundIndex]
    saveChannel(channel)
  } catch (error) {
    console.log('LOG: > changeChannel > error:', error)
  }
}
function prevChannel() {
  try {
    const { current, channels } = useChannelStore.getState()
    const foundIndex = channels.findIndex((channel) => channel.id === current?.id)
    const prevIndex = foundIndex === -1 ? channels.length - 1 : foundIndex - 1
    const prev = channels[prevIndex]
    saveChannel(prev)
  } catch (error) {
    console.log('LOG: > prevChannel > error:', error)
  }
}

function nextChannel() {
  try {
    const { current, channels } = useChannelStore.getState()
    const foundIndex = channels.findIndex((channel) => channel.id === current?.id)
    const nextIndex = foundIndex === -1 || foundIndex === channels.length ? 0 : foundIndex + 1
    const next = channels[nextIndex]
    saveChannel(next)
  } catch (error) {
    console.log('LOG: > nextChannel > error:', error)
  }
}

export { useChannels, initializeChannels }
