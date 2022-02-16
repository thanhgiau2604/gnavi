import React, { useState } from 'react'
import { FastField, Form, Formik } from 'formik'
import { ColorResult } from 'react-color'
import { EditProfileFormProps } from 'interfaces/Profile'
import Button from 'components/common/Button'
import ButtonUpload from 'components/common/ButtonUpload'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import CustomDate from 'components/common/CustomFields/DateField'
import ColorPicker from 'components/ColorPicker'
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

const EditProfileForm: React.FC<EditProfileFormProps> = ({ handleSubmit }) => {
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false)
  const [color, setColor] = useState<string>('#fff')
  const [colorResult, setColorResult] = useState<ColorResult>(InitColorResult)

  const handleShowColorPicker = () => setShowColorPicker(!showColorPicker)
  const handleChangeColor = (_color: string) => setColor(_color)
  const handleChangeColorResult = (_colorResult: ColorResult) => setColorResult(_colorResult)
  return (
    <Formik
      initialValues={INIT_FORM_EDIT_PROFILE_VALUE}
      validationSchema={FORM_EDIT_PROFILE_VALIDATE_SCHEMA}
      onSubmit={async (values, actions) => {
        await handleSubmit(values)
        actions.setSubmitting(false)
      }}
    >
      {() => {
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

            <FastField name="name" component={CustomInput} label="名前" lbTag="require" />

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
              lbTag="require"
              options={OPTIONS_GENDER}
            />

            <FastField name="membership" component={CustomInput} label="所属団体" lbTag="any" />

            <Button
              width="100%"
              buttonColor={BUTTON_COLORS.style06}
              title="所属団体を追加"
              margin="0 0 30px 0"
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
              <label className="profile-label">カバー画像を設定</label>
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
              <label className="profile-label">プロフィールのテーマカラーを設定</label>
              <p className="lb-tag lb-tag--any">任意</p>
            </FieldLabel>

            <button type="button" className="color-picker-input" onClick={handleShowColorPicker}>
              {color}
            </button>

            {showColorPicker && (
              <ColorPicker
                color={colorResult}
                handleChangeColor={handleChangeColor}
                handleChangeColorResult={handleChangeColorResult}
              />
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
