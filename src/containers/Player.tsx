import { ShakaPlayer } from '../components/ShakaPlayer'
import { useChannelContext } from '../providers/channelProvider'
// import { useEventListener } from "../hooks/useEventListener"

function Player() {
  const { channel } = useChannelContext()

  if (!channel) {
    return null
  }

  const decodedChannel = {
    ...channel,
    connections: channel.connections.map((con) => ({
      ...con,
      url: atob(con.url),
      type: atob(con.type),
      license: atob(con.license),
      // url: '//1210-vos.dtvott.com/DASH/manifest.mpd',
      // type: 'clearkey',
      // license: '2669509884ce361c9646b56ca5d51e7f:292bb70bac7757546a69e43f778c3cdc',
    })),
  }

  // .map((channel) => ({
  //   ...channel,
  //   images: { ...channel.image, url: atob(channel.image.url) },
  // }));
  // const configKeyboardListener = (e: KeyboardEvent) => {
  //   if (e.key === "ArrowUp") {
  //     e.preventDefault();
  //     onPressNextChannel();
  //     e.stopPropagation();
  //   }
  //   if (e.key === "ArrowDown") {
  //     e.preventDefault();
  //     onPressPrevChannel();
  //     e.stopPropagation();
  //   }
  //   if (e.key === "m") {
  //     // mute
  //   }
  // };
  // // TODO: remove ts-ignore
  // // @ts-ignore
  // useEventListener("keydown", configKeyboardListener);

  // TODO: add more player options and props
  return <ShakaPlayer channel={decodedChannel} />
}

export { Player }
