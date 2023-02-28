import React, { useEffect, useMemo } from "react";
import "./App.css";
import { ScheduleSimple } from "./components/ScheduleSimple";
import { channels } from "./data/mock_channels";
import type { Channel } from "./data/mock_channels";
import { ChannelProvider } from "./providers/channelProvider";
import { useScheduleFetch } from "./hooks/useScheduleFetch";
import { ChannelList } from "./containers/ChannelList";
import { Player } from "./containers/Player";

function App() {
  const appRef = React.useRef<HTMLDivElement>(null);
  const [currentChannel, setCurrentChannel] = React.useState<Channel>(
    channels[0]
  );

  const channelsEpgIds = channels.map((channel) => channel.epgChannelId);

  const schedule = useScheduleFetch(channelsEpgIds);

  // Init App UI
  useEffect(() => {
    async function init() {}
    init();
  }, []);

  const channelSchedule = useMemo(() => {
    if (!schedule.data) {
      return [];
    }
    return schedule.data[currentChannel.epgChannelId];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schedule.timestamp, currentChannel.epgChannelId]);

  return (
    <>
      <ChannelProvider channelList={channels}>
        <div id="app" ref={appRef}>
          <Player />

          <ChannelList />

          <ScheduleSimple
            scheduleGroup={channelSchedule}
            loading={schedule.loading}
            error={Boolean(schedule.error)}
          />
        </div>
      </ChannelProvider>
    </>
  );
}

export default App;
