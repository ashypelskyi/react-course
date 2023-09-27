export interface Waiter {
    id?: number,
    firstName: string,
    phone: string
}

export interface AppBackendConfig {
    url: string
}

export interface AppConfig {
    backend: AppBackendConfig
}