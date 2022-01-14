import type { NextPage } from 'next'
import Head from 'next/head'

import Home from 'containers/home'

const HomePage: NextPage = () => {
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
