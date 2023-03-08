import { useMemo } from 'react'
import type { Channel } from '../data/mock_channels'

import { ScheduleSimple } from '../components/ScheduleSimple'
import { useChannelContext } from '../providers/channelProvider'
import { useScheduleFetch } from '../hooks/useScheduleFetch'
import { ChannelList } from './ChannelList'
import { Player } from './Player'

function Home() {
  const { channel: currentChannel, list } = useChannelContext()

  const channelsEpgIds = list ? Object.values(list).map((c: Channel) => c.epgChannelId) : []

  const schedule = useScheduleFetch(channelsEpgIds)

  const channelSchedule = useMemo(() => {
    if (!schedule.data || !currentChannel) {
      return []
    }
    return schedule.data[currentChannel.epgChannelId]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schedule.timestamp, currentChannel])

  return (
    <main>
      <Player />

      <ChannelList />

      <ScheduleSimple
        scheduleGroup={channelSchedule}
        loading={schedule.loading}
        error={Boolean(schedule.error)}
      />
    </main>
  )
}

export { Home }
