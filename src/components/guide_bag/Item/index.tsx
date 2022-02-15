import Button from 'components/common/Button'
import ButtonReaction from 'components/common/ButtonReaction'
import { BUTTON_COLORS, BUTTON_HEART_THEMES, BUTTON_LIKE_THEMES } from '@constants'
import { PostItemProps } from 'interfaces/GuideBag'
import Link from 'next/link'
import React, { useState } from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import PostInfo from '../PostInfo'
import { PostItemContainer } from './styled'
import CommentForm from '../CommentForm'

const PostItem: React.FC<PostItemProps> = ({ data, commentControlType, withBoxWrapper }) => {
  const { post_info, content, num_heart, num_like, num_comment, is_like, is_heart } = data
  const [showCommentForm, setShowCommentForm] = useState<boolean>(false)

  return (
    <PostItemContainer withBoxWrapper={withBoxWrapper}>
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
            <ButtonReaction theme={BUTTON_LIKE_THEMES.theme01} active={is_like} />
            <span className="post-reaction-like-num">{num_like}</span>
          </FlexContainer>

          <FlexContainer className="post-reaction-heart" alignItems="center">
            <ButtonReaction
              theme={BUTTON_HEART_THEMES.theme01}
              position="relative"
              active={is_heart}
            />
            <span className="post-reaction-heart-num">{num_heart}</span>
          </FlexContainer>
        </FlexContainer>

        {commentControlType === 'link' && (
          <Link href="#">
            <a className="post-comment-link">{`${num_comment}件の返信`}＞</a>
          </Link>
        )}

        {commentControlType === 'button' && (
          <Button
            className="post-comment-button"
            title="返信する"
            buttonColor={BUTTON_COLORS.style01}
            width={206}
            height={32}
            margin="0"
            radius={4}
            onClick={() => setShowCommentForm((state) => !state)}
          />
        )}
      </FlexContainer>
      {showCommentForm && (
        <div className="post-comment-form">
          <CommentForm />
        </div>
      )}
    </PostItemContainer>
  )
}

PostItem.defaultProps = {
  itemType: 'post',
}

export default PostItem
