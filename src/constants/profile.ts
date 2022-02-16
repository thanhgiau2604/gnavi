import * as Yup from 'yup'

export const INIT_FORM_EDIT_PROFILE_VALUE = {
  email: 'thanh.dinh@gmail.com',
  password: '345456446356',
  ja_name: '旅行花子',
  eng_name: '',
  birthday: new Date(),
  gender: '',
  memberships: [{ id: 1, value: 'one' }],
  phone_number: '',
  public_setting_phone_number: 'yourself',
  email_contact: '',
  public_setting_email_contact: 'yourself',
}
export const FORM_EDIT_PROFILE_VALIDATE_SCHEMA = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
  ja_name: Yup.string().required(),
  eng_name: Yup.string(),
  birthday: Yup.date().required(),
  gender: Yup.string(),
  memberships: Yup.array().of(
    Yup.object().shape({
      id: Yup.number(),
      value: Yup.string(),
    })
  ),
  phone_number: Yup.string(),
  public_setting_phone_number: Yup.string().required(),
  email_contact: Yup.string(),
  public_setting_email_contact: Yup.string().required(),
})
