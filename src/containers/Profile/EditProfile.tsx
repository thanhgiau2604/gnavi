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

  const handleSubmitForm = async (payload: EditProfilePayload) => {
    // eslint-disable-next-line no-console
    console.log('payload: ', payload)
  }

  return (
    <>
      <Header showBtnBack title="ページ編集" backTo={`/profile/${id}`} />
      <div className="container">
        <h1 className="global-heading profile-page-title">プロフィール編集</h1>
        <FormEditProfile
          infoUser={{
            email: 'thanh.dinh@gmail.com',
            password: '345456446356',
            ja_name: '旅行花子',
            eng_name: '',
            birthday: new Date(),
            gender: '',
            travel_organizations: [
              { id: 1, value: 'one' },
              { id: 2, value: 'two' },
            ],
            phone_number: '',
            public_setting_phone_number: 'yourself',
            email_contact: '',
            public_setting_email_contact: 'yourself',
            background_image: '',
            theme_color: '#343196',
          }}
          handleSubmit={handleSubmitForm}
        />
      </div>
    </>
  )
}

export default EditProfileContainer
