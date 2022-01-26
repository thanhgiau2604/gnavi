import Button from 'components/common/Button'
import CustomInput from 'components/common/CustomFields/InputField'
import Header from 'components/common/Header'
import { INIT_LOGIN_FORM_VALUE, VALIDATE_LOGIN_SCHEMA } from 'constants/auth'
import { buttonColors, routes } from 'constants/index'
import { FastField, Form, Formik } from 'formik'
import { LoginFormProps } from 'interfaces/Auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { LoginSession } from './styled'

const LoginForm: React.FC<LoginFormProps> = ({ handleLogin }) => {
  const router = useRouter()

  return (
    <LoginSession>
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
                    buttonColor={buttonColors.STYLE02}
                    height={48}
                  />
                </Form>
              )
            }}
          </Formik>
          <Link href="#!">
            <a className="login-forgot-pass">パスワードを忘れた方はこちら</a>
          </Link>
          <Button
            title="新規登録はこちら"
            buttonColor={buttonColors.STYLE01}
            height={48}
            margin="5.5rem 0 2rem 0"
            onClick={() => router.push(routes.SIGNUP)}
          />
        </div>
      </div>
    </LoginSession>
  )
}

export default LoginForm
