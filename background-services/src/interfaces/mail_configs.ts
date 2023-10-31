export interface mail_configs{
    service: string,
    host: string,
    port: number,
    requireTLS: boolean,
    auth: {
        user: string,
        pass: string
    }
}