import { BUTTON_COLORS, INIT_POST_FORM_VALUE, PLACE_OPTIONS, THEME_OPTIONS } from '@constants'
import Button from 'components/common/Button'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import { FastField, Form, Formik } from 'formik'
import React from 'react'
import { PostFormContainer } from './styled'

const PostForm: React.FC = () => {
  return (
    <PostFormContainer>
      <Formik
        initialValues={INIT_POST_FORM_VALUE}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false)
        }}
      >
        {() => {
          return (
            <Form>
              <FastField type="text-area" name="content" component={CustomInput} height={219} />
              <FastField
                name="place"
                component={CustomSelect}
                label="場所"
                options={PLACE_OPTIONS}
              />
              <FastField
                name="theme"
                component={CustomSelect}
                label="テーマ"
                options={THEME_OPTIONS}
              />
              <FastField name="new_theme" component={CustomInput} label="テーマを作成する" pb={0} />

              <Button
                title="上記内容で質問する"
                type="submit"
                buttonColor={BUTTON_COLORS.style01}
                height={40}
                margin="4.3rem 0 0"
              />
            </Form>
          )
        }}
      </Formik>
    </PostFormContainer>
  )
}

export default PostForm
