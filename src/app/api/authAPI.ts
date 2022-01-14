import { routes } from 'constants/index'
import { LoginPayload } from 'interfaces/auth'
import axiosClient from './axiosClient'

export const authApi = {
	//example
	login(payload: LoginPayload): Promise<any> {
		return axiosClient.post(routes.LOGIN, payload)
	},
}
