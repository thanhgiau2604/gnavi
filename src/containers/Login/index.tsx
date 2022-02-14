import React from 'react'
import LoginForm from 'components/login/Form'
import { AuthState, LoginPayload } from 'interfaces/Auth'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { authActions } from 'app/slices/authSlice'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const urlRedirect = useAppSelector((state) => state.auth.redirectUrl)
  // TODO: handle logic later
  const handleLogin = (payload: LoginPayload) => {
    // example payload
    const authState: AuthState = {
      accessToken: payload.email,
      refreshToken: payload.email,
      userData: {
        username: 'giaunguyen',
        nickname: 'giau.nguyen',
        phone: '09xxx',
      },
    }
    dispatch(authActions.loginSuccess(authState))
    if (urlRedirect) {
      router.push(urlRedirect)
    }
  }

  return <LoginForm handleLogin={handleLogin} />
}

export default Login
