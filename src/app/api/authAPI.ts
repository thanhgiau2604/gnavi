import { ROUTES } from 'constants/index'
import { LoginPayload } from 'interfaces/Auth'
import axiosClient from './axiosClient'

export const authApi = {
  // example
  login(payload: LoginPayload) {
    return axiosClient.post(ROUTES.login, payload)
  },
}
