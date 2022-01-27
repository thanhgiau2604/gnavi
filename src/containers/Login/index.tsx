import React from 'react'
import LoginForm from 'components/login/Form'
import { LoginPayload } from 'interfaces/Auth'

const Login = () => {
  // TODO: handle logic later
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleLogin = (payload: LoginPayload) => {}

  return <LoginForm handleLogin={handleLogin} />
}

export default Login
