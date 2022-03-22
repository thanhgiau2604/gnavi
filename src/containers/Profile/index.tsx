import React from 'react'
import parser from 'html-react-parser'
import { useTranslation } from 'react-i18next'
import { LANGUAGE_CODE } from '@constants'
import Header from 'components/common/Header'
import ProfileLayout from 'components/layout/ProfileLayout'
import { ProfileHomeContainerProps } from 'interfaces/Profile'

const ProfileHome = ({ userInfo, data }: ProfileHomeContainerProps) => {
  const { i18n } = useTranslation()
  const isJA = i18n.language === LANGUAGE_CODE.japanese

  return (
    <>
      <Header showBtnBack title="ページ編集" />
      <ProfileLayout dataInfoUser={userInfo}>
        <div className="profile-tag-home">
          <div className="container">
            {data.map(({ id, type, value_ja, value_en, src }) => {
              if (type === 'title') {
                return (
                  <div className="profile-tag-home-title" key={id}>
                    {isJA ? value_ja : value_en}
                  </div>
                )
              }
              if (type === 'image') {
                return <img key={id} src={src} alt="" />
              }
              return <div key={id}>{parser(isJA ? value_ja : value_en)}</div>
            })}
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default ProfileHome
