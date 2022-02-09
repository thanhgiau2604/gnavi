import React from 'react'
import { FastField, Form, Formik } from 'formik'
import { EditProfileFormProps } from 'interfaces/Profile'
import Button from 'components/common/Button'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import CustomDate from 'components/common/CustomFields/DateField'
import { BUTTON_COLORS } from 'constants/index'
import { OPTIONS_GENDER, OPTIONS_PUBLIC_SETTING } from 'constants/auth'
import { FORM_EDIT_PROFILE_VALIDATE_SCHEMA, INIT_FORM_EDIT_PROFILE_VALUE } from 'constants/profile'

const EditProfileForm: React.FC<EditProfileFormProps> = ({ handleSubmit }) => {
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
              name="nickname"
              component={CustomInput}
              label="ニックネーム"
              lbTag="any"
              pb={1}
            />
            <p className="profile-form-edit-sub-text-input-nickname">後から変更できます</p>

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
              label="本名 (苗字)"
              lbTag="require"
            />
            <FastField
              name="last_name"
              component={CustomInput}
              label="本名 (名前)"
              lbTag="require"
            />
            <FastField
              name="public_setting_full_name"
              component={CustomSelect}
              label="公開設定(本名)"
              options={OPTIONS_PUBLIC_SETTING}
            />
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

            <FastField name="phone_number" component={CustomInput} label="所属団体" lbTag="any" />

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
            <Button
              title="保存"
              type="submit"
              buttonColor={BUTTON_COLORS.style02}
              height={48}
              margin="4rem 0 2rem 0"
            />
          </Form>
        )
      }}
    </Formik>
  )
}

export default EditProfileForm
