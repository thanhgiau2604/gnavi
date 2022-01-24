import Opening from 'containers/Opening'
import type { NextPage } from 'next'
import Head from 'next/head'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Opening />
    </>
  )
}

export default HomePage
