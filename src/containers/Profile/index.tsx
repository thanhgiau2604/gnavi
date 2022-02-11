import React from 'react'
import Router from 'next/router'
import parser from 'html-react-parser'
import { ProfileHomeContainerProps } from 'interfaces/Profile'
import Header from 'components/common/Header'
import Button from 'components/common/Button'
import ProfileLayout from 'components/layout/ProfileLayout'
import { BUTTON_COLORS } from '@constants'

const ProfileHome = ({ id, res }: ProfileHomeContainerProps) => {
  return (
    <>
      <Header showBtnBack title="ページ編集" />
      <ProfileLayout userId={id}>
        <div className="profile-tag-home">
          <div className="container">
            {res.map(({ type, value }) => {
              if (type === 'title') {
                return (
                  <div className="profile-tag-home-title" key={value}>
                    {value}
                  </div>
                )
              }
              if (type === 'image') {
                return <img key={value} src={value} alt="" />
              }
              return <div key={value}>{parser(value)}</div>
            })}
          </div>
          <div className="profile-tag-home-footer">
            <Button
              width={320}
              buttonColor={BUTTON_COLORS.style01}
              title="自分のページを編集する"
              margin="0.8rem auto"
              onClick={() => Router.push(`/`)}
            />
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default ProfileHome
