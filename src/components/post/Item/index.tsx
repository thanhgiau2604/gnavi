import ButtonReaction from 'components/common/ButtonReaction'
import { BUTTON_HEART_THEMES, BUTTON_LIKE_THEMES } from 'constants/index'
import { PostItemProps } from 'interfaces/Post'
import Link from 'next/link'
import React from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import PostInfo from '../PostInfo'
import { PostItemContainer } from './styled'

const PostItem: React.FC<PostItemProps> = ({ data }) => {
  const { post_info, content, num_heart, num_like, num_comment } = data
  return (
    <PostItemContainer>
      <PostInfo
        picture={post_info.picture}
        username={post_info.username}
        time={post_info.time}
        showTag={post_info.showTag}
      />
      <div className="post-content">{content}</div>
      <FlexContainer className="post-action" justifyContent="space-between" alignItems="center">
        <FlexContainer
          justifyContent="flex-start"
          className="post-reaction-btn"
          alignItems="center"
        >
          <FlexContainer className="post-reaction-like" alignItems="center">
            <ButtonReaction theme={BUTTON_LIKE_THEMES.theme01} id={1} />
            <span className="post-reaction-like-num">{num_like}</span>
          </FlexContainer>

          <FlexContainer className="post-reaction-heart" alignItems="center">
            <ButtonReaction theme={BUTTON_HEART_THEMES.theme01} position="relative" id={2} />
            <span className="post-reaction-heart-num">{num_heart}</span>
          </FlexContainer>
        </FlexContainer>
        <Link href="#">
          <a className="post-comment-link">{`${num_comment}件の返信`}＞</a>
        </Link>
      </FlexContainer>
    </PostItemContainer>
  )
}

export default PostItem
