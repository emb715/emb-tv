import React from "react";
import type { Channel } from "../data/mock_channels";

function saveChannelId(channelId: Channel["id"]) {
  localStorage.setItem("channelId", JSON.stringify(channelId));
}

function getChannelId() {
  const item = localStorage.getItem("channelId");
  return item ? JSON.parse(item) : null;
}

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
  defaultChannelId,
  channelList,
}: {
  children: React.ReactNode;
  defaultChannelId?: Channel["id"];
  channelList: Channel[];
}) {
  const savedChannelId = getChannelId();
  const currentChannelId = savedChannelId || defaultChannelId;
  const defaultChannel =
    channelList.find((c) => c.id === currentChannelId) ?? channelList[0];

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
      payload && saveChannelId(channelId);
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
