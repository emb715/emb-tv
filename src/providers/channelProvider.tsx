import React from "react";
import type { Channel } from "../data/mock_channels";

const actions = {
  CHANGE_CHANNEL: "CHANGE_CHANNEL",
};

type ChannelContextAction = {
  type: string;
  payload: Channel;
};

type ChannelContextState = {
  channel?: Channel;
  list: Map<Channel["id"], Channel>;
};

type ChannelContextType = {
  channel?: Channel;
  list: ChannelContextState["list"];
  onChangeChannel: (channelId: Channel["id"]) => void;
  onNextChannel: () => void;
  onPrevChannel: () => void;
};

const ChannelContext = React.createContext<ChannelContextType>({
  channel: undefined,
  list: new Map(),
  onChangeChannel: () => {},
  onNextChannel: () => {},
  onPrevChannel: () => {},
});

const initialState: ChannelContextState = {
  channel: undefined,
  list: new Map(),
};
//Reducer to Handle Actions
function reducer(state: ChannelContextState, action: ChannelContextAction) {
  switch (action.type) {
    case actions.CHANGE_CHANNEL:
      return {
        ...state,
        channel: action.payload,
      };
    default:
      return state;
  }
}

function ChannelProvider({
  children,
  defaultChannel,
  channelList,
}: {
  children: React.ReactNode;
  defaultChannel: Channel;
  channelList: Channel[];
}) {
  const list = new Map(channelList.map((channel) => [channel.id, channel]));
  const [state, dispatch] = React.useReducer(reducer, {
    ...initialState,
    channel: defaultChannel,
    list,
  });

  const value = {
    channel: state.channel,
    list: state.list,
    onChangeChannel: (channelId: Channel["id"]) => {
      if (!state.list.has(channelId)) {
        return;
      }
      const payload = state.list.get(channelId);
      payload && dispatch({ type: actions.CHANGE_CHANNEL, payload });
    },
    onNextChannel: () => {},
    onPrevChannel: () => {},
  };

  return (
    <ChannelContext.Provider value={value}>{children}</ChannelContext.Provider>
  );
}

function useChannelContext() {
  const context = React.useContext(ChannelContext);
  if (context === undefined) {
    throw new Error("useChannelContext must be used within a ChannelProvider");
  }
  return context;
}

export { ChannelProvider, useChannelContext };
export type { ChannelContextType };
