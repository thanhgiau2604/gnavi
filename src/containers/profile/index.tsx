import React, { useEffect } from 'react'
import Router from 'next/router'
import isNaN from 'lodash/isNaN'
import { ProfileHomeContainerProps } from 'interfaces/Profile'
import Header from 'components/common/Header'
import ProfileLayout from 'components/layout/ProfileLayout'

const ProfileHome = ({ id }: ProfileHomeContainerProps) => {
  useEffect(() => {
    if (isNaN(id)) {
      Router.push('/404')
    }
  }, [id])

  return (
    <>
      <Header showBtnBack title="ページ編集" />
      <ProfileLayout userId={id}>
        <p>Tag home</p>
      </ProfileLayout>
    </>
  )
}

export default ProfileHome
