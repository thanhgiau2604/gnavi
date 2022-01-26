import React from 'react'
import Button from 'components/common/Button'
import CustomDate from 'components/common/CustomFields/DateField'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import Header from 'components/common/Header'
import { buttonColors } from 'constants/index'
import { FastField, Form, Formik } from 'formik'
import {
  INIT_SIGNUP_FORM_VALUE,
  OPTIONS_GENDER,
  OPTIONS_PUBLIC_SETTING,
  VALIDATE_SIGNUP_SCHEMA,
} from 'constants/auth'
import { SignupFormProps } from 'interfaces/Auth'
import { SignupSection } from './styled'

const SignupForm: React.FC<SignupFormProps> = ({ handleSignup }) => {
  return (
    <SignupSection>
      <Header shadow />
      <div className="container">
        <div className="signup-main">
          <h1 className="global-heading signup-title">ログイン</h1>
          <Formik
            initialValues={INIT_SIGNUP_FORM_VALUE}
            validationSchema={VALIDATE_SIGNUP_SCHEMA}
            onSubmit={(values, actions) => {
              handleSignup(values)
              actions.setSubmitting(false)
            }}
          >
            {() => {
              return (
                <Form>
                  <FastField
                    name="username"
                    component={CustomInput}
                    label="ユーザーID※"
                    lbTag="require"
                    pb={13}
                  />

                  <p className="global-desc signup-desc-username">
                    あなたの公開プロフィールURLは、https://guidenavi.com/user/
                    になります。後から変更できません。
                  </p>

                  <FastField
                    name="nickname"
                    component={CustomInput}
                    label="ニックネーム"
                    lbTag="any"
                    pb={8}
                  />

                  <p className="global-desc signup-desc-nickname">後から変更できます</p>

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
                    type="password"
                    lbTag="require"
                  />

                  <FastField
                    name="last_name"
                    component={CustomInput}
                    label="本名（苗字）"
                    lbTag="require"
                  />

                  <FastField
                    name="first_name"
                    component={CustomInput}
                    label="本名（名前）"
                    lbTag="require"
                  />

                  <FastField
                    name="public_setting"
                    component={CustomSelect}
                    label="公開設定"
                    lbTag="require"
                    options={OPTIONS_PUBLIC_SETTING}
                  />

                  <FastField
                    name="birthday"
                    component={CustomDate}
                    label="誕生日"
                    lbTag="require"
                  />

                  <FastField
                    name="gender"
                    component={CustomSelect}
                    label="性別"
                    lbTag="require"
                    options={OPTIONS_GENDER}
                  />

                  <Button
                    title="メール認証へ"
                    type="submit"
                    buttonColor={buttonColors.STYLE02}
                    height={48}
                    margin="4rem 0 2rem 0"
                  />
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    </SignupSection>
  )
}

export default SignupForm
