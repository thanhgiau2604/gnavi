import Button from 'components/common/Button'
import Header from 'components/common/Header'
import { buttonColors, fontSize } from 'constants/index'
import type { FC } from 'react'
import { OpeningSession } from './styled'

const Opening: FC = () => {
  return (
    <div className="wrapper">
      <OpeningSession>
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
            />
            <Button
              title="ログイン"
              buttonColor={buttonColors.STYLE03}
              radius={4}
              _fontSize={fontSize.XSMALL}
              margin="0"
              height={32}
              width={80}
            />
          </div>
        </Header>
        <div className="container">
          <div className="opening-main">
            <h1 className="opening-intro">
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
            />
            <Button
              title="ログイン"
              buttonColor={buttonColors.STYLE03}
              radius={4}
              _fontSize={fontSize.LARGE}
              fontWeight={700}
              height={48}
              width="100%"
            />
          </div>
        </div>
      </OpeningSession>
    </div>
  )
}

export default Opening
