interface ErrorMessageMap {
  [key: number]: string
}
export const ERRORS: ErrorMessageMap = {
  401000: 'Unauthorized request',
  401001: 'Access token expired',
  401002: 'Invalid access token',
  401003: 'Missing access token',
  401100: 'Email or password invalid',
  401201: 'Invalid refresh token',
  401202: 'Missing refresh token',
  401300: 'User not found',
  422000: 'Unprocessable Entity',
  500000: 'Internal Server Error',
}
