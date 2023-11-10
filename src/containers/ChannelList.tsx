import { ChannelListSimple } from '../components/ChannelListSimple'
import { useChannels } from '../hooks/useChannels'

function ChannelList() {
  const { current, channels, onNextChannel, onPrevChannel, onChangeChannel } = useChannels()

  if (!channels.length || !current) {
    return null
  }

  return (
    <ChannelListSimple
      onPress={onChangeChannel}
      onNext={onNextChannel}
      onPrev={onPrevChannel}
      items={channels}
      current={current}
    />
  )
}

export { ChannelList }
