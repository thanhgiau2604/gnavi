import React from 'react'
import { BUTTON_HEART_THEMES, BUTTON_LIKE_THEMES } from '@constants'
import ButtonReaction from 'components/common/ButtonReaction'
import { CommentItemProps } from 'interfaces/GuideBag'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import PostInfo from '../PostInfo'
import { CommentItemContainer } from './styled'

const CommentItem: React.FC<CommentItemProps> = ({ data }) => {
  const { post_info, is_heart, is_like, num_heart, num_like, content } = data
  return (
    <CommentItemContainer>
      <PostInfo
        picture={post_info.picture}
        username={post_info.username}
        time={post_info.time}
        showTag={post_info.showTag}
        postStatus={post_info.postStatus}
      />
      <div className="comment-content">{content}</div>
      <FlexContainer className="comment-action" justifyContent="space-between" alignItems="center">
        <FlexContainer
          justifyContent="flex-start"
          className="comment-reaction-btn"
          alignItems="center"
        >
          <FlexContainer className="comment-reaction-like" alignItems="center">
            <ButtonReaction theme={BUTTON_LIKE_THEMES.theme01} active={is_like} />
            <span className="comment-reaction-like-num">{num_like}</span>
          </FlexContainer>

          <FlexContainer className="comment-reaction-heart" alignItems="center">
            <ButtonReaction
              theme={BUTTON_HEART_THEMES.theme01}
              position="relative"
              active={is_heart}
            />
            <span className="comment-reaction-heart-num">{num_heart}</span>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </CommentItemContainer>
  )
}

export default CommentItem
