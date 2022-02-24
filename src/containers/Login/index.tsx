import React from 'react'
import { useRouter } from 'next/router'
import { authApi } from 'app/api'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { authActions } from 'app/slices/authSlice'
import LoginForm from 'components/login/Form'
import { AuthState, LoginPayload } from 'interfaces/Auth'
import { showNotify } from 'utils/notify'

const Login = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const urlRedirect = useAppSelector((state) => state.auth.redirectUrl)
  const handleLogin = async (payload: LoginPayload) => {
    const { code, data, message } = await authApi.login(payload)
    if (code === undefined) {
      const authState: AuthState = {
        accessToken: data?.access_token,
        refreshToken: data?.refresh_token,
        expiredAt: data?.expire_at,
        userData: {
          email: payload.email,
        },
      }
      dispatch(authActions.loginSuccess(authState))
      showNotify('success', 'Login successfully', 2000)
      setTimeout(() => {
        if (urlRedirect) {
          router.push(urlRedirect)
        }
      }, 2000)
    } else {
      showNotify('error', message ?? '', 2000)
    }
  }

  return <LoginForm handleLogin={handleLogin} />
}

export default Login
