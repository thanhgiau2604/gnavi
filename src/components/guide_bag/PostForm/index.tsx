import { BUTTON_COLORS, INIT_POST_FORM_VALUE, POST_TYPE_OPTIONS } from '@constants'
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
              <FastField name="title" component={CustomInput} label="タイトル" />
              <FastField
                type="text-area"
                name="content"
                component={CustomInput}
                height={219}
                label="内容"
              />
              <FastField
                name="post_type"
                component={CustomSelect}
                label="場所"
                options={POST_TYPE_OPTIONS}
              />
              <Button
                title="上記内容で質問する"
                type="submit"
                buttonColor={BUTTON_COLORS.style01}
                height={40}
                margin="3.5rem 0"
              />
            </Form>
          )
        }}
      </Formik>
    </PostFormContainer>
  )
}

export default PostForm
