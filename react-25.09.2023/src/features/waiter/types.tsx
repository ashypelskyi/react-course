export interface Waiter {
    id?: number,
    firstName: string,
    phone: string,
}

export interface WaitersBackendConfig {
    url: string
}


export interface WaitersPageConfig {
    backend: WaitersBackendConfig
    logger: {
        reduxLogEnable: boolean
    }
}