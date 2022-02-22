import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ROUTES } from '@constants'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { authActions } from 'app/slices/authSlice'

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.userData)

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (!user) {
      router.push(ROUTES.login)
      dispatch(authActions.updateRedirectUrl(router.asPath))
    }
  }, [router, user, dispatch])

  return user ? <>{children}</> : null
}

export default AuthProvider
