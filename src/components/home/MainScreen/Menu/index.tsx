import type { FC } from 'react'
import MenuItems from './Items'
import { HomeMenuContainer } from './styled'

interface ITEM {
  label: string
  option: string[]
  redirectTo: string[]
}

const Menu: FC = () => {
  const menu: ITEM[] = [
    {
      label: '',
      option: ['スキルチェック', 'ツアープラン一覧', 'ツアーログ'],
      redirectTo: ['#/1', '#/2', '#/3'],
    },
    {
      label: 'お役立ち',
      option: ['ガイドの知恵袋', 'その他'],
      redirectTo: ['#/4', '#/5'],
    },
    {
      label: '設定',
      option: ['アカウント情報', '決済情報'],
      redirectTo: ['#/6', '#/7', '#/8'],
    },
    {
      label: '',
      option: ['公開プロフィール検索'],
      redirectTo: ['#/9'],
    },
    {
      label: '',
      option: ['プライバシーポリシー', '利用規約'],
      redirectTo: ['#/10', '#/11'],
    },
  ]
  return (
    <HomeMenuContainer>
      {menu.map((item: ITEM) => (
        <>
          <div className="line-top" />
          {item.label && (
            <h5 key={item.label} className="container profile-item-title">
              {item.label}
            </h5>
          )}

          {item.option &&
            item.option.map((o: string, i: number) => (
              <MenuItems key={o} option={o} redirectTo={item.redirectTo[i]} />
            ))}
          <div className="line-bottom" />
        </>
      ))}
    </HomeMenuContainer>
  )
}

export default Menu
