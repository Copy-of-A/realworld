export const cn = (...classNames: Array<string | boolean>) => classNames.filter(Boolean).join(' ')

export const API_URL = 'https://api.realworld.io/api'

export const Headers = {
    GET: {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'charset': 'utf-8',
        },
        method: "GET"
    }
}
