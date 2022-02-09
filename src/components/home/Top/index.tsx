import Button from 'components/common/Button'
import Header from 'components/common/Header'
import { BUTTON_COLORS, FONT_SIZES, ROUTES } from '@constants'
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
            buttonColor={BUTTON_COLORS.style01}
            radius={4}
            _fontSize={FONT_SIZES.xsmall}
            margin="0"
            height={32}
            width={80}
            onClick={() => router.push(ROUTES.signup)}
          />
          <Button
            title="ログイン"
            buttonColor={BUTTON_COLORS.style03}
            radius={4}
            _fontSize={FONT_SIZES.xsmall}
            margin="0"
            height={32}
            width={80}
            onClick={() => router.push(ROUTES.login)}
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
            buttonColor={BUTTON_COLORS.style01}
            radius={4}
            _fontSize={FONT_SIZES.large}
            fontWeight={700}
            height={48}
            width="100%"
            onClick={() => router.push(ROUTES.signup)}
          />
          <Button
            title="ログイン"
            buttonColor={BUTTON_COLORS.style03}
            radius={4}
            _fontSize={FONT_SIZES.large}
            fontWeight={700}
            height={48}
            width="100%"
            onClick={() => router.push(ROUTES.login)}
          />
        </div>
      </div>
    </HomeTopSection>
  )
}

export default HomeTop
