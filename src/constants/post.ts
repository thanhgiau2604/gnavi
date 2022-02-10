import { OptionProps } from 'interfaces/CustomField'
import { NewPostPayload, SearchPayload } from 'interfaces/Post'

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

const THEME_OPTIONS: OptionProps[] = [
  {
    value: 'none',
    label: '選択してください',
  },
]

export { INIT_SEARCH_BAR_VALUE, POST_MENU_OPTIONS, INIT_POST_FORM_VALUE, THEME_OPTIONS }
