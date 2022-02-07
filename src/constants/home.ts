import { MenuGroup } from 'interfaces/Home'

const MENU_DATA: MenuGroup[] = [
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

export { MENU_DATA }
