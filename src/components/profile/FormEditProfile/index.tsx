import React from 'react'
import Button from 'components/common/Button'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import CustomDate from 'components/common/CustomFields/DateField'
import { buttonColors } from 'constants/index'
import { OPTIONS_GENDER } from 'constants/auth'
import { FastField, Form, Formik } from 'formik'
import { EditProfileFormProps } from 'interfaces/Profile'

// =================================================================================
import * as Yup from 'yup' // remember remove
// =================================================================================
import { EditProfileFormStyled } from './styled'
// =================================================================================
const INIT_FORM_VALUE = {
  nickname: 'wer',
  email: 'wer',
  password: 'wer',
  first_name: 'wer',
  last_name: 'wer',
  public_setting_full_name: 'yourself',
  eng_name: 'wer',
  birthday: new Date(),
  gender: 'wer',
  chua_biet: 'wer',
  phone_number: 'wer',
  public_setting_phone_number: 'yourself',
  email_contact: 'wer',
  public_setting_email_contact: 'yourself',
}
const VALIDATE_SCHEMA = Yup.object().shape({
  nickname: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  public_setting_full_name: Yup.string().required(),
  eng_name: Yup.string().required(),
  birthday: Yup.date().required(),
  gender: Yup.string().required(),
  chua_biet: Yup.string().required(),
  phone_number: Yup.string().required(),
  public_setting_phone_number: Yup.string().required(),
  email_contact: Yup.string().required(),
  public_setting_email_contact: Yup.string().required(),
})
const OPTIONS_PUBLIC_SETTING: { value: number | string; label: string }[] = [
  {
    value: 'yourself',
    label: '自分だけに公開',
  },
]
// =================================================================================

const EditProfileForm: React.FC<EditProfileFormProps> = ({ handleSubmit }) => {
  return (
    <div className="container">
      <EditProfileFormStyled>
        <h1 className="title">プロフィール編集</h1>
        <Formik
          initialValues={INIT_FORM_VALUE}
          validationSchema={VALIDATE_SCHEMA}
          onSubmit={async (values, actions) => {
            await handleSubmit(values)
            actions.setSubmitting(false)
          }}
        >
          {() => {
            return (
              <Form>
                <FastField
                  name="nickname"
                  component={CustomInput}
                  label="ニックネーム"
                  lbTag="any"
                  pb={1}
                />
                <p className="sub-text-input-nickname">後から変更できます</p>

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

                <FastField
                  name="first_name"
                  component={CustomInput}
                  label="本名（苗字)"
                  lbTag="require"
                />

                <FastField
                  name="last_name"
                  component={CustomInput}
                  label="本名（名前)"
                  lbTag="require"
                />

                <FastField
                  name="public_setting_full_name"
                  component={CustomSelect}
                  label="公開設定（本名）"
                  options={OPTIONS_PUBLIC_SETTING}
                />

                <FastField
                  name="eng_name"
                  component={CustomInput}
                  label="名前（英語/ローマ字表記)"
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

                <FastField name="chua_biet" component={CustomInput} label="所属団体" lbTag="any" />

                <FastField
                  name="phone_number"
                  component={CustomInput}
                  label="所属団体"
                  lbTag="any"
                />

                <FastField
                  name="public_setting_phone_number"
                  component={CustomSelect}
                  label="公開設定（連絡先電話番号）"
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
                  label="公開設定（連絡先メールアドレス）"
                  options={OPTIONS_PUBLIC_SETTING}
                />

                <Button
                  title="保存"
                  type="submit"
                  buttonColor={buttonColors.STYLE02}
                  height={48}
                  margin="4rem 0 2rem 0"
                />
              </Form>
            )
          }}
        </Formik>
      </EditProfileFormStyled>
    </div>
  )
}

export default EditProfileForm
