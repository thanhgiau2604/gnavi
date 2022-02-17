import { OptionProps } from 'interfaces/CustomField'
import {
  CommentItemData,
  NewCommentPayload,
  NewPostPayload,
  PostItemData,
  SearchPayload,
} from 'interfaces/GuideBag'
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
  title: '',
  content: '',
  post_type: 'question',
  category_01: '地域：関東（東京）',
  category_02: '',
}

const INIT_COMMENT_FORM_VALUE: NewCommentPayload = {
  content: '',
}

const POST_TYPE_OPTIONS: OptionProps[] = [
  {
    value: 'question',
    label: '質問',
  },
  {
    value: 'sharing',
    label: '情報共有',
  },
]

const POSTS_DATA: PostItemData[] = [
  {
    post_info: {
      picture: NO_AVATAR,
      username: 'コンドリア水戸',
      time: '2021年12月5日 14:58',
      showTag: true,
      postStatus: 'accepting',
      postType: '情報共有',
      answerNum: 6,
    },
    title: '香港粥が食べられるところはありますか',
    content:
      '知り合いの外国人が日本に来るらしく、 謝礼有りで数日ガイドをしてくれないか？と頼まれました。一日ごとの日程表を組む場合の注意点や効率の良い作成方法が知りたいで……',
    categories: ['地域', '食事'],
  },
  {
    post_info: {
      picture: '/images/profile_2.png',
      username: 'smile_hanako',
      time: '2021年12月4日 09:30',
      showTag: false,
      postStatus: 'closed',
      postType: '情報共有',
      answerNum: 1,
    },
    title: '羽田から東京駅への移動について',
    content:
      '知り合いの外国人が日本に来るらしく、 謝礼有りで数日ガイドをしてくれないか？と頼まれました。一日ごとの日程表を組む場合の注意点や効率の良い作成方法が知りたいで……',
    categories: ['地域', '食事'],
  },
]

const COMMENTS_DATA: CommentItemData = {
  post_info: {
    picture: NO_AVATAR,
    username: 'コンドリア水戸',
    time: '2021年12月5日 14:58',
    showTag: false,
    postStatus: 'none',
  },
  content:
    'どちらがいいかわかりませんけど、JR品川駅の改札内には朝もやってそうな店がたくさんあるので、朝の食べ物をというなら品川は良い気がします。',
  is_heart: true,
  is_like: false,
  num_heart: 1,
  num_like: 3,
}

const GUIDEBAG_CATEGORIES = [
  ['食事', '地域', '宗教', '交通', '国内', '地図', '海外', 'テーマパーク', 'イベント・フェス'],
  ['北海道', '東北', '関東', '甲信越・北陸', '東海', '関西', '中国', '四国', '九州・沖縄'],
]

export {
  INIT_SEARCH_BAR_VALUE,
  POST_MENU_OPTIONS,
  INIT_POST_FORM_VALUE,
  POSTS_DATA,
  INIT_COMMENT_FORM_VALUE,
  GUIDEBAG_CATEGORIES,
  COMMENTS_DATA,
  POST_TYPE_OPTIONS,
}
