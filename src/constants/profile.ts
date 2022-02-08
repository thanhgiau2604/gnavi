import * as Yup from 'yup'

export const INIT_FORM_EDIT_PROFILE_VALUE = {
  nickname: '',
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  public_setting_full_name: 'yourself',
  eng_name: '',
  birthday: new Date(),
  gender: '',
  membership: '',
  phone_number: '',
  public_setting_phone_number: 'yourself',
  email_contact: '',
  public_setting_email_contact: 'yourself',
}
export const FORM_EDIT_PROFILE_VALIDATE_SCHEMA = Yup.object().shape({
  nickname: Yup.string(),
  email: Yup.string().required(),
  password: Yup.string().required(),
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  public_setting_full_name: Yup.string().required(),
  eng_name: Yup.string(),
  birthday: Yup.date().required(),
  gender: Yup.string().required(),
  membership: Yup.string(),
  phone_number: Yup.string(),
  public_setting_phone_number: Yup.string().required(),
  email_contact: Yup.string(),
  public_setting_email_contact: Yup.string().required(),
})
