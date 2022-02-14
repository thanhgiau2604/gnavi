import { User } from './User'

interface LoginPayload {
  email: string
  password: string
}

interface SignupPayload {
  username: string
  nickname: string
  email: string
  password: string
  last_name: string
  first_name: string
  public_setting: string
  birthday: Date
  gender: string
}

interface ConfirmPayload {
  email: string
}

interface LoginFormProps {
  handleLogin: (payload: LoginPayload) => void
}

interface SignupFormProps {
  handleSignup: (payload: SignupPayload) => void
}

interface CfFormProps {
  handleConfirm: (payload: ConfirmPayload) => void
}

interface AuthState {
  isLoggedIn?: boolean
  isLogging?: boolean
  accessToken: string
  refreshToken: string
  userData?: User
  redirectUrl?: string
}

export type {
  LoginPayload,
  SignupPayload,
  ConfirmPayload,
  LoginFormProps,
  SignupFormProps,
  CfFormProps,
  AuthState,
}
