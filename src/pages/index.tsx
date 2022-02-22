import Head from 'next/head'
import Home from 'containers/Home'
import { NextApplicationPage } from './_app'

const HomePage: NextApplicationPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Home />
    </>
  )
}

export default HomePage
