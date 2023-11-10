import { memo, useMemo } from 'react'
import type { Channel } from '../data/mock_channels'

import { ScheduleSimple } from '../components/ScheduleSimple'
import { ChannelList } from './ChannelList'
import { Player } from './Player'
import { useSchedule } from '../hooks/useSchedule'
import { useChannels } from '../hooks/useChannels'

const Schedule = memo(
  ({ currentChannel, channelsEpgIds }: { currentChannel?: Channel; channelsEpgIds: string[] }) => {
    const { data: schedule, isLoading, isError } = useSchedule({ epgIds: channelsEpgIds })

    const channelSchedule = useMemo(() => {
      if (!schedule || !currentChannel) {
        return []
      }
      const id = currentChannel.epgChannelId
      return schedule[id] ?? []
    }, [schedule, currentChannel])

    return <ScheduleSimple scheduleGroup={channelSchedule} loading={isLoading} error={isError} />
  }
)

function Home() {
  const { current: currentChannel, channels } = useChannels()
  console.log('LOG: > Home > currentChannel:', currentChannel)

  const channelsEpgIds = useMemo(() => {
    return channels ? channels.map((c: Channel) => c.epgChannelId) : []
  }, [channels])

  return (
    <main>
      <Player />
      <ChannelList />
      <Schedule currentChannel={currentChannel} channelsEpgIds={channelsEpgIds} />
    </main>
  )
}

export { Home }
