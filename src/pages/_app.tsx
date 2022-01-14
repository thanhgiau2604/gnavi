/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import 'styles/scss/index.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'app/store'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
