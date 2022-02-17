export interface ProfileHomeContainerProps {
  id: number
  res: { type: string; value: string }[]
}
export interface ProfileEditContainerProps {
  id: number
}

export interface Membership {
  id: number
  value: string
}

export interface EditProfilePayload {
  email: string
  password: string
  ja_name: string
  eng_name: string
  birthday: Date
  gender: string
  memberships: Membership[]
  phone_number: string
  public_setting_phone_number: string
  email_contact: string
  public_setting_email_contact: string
  theme_color: string
}

export interface EditProfileFormProps {
  infoUser?: EditProfilePayload
  handleSubmit: (payload: EditProfilePayload) => void
}
