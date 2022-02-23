import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { AuthState } from 'interfaces/Auth'

const initialState: AuthState = {
  isLoggedIn: false,
  isLogging: false,
  accessToken: '',
  refreshToken: '',
  userData: undefined,
  redirectUrl: '/',
  expiredAt: 0,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLogging = true
    },
    loginSuccess(state, action: PayloadAction<AuthState>) {
      state.isLoggedIn = true
      state.isLogging = false
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
      state.expiredAt = action.payload.expiredAt
      state.userData = action.payload.userData
    },
    loginFailed(state) {
      state.isLogging = false
    },
    logout(state) {
      state.isLoggedIn = false
      state.userData = undefined
      state.accessToken = initialState.accessToken
      state.refreshToken = initialState.refreshToken
      state.redirectUrl = initialState.redirectUrl
    },
    updateRedirectUrl(state, action: PayloadAction<string>) {
      state.redirectUrl = action.payload
    },
  },
})

// Actions
export const authActions = authSlice.actions

// Selectors
export const AccessToken = (state: RootState) => state.auth.accessToken
// Reducer
const authReducer = authSlice.reducer

export default authReducer
