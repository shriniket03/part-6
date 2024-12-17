import ReactDOM from 'react-dom/client'
import React from 'react'

import App from './App'
import { CounterContextProvider } from './components/Context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterContextProvider>
  <QueryClientProvider client={queryClient}>
  <App/>
  </QueryClientProvider>
  </CounterContextProvider>
)