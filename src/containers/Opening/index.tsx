import Button from 'components/common/Button'
import Header from 'components/common/Header'
import { buttonColors } from 'constants/index'
import type { FC } from 'react'
import { OpeningSession } from './styled'

const Opening: FC = () => {
  return (
    <div className="wrapper">
      <OpeningSession>
        <Header shadow>
          <div className="authen-btn">
            <Button title="新規登録" buttonColor={buttonColors.STYLE01} radius={4} _fontSize="12" />
            <Button title="ログイン" buttonColor={buttonColors.STYLE03} radius={4} _fontSize="12" />
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
              _fontSize="12"
              fontWeight={700}
            />
            <Button
              title="ログイン"
              buttonColor={buttonColors.STYLE03}
              radius={4}
              _fontSize="12"
              fontWeight={700}
            />
          </div>
        </div>
      </OpeningSession>
    </div>
  )
}

export default Opening
