import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import queryString from 'query-string'
import { RootState, store } from 'app/store'

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

const select = (state: RootState) => {
  return state.auth.accessToken
}

// const getToken = () => {
//   const token = select(store.getState())
//   console.log(token)
//   axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
// }

// store.subscribe(getToken)

axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = select(store.getState())
  if (token && config.headers) {
    console.log(`Token is ${token}`)
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data
    }
    return response
  },
  (error: AxiosError) => {
    return error.response?.data
  }
)

export default axiosClient
