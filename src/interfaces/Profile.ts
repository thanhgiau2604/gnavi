export interface ProfileHomeContainerProps {
  userInfo: any
  data: any[]
}
export interface ProfileEditContainerProps {
  id: number
}

export interface Membership {
  id: number
  value: string
}

export interface InfoProfile {
  email: string
  password: string
  ja_name: string
  eng_name: string
  birthday: Date
  gender: string
  travel_organizations: Membership[]
  phone_number: string
  public_setting_phone_number: string
  email_contact: string
  public_setting_email_contact: string
  background_image: string
  theme_color: string
}

export interface EditProfilePayload {
  email: string
  password: string
  ja_name: string
  eng_name: string
  birthday: Date
  gender: string
  travel_organizations: Membership[]
  phone_number: string
  public_setting_phone_number: string
  email_contact: string
  public_setting_email_contact: string
  theme_color: string
}
