import React from 'react'
import { FastField, Form, Formik } from 'formik'
import { BUTTON_COLORS, INIT_SIGNUP_FORM_VALUE, VALIDATE_SIGNUP_SCHEMA } from '@constants'
import Button from 'components/common/Button'
import CustomDate from 'components/common/CustomFields/DateField'
import CustomInput from 'components/common/CustomFields/InputField'
import Header from 'components/common/Header'
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
              actions.setSubmitting(false)
              handleSignup(values)
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
                    <br />
                    になります。後から変更できません。
                  </p>

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

                  <FastField name="fullname" component={CustomInput} label="氏名" lbTag="require" />

                  <FastField
                    name="birthday"
                    component={CustomDate}
                    label="誕生日"
                    lbTag="require"
                  />

                  <Button
                    title="メール認証へ"
                    type="submit"
                    buttonColor={BUTTON_COLORS.style02}
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
