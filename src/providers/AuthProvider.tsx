import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ROUTES } from '@constants'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { authActions } from 'app/slices/authSlice'

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.userData)
  const [showChildren, setShowChildren] = useState<boolean>(false)

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (router.asPath === ROUTES.login || router.asPath === ROUTES.signup) {
      if (user) {
        router.push(ROUTES.home)
        return
      }
      setShowChildren(true)
      return
    }

    if (!user) {
      router.push(ROUTES.login)
      dispatch(authActions.updateRedirectUrl(router.asPath))
      return
    }
    setShowChildren(true)
  }, [router, user, dispatch])

  return showChildren ? <>{children}</> : null
}

export default AuthProvider
