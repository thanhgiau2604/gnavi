import React, { useEffect } from 'react'
import Router from 'next/router'
import isNaN from 'lodash/isNaN'
import { ProfileEditContainerProps, EditProfilePayload } from 'interfaces/Profile'
import Header from 'components/common/Header'
import FormEditProfile from 'components/profile/FormEditProfile'

const EditProfileContainer = ({ id }: ProfileEditContainerProps) => {
  useEffect(() => {
    if (isNaN(id)) {
      Router.push('/404')
    }
  }, [id])

  // ===================================================================================
  // eslint-disable-next-line no-promise-executor-return
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
  // ===================================================================================

  const handleSubmitForm = async (payload: EditProfilePayload) => {
    // ===================================================================================
    await sleep(2000)
    // eslint-disable-next-line no-console
    console.log('payload: ', payload)
    // ===================================================================================
  }

  return (
    <>
      <Header showBtnBack title="ページ編集" />
      <div className="container">
        <h1 className="global-heading profile-page-title">プロフィール編集</h1>
        <FormEditProfile handleSubmit={handleSubmitForm} />
      </div>
    </>
  )
}

export default EditProfileContainer
