import { OptionProps } from 'interfaces/CustomField'
import { FastField, Formik, Form } from 'formik'
import * as Yup from 'yup'
import CustomSelect from 'components/common/CustomFields/SelectField'
import CustomInput from 'components/common/CustomFields/InputField'
import Button from 'components/common/Button'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import CustomCheckBox from 'components/common/CustomFields/CheckboxField'
import { CHECKBOX_THEME } from 'constants/field'
import CustomDate from 'components/common/CustomFields/DateField'

interface FormValues {
  username: string
  password: string
  description: string
  gender: string
  transport: string[]
  birthday: Date
}

const FormInputWithFormik: React.FC = () => {
  const initialValues: FormValues = {
    username: '',
    password: '',
    description: '',
    gender: 'male',
    transport: [],
    birthday: new Date(),
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
    transport: Yup.array().min(1),
    password: Yup.string().required(),
    gender: Yup.string().required(),
  })

  return (
    <FlexContainer justifyContent="center" margin="30px 0">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values)
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
                lbTag="require"
              />

              <FastField
                name="description"
                component={CustomInput}
                label="説明"
                type="text-area"
                height={335}
                lbTag="any"
              />

              <FastField
                name="gender"
                component={CustomSelect}
                label="性別"
                options={options}
                lbTag="require"
              />

              <FastField
                name="transport"
                component={CustomCheckBox}
                label="Car"
                theme={CHECKBOX_THEME.PRIMARY}
              />
              <FastField
                name="transport"
                component={CustomCheckBox}
                label="Moto"
                theme={CHECKBOX_THEME.SECONDARY}
              />

              <FastField
                name="birthday"
                component={CustomDate}
                label="バースデー"
                lbTag="any"
                width={800}
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
