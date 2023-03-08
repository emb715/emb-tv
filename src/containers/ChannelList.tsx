import { Channel } from "../data/mock_channels";
import { useChannelContext } from "../providers/channelProvider";
import { ChannelListSimple } from "../components/ChannelListSimple/ChannelListSimple";

function ChannelList() {
  const { onChangeChannel, onNextChannel, onPrevChannel, list, channel } =
    useChannelContext();
  const channels: Channel[] = Object.values(list || {});

  if (!channels.length || !channel) {
    return null;
  }

  return (
    <ChannelListSimple
      onPress={onChangeChannel}
      onNext={onNextChannel}
      onPrev={onPrevChannel}
      items={channels}
      current={channel}
    />
  );
}

export { ChannelList };
