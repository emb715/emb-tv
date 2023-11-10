import { useRef } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { channels } from './data/mock_channels'
import { Home } from './containers/Home'
import { initializeChannels } from './hooks/useChannels'

// Populate Channels
initializeChannels(channels)

const queryClient = new QueryClient()

function App() {
  const appRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div id="app" ref={appRef}>
          <Home />
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
