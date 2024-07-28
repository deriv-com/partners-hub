import { createBrowserRouter, NavigateOptions } from 'react-router-dom'

import { Endpoint, Homepage } from '@/pages'

export const routes = {
    home: '/',
    redirect: '/redirect',
    endpoint: '/endpoint',
} as const

type TRoutes = (typeof routes)[keyof typeof routes]
declare module 'react-router-dom' {
    export function useNavigate(): (
        path: string,
        state?: NavigateOptions | undefined
    ) => void
    export function useRouteMatch(path: TRoutes): boolean
}

export const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Homepage />,
    },
    {
        path: routes.endpoint,
        element: <Endpoint />,
    },
])
