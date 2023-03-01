import { useEffect, useRef } from "react";
import "./App.css";

import { channels } from "./data/mock_channels";
import { ChannelProvider } from "./providers/channelProvider";
import { Home } from "./containers/Home";

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  // Init App UI
  useEffect(() => {
    async function init() {}
    init();
  }, []);

  return (
    <>
      <ChannelProvider channelList={channels}>
        <div id="app" ref={appRef}>
          <Home />
        </div>
      </ChannelProvider>
    </>
  );
}

export default App;
