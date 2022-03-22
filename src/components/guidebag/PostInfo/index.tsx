import React from 'react'
import Image from 'next/image'
import { BUTTON_COLORS, FONT_SIZES } from '@constants'
import Button from 'components/common/Button'
import { PostInfoProps } from 'interfaces/GuideBag'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { PostInfoContainer } from './styled'

const PostInfo: React.FC<PostInfoProps> = ({
  picture,
  showTag,
  username,
  time,
  postStatus,
  answerNum,
  postType,
}) => {
  return (
    <PostInfoContainer>
      <FlexContainer className="post-info" justifyContent="space-between">
        <FlexContainer className="post-info-detail" justifyContent="flex-start">
          <div className="post-user-avatar">
            <ImageContainer width={53} height={53}>
              <Image src={picture} alt="avatar" layout="fill" objectFit="contain" />
            </ImageContainer>
          </div>
          <FlexContainer className="post-user-info" col justifyContent="space-between">
            <p className="post-user-detail">
              {showTag && <span className="post-user-tag">スレ主</span>}
              <span className="post-user-name">{username}</span>
              <span className="post-user-title">さん</span>
            </p>
            {time && <p className="post-user-time">{time}</p>}
            {postType && answerNum && (
              <div className="post-user-more">
                <span>{postType}</span> | 回答
                <span className="post-user-answer-num">{answerNum}</span>件
              </div>
            )}
          </FlexContainer>
        </FlexContainer>
        {postStatus === 'accepting' && (
          <Button
            title="受付中"
            width={50}
            height={40}
            buttonColor={BUTTON_COLORS.style01}
            _fontSize={FONT_SIZES.xsmall}
            fontWeight={400}
            margin="0"
          />
        )}

        {postStatus === 'closed' && (
          <Button
            title="締切済"
            width={50}
            height={40}
            buttonColor={BUTTON_COLORS.style08}
            _fontSize={FONT_SIZES.xsmall}
            fontWeight={400}
            margin="0"
          />
        )}
      </FlexContainer>
    </PostInfoContainer>
  )
}

PostInfo.defaultProps = {
  picture: '/images/no_avatar.svg',
  showTag: false,
  time: '',
}
export default PostInfo
