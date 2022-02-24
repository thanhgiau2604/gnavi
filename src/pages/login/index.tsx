import React from 'react'
import LoginContainer from 'containers/Login'
import { NextApplicationPage } from 'pages/_app'

const LoginPage: NextApplicationPage = () => {
  return <LoginContainer />
}

LoginPage.requireAuth = true
export default LoginPage
