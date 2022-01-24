import Button from 'components/common/Button'
import CustomInput from 'components/common/CustomFields/InputField'
import Header from 'components/common/Header'
import { FastField, Form, Formik } from 'formik'
import { LoginPayload } from 'interfaces/Auth'
import React from 'react'
import * as Yup from 'yup'

const LoginForm: React.FC = () => {
  const initialLoginForm: LoginPayload = {
    Username: '',
    Password: '',
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  })

  return (
    <div className="session-login">
      <Header shadow />
      <div className="login-main">
        <h1 className="login-title">ログイン</h1>
        <Formik
          initialValues={initialLoginForm}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values)
            actions.setSubmitting(false)
          }}
        >
          {() => {
            return (
              <Form>
                <FastField
                  name="username"
                  component={CustomInput}
                  label="メールアドレス"
                  required
                  maxLength={50}
                />

                <FastField
                  name="password"
                  component={CustomInput}
                  label="パスワード"
                  type="password"
                  lbTag="require"
                  maxLength={100}
                />
                <Button title="ログイン" type="submit" />
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}

export default LoginForm
