import React from 'react'
import SignupContainer from 'containers/Signup'
import { NextApplicationPage } from 'pages/_app'

const SignupPage: NextApplicationPage = () => {
  return <SignupContainer />
}

SignupPage.requireAuth = true
export default SignupPage
