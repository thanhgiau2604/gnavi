import {
  BUTTON_COLORS,
  GUIDEBAG_CATEGORIES,
  INIT_POST_FORM_VALUE,
  POST_TYPE_OPTIONS,
} from '@constants'
import Button from 'components/common/Button'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import { FastField, Form, Formik } from 'formik'
import React from 'react'
import CategorySelect from '../CategorySelect'

const PostForm: React.FC = () => {
  return (
    <div>
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

              <FastField
                name="category_01"
                component={CategorySelect}
                label="カテゴリ1"
                categories={GUIDEBAG_CATEGORIES[0]}
              />

              <FastField
                name="category_02"
                component={CategorySelect}
                label="カテゴリ2"
                categories={GUIDEBAG_CATEGORIES[0]}
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
    </div>
  )
}

export default PostForm
