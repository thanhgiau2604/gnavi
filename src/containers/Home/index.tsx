import type { FC } from 'react'
import HomeMain from 'components/home/Main'
import HomeTop from 'components/home/Top'
import { useAppSelector } from 'app/hooks'

const Home: FC = () => {
  const user = useAppSelector((state) => state.auth.userData)
  return user ? <HomeMain /> : <HomeTop />
}

export default Home
