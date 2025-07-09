import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios"

export const URL_SERVER = 'http://192.168.1.3:8080/api/v1/'
export const URL_SERVER_IMAGE = 'http://192.168.1.3:8080/'

const instance = axios.create({
    baseURL: URL_SERVER,
    withCredentials: true
})

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    return config
}, (error: AxiosError) => {
    return Promise.reject(error.message)
})

instance.interceptors.response.use((config: AxiosResponse) => {
    return config
}, (error: AxiosError) => {
    return Promise.reject(error.message)
})

export const get = async (url: string) => {
    try {
        const response = await instance.get(url)

        return response.data
    } catch (error: any) {
        return console.log({ message: error.message })
    }
}

export const post = async (url: string, data: any) => {
    try {
        const response = await instance.post(url, data)

        return response.data
    } catch (error: any) {
        return console.log({ message: error.message })
    }
} 
