import type { FC } from 'react'
import Image from 'next/image'

const Home: FC = () => {
  return (
    <>
      <h1>This is homepage</h1>
      <Image src="/vercel.svg" alt="Picture" width={500} height={500} />
    </>
  )
}

export default Home
