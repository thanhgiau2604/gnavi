import 'styles/scss/index.scss'
import 'react-datepicker/dist/react-datepicker.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import type { AppProps } from 'next/app'
import { store } from 'app/store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import AuthProvider from 'providers/AuthProvider'
import { NextPage } from 'next'
import { Provider } from 'react-redux'

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean
}

const persistor = persistStore(store)

function MyApp(props: AppProps) {
  const { Component, pageProps }: { Component: NextApplicationPage; pageProps: any } = props
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="wrapper">
          {Component.requireAuth ? (
            <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
          ) : (
            <Component {...pageProps} />
          )}
        </div>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
