import { LARAVEL_API_URI } from '~/const/env'
import api from '~/modules/requests'
export interface RequestRefreshTokenSchema {
  grant_type: string
  client_id: number
  client_secret: string
  username: string
  password: string
  scope: string
}

interface ResponseAccessTokenSchema {
  token_type: string
  expires_in: number
  access_token: string
  refresh_token: string
}

export const auth = {
  refreshToken: async (data: RequestRefreshTokenSchema) => {
    const res = await api.post<ResponseAccessTokenSchema>({
      url: `${LARAVEL_API_URI}/oauth/token`,
      data: data,
      params: { withCredentials: true },
    })
    return res
  },
  getUserInfo: async () => {
    const res = await api.get({
      url: `${LARAVEL_API_URI}/api/user`,
    })
    return res
  },
}
