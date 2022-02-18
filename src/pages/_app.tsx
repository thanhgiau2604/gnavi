/* eslint-disable @typescript-eslint/no-explicit-any */
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

import i18next from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'

import translation_en from 'locales/en/translation.json'
import translation_ja from 'locales/ja/translation.json'

// https://react.i18next.com/
i18next.use(initReactI18next).init({
  fallbackLng: 'ja', // fallback if not find
  lng: 'ja', // default language
  resources: {
    en: { translate: translation_en },
    ja: { translate: translation_ja },
  },
})

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean
}

const persistor = persistStore(store)

function MyApp(props: AppProps) {
  const { Component, pageProps }: { Component: NextApplicationPage; pageProps: any } = props
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18next}>
          <div className="wrapper">
            {Component.requireAuth ? (
              <AuthProvider>
                <Component {...pageProps} />
              </AuthProvider>
            ) : (
              <Component {...pageProps} />
            )}
          </div>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
