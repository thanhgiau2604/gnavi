import type { FC } from 'react'
import { useAppSelector } from 'app/hooks'
import HomeMain from 'components/home/Main'
import HomeTop from 'components/home/Top'

const Home: FC = () => {
  const token = useAppSelector((state) => state.auth.accessToken)
  return token ? <HomeMain /> : <HomeTop />
}

export default Home
