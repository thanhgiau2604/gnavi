import React, { useState, useEffect, useRef } from 'react'
import { FastField, Form, Formik, FieldArray } from 'formik'
import { ColorResult } from 'react-color'
import { Membership, InfoProfile, EditProfilePayload } from 'interfaces/Profile'
import useOnClickOutSide from 'hooks/useOnClickOutSide'
import Button from 'components/common/Button'
import ButtonUpload from 'components/common/ButtonUpload'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import CustomDate from 'components/common/CustomFields/DateField'
import {
  BUTTON_COLORS,
  BUTTON_UPLOAD_COLORS,
  FONT_SIZES,
  OPTIONS_GENDER,
  OPTIONS_PUBLIC_SETTING,
  FORM_EDIT_PROFILE_VALIDATE_SCHEMA,
  INIT_FORM_EDIT_PROFILE_VALUE,
  InitColorResult,
} from '@constants'
import { FieldLabel } from 'components/common/CustomFields/styled'
import Flex from 'styles/styled/layout/FlexLayout'
import ColorPicker from 'components/common/ColorPicker'
import { onChangeColorHex, onChangeColorResult } from 'components/common/ColorPicker/functions'

export interface props {
  infoUser?: InfoProfile
  handleSubmit: (payload: EditProfilePayload) => void
}

const EditProfileForm: React.FC<props> = ({ infoUser, handleSubmit }) => {
  const [valueForm, setValueForm] = useState<InfoProfile>()

  const [showColorPicker, setShowColorPicker] = useState<boolean>(false)
  const [themeColor, setThemeColor] = useState<string>('')
  const [colorHex, setColorHex] = useState<string>('')
  const [colorResult, setColorResult] = useState<ColorResult>(InitColorResult)
  const ref = useRef(null)
  const onCloseColorPicker = () => setShowColorPicker(false)
  useOnClickOutSide(ref, onCloseColorPicker)

  useEffect(() => {
    if (infoUser) {
      setValueForm(infoUser)
      setThemeColor(infoUser.theme_color)
      setColorHex(infoUser.theme_color)
      setColorResult({ ...InitColorResult, hex: infoUser.theme_color })
    } else setValueForm(INIT_FORM_EDIT_PROFILE_VALUE)
  }, [infoUser])

  const handleChooseColorHex = (_colorHex: string) => () => {
    setThemeColor(_colorHex)
    onCloseColorPicker()
  }

  if (!valueForm) return null

  return (
    <Formik
      initialValues={valueForm}
      validationSchema={FORM_EDIT_PROFILE_VALIDATE_SCHEMA}
      onSubmit={async (values, actions) => {
        await handleSubmit({ ...values, theme_color: themeColor })
        actions.setSubmitting(false)
      }}
    >
      {({ values }) => {
        return (
          <Form>
            <FastField
              name="email"
              component={CustomInput}
              label="メールアドレス"
              lbTag="require"
            />

            <FastField
              name="password"
              component={CustomInput}
              label="パスワード"
              lbTag="require"
              type="password"
            />

            <FastField name="ja_name" component={CustomInput} label="名前" lbTag="require" />

            <FastField
              name="eng_name"
              component={CustomInput}
              label="名前(英語/ローマ字表記)"
              lbTag="any"
            />

            <FastField name="birthday" component={CustomDate} label="誕生日" lbTag="require" />

            <FastField
              name="gender"
              component={CustomSelect}
              label="性別"
              lbTag="any"
              options={OPTIONS_GENDER}
            />

            <FieldArray
              name="memberships"
              render={(arrayHelpers) =>
                values.travel_organizations.map((member: Membership, index: number) => {
                  const lastItem = index === values.travel_organizations.length - 1

                  return (
                    <div key={member.id}>
                      <FastField
                        name={`memberships.${index}.value`}
                        component={CustomInput}
                        label={`所属団体 - ${index}`}
                        lbTag="any"
                        pb={1}
                      />

                      {values.travel_organizations.length !== 1 && (
                        <button
                          type="button"
                          style={{ marginBottom: 20, width: '100%' }}
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Remove
                        </button>
                      )}

                      {lastItem && (
                        <Button
                          width="100%"
                          buttonColor={BUTTON_COLORS.style06}
                          title="所属団体を追加"
                          margin={
                            values.travel_organizations.length === 1 ? '30px 0' : '0 0 30px 0'
                          }
                          onClick={() =>
                            arrayHelpers.push({ id: Math.floor(Math.random() * 10000), value: '' })
                          }
                        />
                      )}
                    </div>
                  )
                })
              }
            />

            <FastField
              name="phone_number"
              component={CustomInput}
              label="連絡先電話番号"
              lbTag="any"
            />

            <FastField
              name="public_setting_phone_number"
              component={CustomSelect}
              label="公開設定 (連絡先電話番号)"
              options={OPTIONS_PUBLIC_SETTING}
            />

            <FastField
              name="email_contact"
              component={CustomInput}
              label="連絡先メールアドレス"
              lbTag="any"
            />

            <FastField
              name="public_setting_email_contact"
              component={CustomSelect}
              label="公開設定 (連絡先メールアドレス)"
              options={OPTIONS_PUBLIC_SETTING}
            />

            <FieldLabel>
              <label className="profile-edit-page-label">カバー画像を設定</label>
              <p className="lb-tag lb-tag--any">任意</p>
            </FieldLabel>

            <ButtonUpload
              buttonUploadColor={BUTTON_UPLOAD_COLORS.style02}
              _fontSize={FONT_SIZES.small}
              fontWeight={400}
              title="画像を選択する"
              margin="0 0 3.6rem 0"
            />

            <FieldLabel>
              <label className="profile-edit-page-label">プロフィールのテーマカラーを設定</label>
              <p className="lb-tag lb-tag--any">任意</p>
            </FieldLabel>

            <button
              type="button"
              className="color-picker-input"
              onClick={() => setShowColorPicker(!showColorPicker)}
            >
              {themeColor}
            </button>

            {showColorPicker && (
              <>
                <div className="background-colorpicker-active" />
                <div className="color-picker-container" ref={ref}>
                  <span role="presentation" className="btn-close-cp" onClick={onCloseColorPicker}>
                    &times;
                  </span>
                  <ColorPicker
                    colorResult={colorResult}
                    onChangeColorHex={onChangeColorHex(setColorHex)}
                    onChangeColorResult={onChangeColorResult(setColorResult)}
                  />
                  <Flex justifyContent="center">
                    <Button
                      title="保存する"
                      buttonColor={BUTTON_COLORS.style01}
                      onClick={handleChooseColorHex(colorHex)}
                      margin="0"
                      width="90%"
                    />
                  </Flex>
                </div>
              </>
            )}

            <Button
              title="保存"
              type="submit"
              buttonColor={BUTTON_COLORS.style02}
              height={48}
              margin="2rem 0 2rem 0"
            />
          </Form>
        )
      }}
    </Formik>
  )
}

export default EditProfileForm
