import 'styles/scss/index.scss'
import 'react-datepicker/dist/react-datepicker.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'app/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp
