import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ROUTES } from '@constants'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { authActions } from 'app/slices/authSlice'

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.auth.accessToken)

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (!token) {
      router.push(ROUTES.login)
      dispatch(authActions.updateRedirectUrl(router.asPath))
    }
  }, [router, token, dispatch])

  return token ? <>{children}</> : null
}

export default AuthProvider
