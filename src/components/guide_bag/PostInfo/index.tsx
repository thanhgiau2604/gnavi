import React from 'react'
import Image from 'next/image'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { PostInfoProps } from 'interfaces/GuideBag'
import { PostInfoContainer } from './styled'

const PostInfo: React.FC<PostInfoProps> = ({ picture, showTag, username, time }) => {
  return (
    <PostInfoContainer>
      <FlexContainer className="post-info" justifyContent="flex-start">
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
        </FlexContainer>
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
