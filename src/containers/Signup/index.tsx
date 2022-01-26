import React, { useState } from 'react'
import Confirmation from 'components/signup/Confirmation'
import SignupForm from 'components/signup/Form'
import { ConfirmPayload, SignupPayload } from 'interfaces/Auth'

const Signup = () => {
  const [showCf, setShowCf] = useState<boolean>(false)

  // TODO: handle logic later
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSignup = (payload: SignupPayload) => {
    setShowCf(true)
  }

  // TODO: handle logic later
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleConfirm = (payload: ConfirmPayload) => {}

  return showCf ? (
    <Confirmation handleConfirm={handleConfirm} />
  ) : (
    <SignupForm handleSignup={handleSignup} />
  )
}

export default Signup
