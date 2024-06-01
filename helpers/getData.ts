import Cookies from 'js-cookie'

export function getData({ url, method, body, headers = {
    'Content-Type': 'application/json'
} }: { url: string, method?: string, body?: object, headers?: Record<string, string> }): Promise<any> {
    return new Promise<any>((res, rej) => {
        if (Cookies.get('token') !== undefined) headers['Authorization'] = `Bearer ${Cookies.get('token')}`

        fetch(url, {
            method,
            headers: new Headers(headers),
            body: JSON.stringify(body)
        }).then(async data => {
            if (!data.ok) throw data

            return res(await data.json())
        }).catch(e => rej(e))
    })
}