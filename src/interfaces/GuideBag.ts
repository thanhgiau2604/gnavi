interface SearchPayload {
  search_term: string
}

interface NewPostPayload {
  title: string
  content: string
  post_type: string
  category_01: string
  category_02: string
}

interface NewCommentPayload {
  content: string
}

interface PostInfoProps {
  picture: string
  showTag?: boolean
  username: string
  time?: string
  postStatus: 'accepting' | 'closed' | 'none'
  answerNum?: number
  postType?: string
}

interface PostItemData {
  post_info: PostInfoProps
  title: string
  content: string
  categories: string[]
}

interface CommentItemData {
  post_info: PostInfoProps
  content: string
  is_like: boolean
  is_heart: boolean
  num_like: number
  num_heart: number
}

interface PostItemProps {
  data: PostItemData
  withBoxWrapper?: boolean
  isDetail?: boolean
  handleClick?: () => void
}

interface CommentItemProps {
  data: CommentItemData
}

interface GuideBagCateProps {
  categoryList: string[]
  updateCategoryList: (list: string[]) => void
}

interface GuideBagLayoutProps {
  headerTitle: string
  btnBackTitle?: string
  showSearchForm?: boolean
  bgColor?: string
  children: JSX.Element
}

interface CategorySelectProps {
  label: string
  categories: string[]
}

export type {
  SearchPayload,
  NewPostPayload,
  PostInfoProps,
  PostItemData,
  PostItemProps,
  NewCommentPayload,
  GuideBagCateProps,
  GuideBagLayoutProps,
  CommentItemData,
  CommentItemProps,
  CategorySelectProps,
}
