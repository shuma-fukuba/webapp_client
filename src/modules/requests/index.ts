import { CognitoUserSession } from 'amazon-cognito-identity-js'
import { Auth } from '@aws-amplify/auth'
import axios from 'axios'

export const configure = () => {
  axios.interceptors.request.use((config) => {
    return Auth.currentSession()
      .then((session: CognitoUserSession) => {
        config.headers.Authorization = `Bearer ${session
          .getIdToken()
          .getJwtToken()}`
        return Promise.resolve(config)
      })
      .catch(() => {
        return Promise.resolve(config)
      })
  })
}

interface RequestOption {
  url: string
  params?: any
  data?: any
}

interface Response<T> {
  data: T
  status: number
}

const api = {
  get: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, params, data } = option

    try {
      const res = await axios.get<T>(url, {
        params,
        data,
      })
      return {
        data: res.data,
        status: res.status,
      }
    } catch (error) {}
  },
  post: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, data, params } = option

    const res = await axios.post<T>(url, data, { params })
    return {
      data: res.data,
      status: res.status,
    }
  },
  put: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, data } = option

    try {
      const res = await axios.put<T>(url, data)
      return {
        data: res.data,
        status: res.status,
      }
    } catch (error) {}
  },
  delete: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, params, data } = option

    try {
      const res = await axios.delete<T>(url, {
        params,
        data,
      })
      return {
        data: res.data,
        status: res.status,
      }
    } catch (error) {}
  },
}

export default api
