import React from 'react'
import Link from 'next/link'
import Button from 'components/common/Button'
import Header from 'components/common/Header'
import { AssistantContainer } from './styled'

const Assistant: React.FC = () => {
  return (
    <AssistantContainer>
      <Header title="アシスタント" showBtnBack />
      <div className="assistant-main">
        <div className="container">
          <h2>ガイドに関する緊急の相談が可能です</h2>
          <Link href="tel:" passHref>
            <div className="assistant-call-btn">
              <Button title="相談する" height={50} margin="0" radius={4} />
              <img src="/icons/phone_call.svg" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </AssistantContainer>
  )
}

export default Assistant