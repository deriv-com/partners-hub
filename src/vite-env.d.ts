/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.jpg' {
    const value: string
    export default value
}

declare module '*.jpeg' {
    const value: string
    export default value
}

declare module '*.png' {
    const value: string
    export default value
}

declare module '*.svg' {
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    const value: string
    export { ReactComponent }
    export default value
}
