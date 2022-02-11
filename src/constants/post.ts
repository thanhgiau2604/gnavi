import { OptionProps } from 'interfaces/CustomField'
import { NewCommentPayload, NewPostPayload, PostItemData, SearchPayload } from 'interfaces/Post'
import { NO_AVATAR } from './avatar'

const INIT_SEARCH_BAR_VALUE: SearchPayload = {
  search_term: '',
}

const POST_MENU_OPTIONS = [
  '新着Q&A',
  '回答募集',
  '閲覧履歴',
  '投稿した質問',
  '投稿した回答',
  'お気に入り',
]

const INIT_POST_FORM_VALUE: NewPostPayload = {
  content: '',
  place: '',
  theme: 'none',
  new_theme: '',
}

const INIT_COMMENT_FORM_VALUE: NewCommentPayload = {
  content: '',
}

const THEME_OPTIONS: OptionProps[] = [
  {
    value: 'none',
    label: '選択してください',
  },
]

const PLACE_OPTIONS: OptionProps[] = [
  {
    value: 'tokyo',
    label: '東京',
  },
  {
    value: 'kyoto',
    label: '京都',
  },
]

const POSTS_DATA: PostItemData[] = [
  {
    post_info: {
      picture: NO_AVATAR,
      username: 'コンドリア水戸',
      time: '2021年12月5日 14:58',
      showTag: true,
    },
    content:
      '知り合いの外国人が日本に来るらしく、 謝礼有りで数日ガイドをしてくれないか？と頼まれました。一日ごとの日程表を組む場合の注意点や効率の良い作成方法が知りたいで……',
    is_like: true,
    is_heart: false,
    num_like: 5,
    num_heart: 2,
    num_comment: 3,
  },
  {
    post_info: {
      picture: '/images/profile_2.png',
      username: 'smile_hanako',
      time: '2021年12月4日 09:30',
      showTag: false,
    },
    content:
      '知り合いの外国人が日本に来るらしく、 謝礼有りで数日ガイドをしてくれないか？と頼まれました。一日ごとの日程表を組む場合の注意点や効率の良い作成方法が知りたいで……',
    is_like: false,
    is_heart: true,
    num_like: 1,
    num_heart: 5,
    num_comment: 2,
  },
]

export {
  INIT_SEARCH_BAR_VALUE,
  POST_MENU_OPTIONS,
  INIT_POST_FORM_VALUE,
  THEME_OPTIONS,
  POSTS_DATA,
  PLACE_OPTIONS,
  INIT_COMMENT_FORM_VALUE,
}
