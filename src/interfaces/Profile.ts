export interface ProfilePageProps {
  idUser: number
}

export interface ProfileHomeContainerProps {
  id: number
}
export interface ProfileEditContainerProps {
  id: number
}

export interface EditProfilePayload {
  nickname: string
  email: string
  password: string
  first_name: string
  last_name: string
  public_setting_full_name: string
  eng_name: string
  birthday: Date
  gender: string
  membership: string
  phone_number: string
  public_setting_phone_number: string
  email_contact: string
  public_setting_email_contact: string
}

export interface EditProfileFormProps {
  handleSubmit: (payload: EditProfilePayload) => void
}
