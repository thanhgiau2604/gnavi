import React from 'react'
import Router from 'next/router'
import Avatar from 'components/common/Avatar'
import Button from 'components/common/Button'
import ButtonGroup, { ButtonGroupItem } from 'components/common/ButtonGroup'
import FlexContainer, { FlexItem } from 'styles/styled/layout/FlexLayout'
import { BUTTON_COLORS, FONT_SIZES } from '@constants'
import { ProfileLayoutStyled } from './styled'

interface ProfileLayoutProps {
  userId: number
  children: React.ReactNode
}

const options = ['対応可能です', 'online', 'away', 'offline']

const ProfileLayout = ({ userId, children }: ProfileLayoutProps) => {
  // =================================================================================================
  const isMyProfile = true
  // =================================================================================================

  return (
    <>
      <div className="container">
        <ProfileLayoutStyled>
          <FlexContainer>
            <FlexItem flex="1" className="avatar">
              <img src="/icons/icon_button_upload_photo.svg" alt="btn-upload" />
              <Avatar src="/images/profile_2.png" alt="ryoko hanako" size="large" />
            </FlexItem>
            <FlexItem flex="1">
              {isMyProfile && (
                <div className="btn-edit-form">
                  <Button
                    width="100%"
                    buttonColor={BUTTON_COLORS.style03}
                    title="プロフィールを編集"
                    margin="0"
                    radius={4}
                    fontWeight={400}
                    _fontSize={FONT_SIZES.small}
                    onClick={() => Router.push(`/profile/${userId}/edit`)}
                  />
                </div>
              )}
            </FlexItem>
          </FlexContainer>
          <div>
            <span className="name-jp">旅行花子</span>
            <span className="name-eng">ryoko hanako</span>
          </div>
          {isMyProfile ? (
            <div>
              <span>稼働状況</span>
              <select>
                {options.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div>最終ログイン: 1時間前 / 稼働状況: 対応可能です</div>
          )}
          <div>
            <p>沖縄はお任せください!</p>
            <p>20代後半 / 女性 / 沖縄県</p>
          </div>
          <div>
            <span>評価: </span>
            <span className="value-rating">5 star</span>
            <span> - </span>
            <span>フォロワー: </span>
            <span className="value-follower">0</span>
          </div>
          <div>
            <span>所属団体: </span>
            <span className="text-value">沖縄本島ガイド会</span>
          </div>
          <div>
            <span>連絡先電話番号: </span>
            <span className="text-value">090-000-0000</span>
          </div>
          <div>
            <span>連絡先E-mail: </span>
            <span className="text-value">hanako_r@okinawa.net</span>
          </div>
        </ProfileLayoutStyled>
      </div>

      <ButtonGroup itemPerRow={3}>
        <ButtonGroupItem text="ホーム" active />
        <ButtonGroupItem text="案内できる観光地" />
        <ButtonGroupItem text="スキル" />
        <ButtonGroupItem text="最近の活動" />
        <ButtonGroupItem text="写真ギャラリー" />
      </ButtonGroup>

      {children}
    </>
  )
}

export default ProfileLayout
