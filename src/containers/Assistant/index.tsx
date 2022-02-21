import Button from 'components/common/Button'
import Header from 'components/common/Header'
import Link from 'next/link'
import React from 'react'
import { AssistantContainer } from './styled'

const Assistant = () => {
  return (
    <AssistantContainer>
      <Header title="アシスタント" showBtnBack />
      <div className="assistant-main">
        <div className="container">
          <h2>ガイドに関する緊急の相談が可能です</h2>
          <Link href="tel:" passHref>
            <div className="assistant-call-btn">
              <Button title="相談する" height={50} margin="0" />
              <img src="/icons/phone_call.svg" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </AssistantContainer>
  )
}

export default Assistant
