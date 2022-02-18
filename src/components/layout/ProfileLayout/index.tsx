import React from 'react'
import Router from 'next/router'
import { useTranslation } from 'react-i18next'
import Avatar from 'components/common/Avatar'
import Button from 'components/common/Button'
import ButtonGroup, { ButtonGroupItem } from 'components/common/ButtonGroup'
import FlexContainer, { FlexItem } from 'styles/styled/layout/FlexLayout'
import { BUTTON_COLORS, FONT_SIZES, LANGUAGE_CODE } from '@constants'
import { ProfileLayoutStyled } from './styled'

interface ProfileLayoutProps {
  dataInfoUser: any
  children: React.ReactNode
}

const options = ['対応可能です', 'online', 'away', 'offline']

const ProfileLayout = ({ dataInfoUser, children }: ProfileLayoutProps) => {
  const isMyProfile = false
  const { t, i18n } = useTranslation()
  const isJA = i18n.language === LANGUAGE_CODE.japanese

  return (
    <>
      <div className="container">
        <ProfileLayoutStyled>
          <FlexContainer alignItems={isMyProfile ? '' : 'flex-end'}>
            <FlexItem flex="1" className="avatar">
              {isMyProfile && <img src="/icons/icon_button_upload_photo.svg" alt="btn-upload" />}
              <Avatar src="/images/profile_2.png" alt="ryoko hanako" size="large" />
            </FlexItem>
            <FlexItem flex="1">
              {isMyProfile ? (
                <div className="btn-edit-form">
                  <Button
                    width="100%"
                    buttonColor={BUTTON_COLORS.style03}
                    title="プロフィールを編集"
                    margin="0"
                    radius={4}
                    fontWeight={400}
                    _fontSize={FONT_SIZES.small}
                    onClick={() => Router.push(`/profile/${dataInfoUser.id}/edit`)}
                  />
                </div>
              ) : (
                <>
                  <div className="gr-guide">
                    <p className="guide">沖縄ガイド</p>
                    <span>対応エリア: </span>
                    <span className="correspondence-area-value">本島中部 石 垣島</span>
                  </div>
                  <FlexContainer className="gr-btn-language">
                    <Button
                      buttonColor={isJA ? undefined : BUTTON_COLORS.style03}
                      width="8rem"
                      title={t('translate:japanese')}
                      margin="5px"
                      radius={4}
                      fontWeight={isJA ? 700 : 400}
                      _fontSize={FONT_SIZES.small}
                      onClick={() => i18n.changeLanguage('ja')}
                    />
                    <Button
                      buttonColor={isJA ? BUTTON_COLORS.style03 : undefined}
                      width="8rem"
                      title={t('translate:english')}
                      margin="5px"
                      radius={4}
                      fontWeight={isJA ? 400 : 700}
                      _fontSize={FONT_SIZES.small}
                      onClick={() => i18n.changeLanguage('en')}
                    />
                  </FlexContainer>
                </>
              )}
            </FlexItem>
          </FlexContainer>
          <div>
            <span className={`main-name ${!isJA ? 'text-capfirst' : ''}`}>
              {isJA ? dataInfoUser.ja_name : dataInfoUser.en_name}
            </span>
            {isJA && <span className="sub-name">{dataInfoUser.en_name}</span>}
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
            <div>
              {t('translate:operation_status')} : {t(`translate:${dataInfoUser.status}`)}
            </div>
          )}
          <div>
            <p>{isJA ? '沖縄はお任せください!' : 'Please leave Okinawa to us!'}</p>
            <p>
              20代後半 / {t(`translate:${dataInfoUser.gender}`)} /{' '}
              {t(`translate:${dataInfoUser.area}`)}
            </p>
          </div>
          <div>
            <span>{t('translate:evaluation')}: </span>
            <span className="value-rating">5 star</span>
            <span> - </span>
            <span>{t('translate:follower')}: </span>
            <span className="value-follower">10000</span>
          </div>
          <div>
            <span>{t('translate:travel_organizations')}: </span>
            <span className="text-value">
              {isJA ? '沖縄本島ガイド会' : 'Membership of professional institutions'}
            </span>
          </div>
          <div>
            <span>{t('translate:telephone')}: </span>
            <span className="text-value">{dataInfoUser.phone_number}</span>
          </div>
          <div>
            <span>{t('translate:email')}: </span>
            <span className="text-value">{dataInfoUser.email}</span>
          </div>
        </ProfileLayoutStyled>
      </div>

      <ButtonGroup itemPerRow={3}>
        <ButtonGroupItem text={t('translate:home')} active />
        <ButtonGroupItem text={t('translate:tourist_spot')} />
        <ButtonGroupItem text={t('translate:skill')} />
        <ButtonGroupItem text={t('translate:activity')} />
        <ButtonGroupItem text={t('translate:photo_gallery')} />
      </ButtonGroup>

      {children}

      {isMyProfile && (
        <div className="profile-tag-home-footer">
          <Button
            width={320}
            buttonColor={BUTTON_COLORS.style01}
            title="自分のページを編集する"
            margin="0.8rem auto"
            onClick={() => Router.push(`/`)}
          />
        </div>
      )}
    </>
  )
}

export default ProfileLayout
