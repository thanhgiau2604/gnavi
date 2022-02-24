import React, { useState } from 'react'
import { authApi } from 'app/api'
import Confirmation from 'components/signup/Confirmation'
import SignupForm from 'components/signup/Form'
import { ConfirmPayload, SignupPayload } from 'interfaces/Auth'
import { showNotify } from 'utils/notify'

const Signup = () => {
  const [showCf, setShowCf] = useState<boolean>(false)

  const handleSignup = async (payload: SignupPayload) => {
    const { code } = await authApi.signup(payload)
    if (code === undefined) {
      showNotify('success', 'Signup successfully', 2000)
      setTimeout(() => {
        setShowCf(true)
      }, 2000)
    }
  }

  // TODO: handle logic later
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleResendConfirm = (payload: ConfirmPayload) => null

  return showCf ? (
    <Confirmation handleConfirm={handleResendConfirm} />
  ) : (
    <SignupForm handleSignup={handleSignup} />
  )
}

export default Signup
