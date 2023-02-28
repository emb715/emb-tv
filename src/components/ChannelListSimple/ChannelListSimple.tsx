import { Channel } from "../../data/mock_channels";

function ChannelListSimple({
  onPressChannel,
  onNextChannel,
  onPrevChannel,
  channels,
  currentChannel,
}: {
  onPressChannel: (channelId: Channel["id"]) => void;
  onNextChannel: () => void;
  onPrevChannel: () => void;
  channels: Channel[];
  currentChannel: Channel;
}) {
  return (
    <>
      <div className="channel-list">
        {channels.map((channel, index) => (
          <button
            type="button"
            className={`channel-list__item ${
              currentChannel.id === channel.id
                ? "channel-list__item--ACTIVE"
                : ""
            }`}
            disabled={currentChannel.id === channel.id}
            key={channel.id}
            data-channel-index={index}
            onClick={() => onPressChannel(channel.id)}
          >
            <h3>{channel.name}</h3>
            <img src={channel.image.url} alt={channel.name} />
          </button>
        ))}
      </div>

      <div className="channel-controls">
        <button type="button" onClick={onPrevChannel}>
          Prev Channel
        </button>
        <button type="button" onClick={onNextChannel}>
          Next Channel
        </button>
      </div>
    </>
  );
}

export { ChannelListSimple };
