import TestForm from 'components/skillCheck/TestForm'
import TestInfo from 'components/skillCheck/TestInfo'
import React, { useState } from 'react'

const SkillCheck = () => {
  const [showTestForm, setShowTestForm] = useState<boolean>(false)

  const updateShowTestForm = (state: boolean) => {
    setShowTestForm(state)
  }

  return showTestForm ? <TestForm /> : <TestInfo updateShowTestForm={updateShowTestForm} />
}

export default SkillCheck
