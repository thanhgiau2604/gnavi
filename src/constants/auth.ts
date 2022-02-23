import * as Yup from 'yup'
import { ConfirmPayload, LoginPayload, SignupPayload } from 'interfaces/Auth'
import { OptionProps } from 'interfaces/CustomField'

const INIT_LOGIN_FORM_VALUE: LoginPayload = {
  email: '',
  password: '',
}

const INIT_SIGNUP_FORM_VALUE: SignupPayload = {
  username: '',
  email: '',
  password: '',
  name: '',
  birthday: new Date('1/1/1990'),
}

const INIT_CONFIRM_FORM_VALUE: ConfirmPayload = {
  email: '',
}

const VALIDATE_LOGIN_SCHEMA = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
})

const VALIDATE_SIGNUP_SCHEMA = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
  name: Yup.string().required(),
  birthday: Yup.string().required(),
})

const VALIDATE_CONFIRM_SCHEMA = Yup.object().shape({
  email: Yup.string().required(),
})

const OPTIONS_PUBLIC_SETTING: OptionProps[] = [
  {
    value: 'yourself',
    label: '自分だけに公開',
  },
]

const OPTIONS_GENDER: OptionProps[] = [
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

export {
  INIT_LOGIN_FORM_VALUE,
  VALIDATE_LOGIN_SCHEMA,
  INIT_SIGNUP_FORM_VALUE,
  VALIDATE_SIGNUP_SCHEMA,
  OPTIONS_PUBLIC_SETTING,
  OPTIONS_GENDER,
  INIT_CONFIRM_FORM_VALUE,
  VALIDATE_CONFIRM_SCHEMA,
}
