import React from 'react'
import Link from 'next/link'
import Button from 'components/common/Button'
import CustomInput from 'components/common/CustomFields/InputField'
import Header from 'components/common/Header'
import { INIT_LOGIN_FORM_VALUE, VALIDATE_LOGIN_SCHEMA, BUTTON_COLORS, ROUTES } from '@constants'
import { FastField, Form, Formik } from 'formik'
import { LoginFormProps } from 'interfaces/Auth'
import { useRouter } from 'next/router'
import { LoginSection } from './styled'

const LoginForm: React.FC<LoginFormProps> = ({ handleLogin }) => {
  const router = useRouter()

  return (
    <LoginSection>
      <Header shadow />
      <div className="container">
        <div className="login-main">
          <h1 className="global-heading login-title">ログイン</h1>
          <Formik
            initialValues={INIT_LOGIN_FORM_VALUE}
            validationSchema={VALIDATE_LOGIN_SCHEMA}
            onSubmit={(values, actions) => {
              handleLogin(values)
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
                    type="password"
                    lbTag="require"
                  />
                  <Button
                    title="ログイン"
                    type="submit"
                    buttonColor={BUTTON_COLORS.style02}
                    height={48}
                  />
                </Form>
              )
            }}
          </Formik>
          <div className="login-forgot-pass">
            <Link href="#!">
              <a>パスワードを忘れた方はこちら</a>
            </Link>
          </div>

          <Button
            title="新規登録はこちら"
            buttonColor={BUTTON_COLORS.style01}
            height={48}
            margin="5.5rem 0 2rem 0"
            onClick={() => router.push(ROUTES.signup)}
          />
        </div>
      </div>
    </LoginSection>
  )
}

export default LoginForm
