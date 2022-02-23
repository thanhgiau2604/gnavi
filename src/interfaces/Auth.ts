import { User } from './User'

interface AuthState {
  isLoggedIn?: boolean
  isLogging?: boolean
  accessToken?: string
  refreshToken?: string
  userData?: User
  redirectUrl?: string
  expiredAt?: number
}

// <---- LOGIN ----->
interface LoginPayload {
  email: string
  password: string
}

interface LoginSuccessData {
  access_token: string
  refresh_token: string
  expire_at: number
}

interface LoginFormProps {
  handleLogin: (payload: LoginPayload) => void
}

// <---- SIGNUP ----->
interface SignupPayload {
  username: string
  email: string
  password: string
  name: string
  birthday: Date
}

interface SignupFormProps {
  handleSignup: (payload: SignupPayload) => void
}

// <---- SIGNUP confirmation----->
interface ConfirmPayload {
  email: string
}

interface CfFormProps {
  handleConfirm: (payload: ConfirmPayload) => void
}

// <---- Refresh Token----->

interface RefreshTokenPayload {
  email: string
  refresh_token: string
}

type RefreshTokenSuccessData = LoginSuccessData

// <----Logout----->
interface LogoutPayload {
  email?: string
  refresh_token?: string
}

export type {
  LoginPayload,
  SignupPayload,
  ConfirmPayload,
  LoginFormProps,
  SignupFormProps,
  CfFormProps,
  AuthState,
  LoginSuccessData,
  RefreshTokenPayload,
  RefreshTokenSuccessData,
  LogoutPayload,
}
