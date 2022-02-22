import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ENV } from '@constants'
import authSlice from './slices/authSlice'
import counterSlice from './slices/counterSlice'
import gbCategoriesSlice from './slices/gbCategoriesSlice'

const reducers = combineReducers({
  counter: counterSlice,
  auth: authSlice,
  gbCategories: gbCategoriesSlice,
})

const persistConfig = {
  key: 'gnavi',
  storage,
  whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === ENV.dev,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
