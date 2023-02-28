import { Channel } from "../data/mock_channels";
import { useChannelContext } from "../providers/channelProvider";
import { ChannelListSimple } from "../components/ChannelListSimple/ChannelListSimple";

function ChannelList() {
  const { onChangeChannel, onNextChannel, onPrevChannel, list, channel } =
    useChannelContext();
  const channels: Channel[] = Array.from(list.values());

  if (!channels.length || !channel) {
    return null;
  }

  return (
    <ChannelListSimple
      onPressChannel={onChangeChannel}
      onNextChannel={onNextChannel}
      onPrevChannel={onPrevChannel}
      channels={channels}
      currentChannel={channel}
    />
  );
}

export { ChannelList };
