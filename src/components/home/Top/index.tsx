import Button from 'components/common/Button'
import Header from 'components/common/Header'
import { buttonColors, fontSize, routes } from 'constants/index'
import { useRouter } from 'next/router'
import type { FC } from 'react'
import { HomeTopSection } from './styled'

const HomeTop: FC = () => {
  const router = useRouter()
  return (
    <HomeTopSection>
      <Header shadow>
        <div className="authen-btn">
          <Button
            title="新規登録"
            buttonColor={buttonColors.STYLE01}
            radius={4}
            _fontSize={fontSize.XSMALL}
            margin="0"
            height={32}
            width={80}
            onClick={() => router.push(routes.SIGNUP)}
          />
          <Button
            title="ログイン"
            buttonColor={buttonColors.STYLE03}
            radius={4}
            _fontSize={fontSize.XSMALL}
            margin="0"
            height={32}
            width={80}
            onClick={() => router.push(routes.LOGIN)}
          />
        </div>
      </Header>
      <div className="container">
        <div className="home-top-main">
          <h1 className="home-top-intro">
            旅行ガイド（旅行ガイドを目指しているかた）向けに、ノウハウが詰まった便利な機能を複数組み合わせたサービス
          </h1>
          <Button
            title="メールアドレスで登録する"
            buttonColor={buttonColors.STYLE01}
            radius={4}
            _fontSize={fontSize.LARGE}
            fontWeight={700}
            height={48}
            width="100%"
            onClick={() => router.push(routes.SIGNUP)}
          />
          <Button
            title="ログイン"
            buttonColor={buttonColors.STYLE03}
            radius={4}
            _fontSize={fontSize.LARGE}
            fontWeight={700}
            height={48}
            width="100%"
            onClick={() => router.push(routes.LOGIN)}
          />
        </div>
      </div>
    </HomeTopSection>
  )
}

export default HomeTop
