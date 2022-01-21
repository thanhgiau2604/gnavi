import { OptionProps } from 'interfaces/CustomField'
import { FastField, Formik, Form } from 'formik'
import * as Yup from 'yup'
import CustomSelect from 'components/common/CustomFields/SelectField'
import CustomInput from 'components/common/CustomFields/InputField'
import Button from 'components/common/Button'
import FlexContainer from 'styles/styled/layout/FlexLayout'

interface FormValues {
  username: string
  password: string
  description: string
  gender: string
}

const FormInputWithFormik: React.FC = () => {
  const initialValues: FormValues = {
    username: '',
    password: '',
    description: '',
    gender: 'male',
  }

  const options: OptionProps[] = [
    {
      value: 'male',
      label: '男性',
    },
    {
      value: 'female',
      label: '女性',
    },
    {
      value: 'others',
      label: 'その他',
    },
  ]

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
    gender: Yup.string().required(),
  })

  return (
    <FlexContainer justifyContent="center" margin="30px 0">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false)
        }}
      >
        {() => {
          return (
            <Form>
              <FastField name="username" component={CustomInput} label="ユーザー名" required />

              <FastField
                name="password"
                component={CustomInput}
                label="パスワード"
                type="password"
                required
              />

              <FastField
                name="description"
                component={CustomInput}
                label="説明"
                type="text-area"
                height={335}
              />

              <FastField
                name="gender"
                component={CustomSelect}
                label="性別"
                options={options}
                required
              />
              <Button title="参加する" type="submit" />
            </Form>
          )
        }}
      </Formik>
    </FlexContainer>
  )
}

export default FormInputWithFormik
