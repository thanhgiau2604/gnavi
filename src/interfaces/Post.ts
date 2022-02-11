interface SearchPayload {
  search_term: string
}

interface NewPostPayload {
  content: string
  place: string
  theme: string
  new_theme: string
}

interface NewCommentPayload {
  content: string
}

interface PostInfoProps {
  picture: string
  showTag?: boolean
  username: string
  time?: string
}

interface PostItemData {
  post_info: PostInfoProps
  content: string
  is_like: boolean
  is_heart: boolean
  num_like: number
  num_heart: number
  num_comment: number
}

type commentControlType = 'link' | 'button' | 'none'
type postItemType = 'post' | 'comment'
interface PostItemProps {
  data: PostItemData
  commentControlType: commentControlType
  withBoxWrapper?: boolean
  itemType?: postItemType
}

export type {
  SearchPayload,
  NewPostPayload,
  PostInfoProps,
  PostItemData,
  PostItemProps,
  NewCommentPayload,
}
