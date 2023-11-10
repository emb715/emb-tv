import { ShakaPlayer } from '../components/ShakaPlayer'
import { useChannels } from '../hooks/useChannels'

// const configKeyboardListener = (e: KeyboardEvent) => {
//   if (e.key === 'ArrowUp') {
//     e.preventDefault()
//     // onPressNextChannel();
//     e.stopPropagation()
//   }
//   if (e.key === 'ArrowDown') {
//     e.preventDefault()
//     // onPressPrevChannel();
//     e.stopPropagation()
//   }
//   if (e.key === 'm') {
//     // mute
//   }
// }

function Player() {
  const { current: channel } = useChannels()

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
    })),
  }

  // TODO: add more player options and props, simplify usage
  /// TODO: change prop channel to connection
  // TODO: decouple ShakaPlayer from internal app state
  return <ShakaPlayer channel={decodedChannel} />
}

export { Player }
