import { BUTTON_COLORS, INIT_COMMENT_FORM_VALUE } from '@constants'
import Button from 'components/common/Button'
import CustomInput from 'components/common/CustomFields/InputField'
import { FastField, Form, Formik } from 'formik'
import React from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import PostInfo from '../PostInfo'
import { CommentFormContainer } from './styled'

const CommentForm = () => {
  return (
    <CommentFormContainer>
      <div className="comment-form-info">
        <PostInfo picture="/images/profile_2.png" username="旅行花子" postStatus="none" />
      </div>
      <div className="comment-form-main">
        <Formik
          initialValues={INIT_COMMENT_FORM_VALUE}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false)
          }}
        >
          {() => {
            return (
              <Form>
                <FastField type="text-area" name="content" component={CustomInput} height={219} />
                <FlexContainer justifyContent="space-between">
                  <Button
                    title="キャンセル"
                    buttonColor={BUTTON_COLORS.style06}
                    height={35}
                    width={150}
                    margin="0"
                    radius={4}
                    fontWeight={400}
                  />
                  <Button
                    title="返信"
                    type="submit"
                    buttonColor={BUTTON_COLORS.style01}
                    height={35}
                    width={150}
                    margin="0"
                    radius={4}
                  />
                </FlexContainer>
              </Form>
            )
          }}
        </Formik>
      </div>
    </CommentFormContainer>
  )
}

export default CommentForm
