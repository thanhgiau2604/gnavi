import type { NextPage } from 'next'
import Head from 'next/head'

import Home from 'containers/home'
import Header from 'components/common/Header'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header title="ガイドの知恵袋" />
      <Home />
    </>
  )
}

export default HomePage
