import { API_ROUTES } from '@constants'
import {
  LoginPayload,
  LoginSuccessData,
  LogoutPayload,
  RefreshTokenPayload,
  RefreshTokenSuccessData,
  SignupPayload,
} from 'interfaces/Auth'
import { APIResponse } from '../../interfaces/APIResponse'
import axiosClient from './axiosClient'

export const authApi = {
  login(payload: LoginPayload): Promise<APIResponse<LoginSuccessData>> {
    return axiosClient.post(API_ROUTES.login, payload)
  },
  signup(payload: SignupPayload): Promise<APIResponse<undefined>> {
    return axiosClient.post(API_ROUTES.signup, payload)
  },
  refresh(payload: RefreshTokenPayload): Promise<APIResponse<RefreshTokenSuccessData>> {
    return axiosClient.post(API_ROUTES.refresh_token, payload)
  },
  logout(payload: LogoutPayload): Promise<APIResponse<any>> {
    return axiosClient.delete(API_ROUTES.logout, {
      data: payload,
    })
  },
}
