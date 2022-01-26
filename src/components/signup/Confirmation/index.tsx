import Button from 'components/common/Button'
import CustomInput from 'components/common/CustomFields/InputField'
import Header from 'components/common/Header'
import { buttonColors } from 'constants/'
import { INIT_CONFIRM_FORM_VALUE, VALIDATE_CONFIRM_SCHEMA } from 'constants/auth'
import { FastField, Form, Formik } from 'formik'
import { CfFormProps } from 'interfaces/Auth'
import React from 'react'
import { ConfirmationSession } from './styled'

const Confirmation: React.FC<CfFormProps> = ({ handleConfirm }) => {
  return (
    <ConfirmationSession>
      <Header shadow />
      <div className="container">
        <div className="cf-main">
          <h1 className="global-heading cf-title">
            ご登録のメールアドレス宛に認証URLを送信しました
          </h1>
          <p className="global-desc cf-mail-desc">
            ＠xxx.comからのメールが受信できるようにしてください。メールが届いていない場合、迷惑メールフォルダを確認してください。
          </p>
          <h3 className="global-heading cf-mail-expired">本登録メールの有効期限が切れた場合</h3>
          <p className="global-desc cf-note">
            こちらのメールアドレスを再送してください。
            本登録時にメールアドレスを間違えた場合、お手数をおかけしますが、最初から登録しなおしてください。
          </p>
          <Formik
            initialValues={INIT_CONFIRM_FORM_VALUE}
            validationSchema={VALIDATE_CONFIRM_SCHEMA}
            onSubmit={(values, actions) => {
              handleConfirm(values)
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
                  <Button
                    title="メール認証へ"
                    type="submit"
                    buttonColor={buttonColors.STYLE02}
                    height={48}
                    margin="4.8rem 0 2rem 0"
                  />
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    </ConfirmationSession>
  )
}

export default Confirmation
