import type { FC } from 'react'
import Image from 'next/image'
import Button from 'components/common/Button'

const Home: FC = () => {
  const event = () => {
    console.log('clicked')
  }
  return (
    <>
      <h1>This is homepage </h1>
      <Image src="/vercel.svg" alt="Picture" width={500} height={500} />
      <Button
        width={80}
        height={32}
        fontWeight={400}
        fontSize="x-small"
        color="transparent"
        title="ログイン"
        event={event}
      />
    </>
  )
}

export default Home
