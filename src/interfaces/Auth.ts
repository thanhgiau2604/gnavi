interface LoginPayload {
  email: string
  password: string
}

interface SignupPayload {
  username: string
  nickname: string
  email: string
  password: string
  last_name: string
  first_name: string
  public_setting: string
  birthday: Date
  gender: string
}

export type { LoginPayload, SignupPayload }
