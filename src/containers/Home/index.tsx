import type { FC } from 'react'
import { useAppSelector } from 'app/hooks'
import HomeMain from 'components/home/Main'
import HomeTop from 'components/home/Top'

const Home: FC = () => {
  const user = useAppSelector((state) => state.auth.userData)
  return user ? <HomeMain /> : <HomeTop />
}

export default Home
