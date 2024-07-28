import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppDataProvider } from '@deriv-com/api-hooks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Header } from '@/components'
import App from './App'

import './index.css'

const queryClient = new QueryClient()

const container = document.getElementById('root')
const root = container ? ReactDOM.createRoot(container) : null

const signupRoute = window.location.pathname === '/signup'

root?.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AppDataProvider>
                {!signupRoute && <Header />}
                <App />
            </AppDataProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </React.StrictMode>
)
