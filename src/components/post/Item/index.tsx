import ButtonReaction from 'components/common/ButtonReaction'
import { BUTTON_HEART_THEMES, BUTTON_LIKE_THEMES } from 'constants/index'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { PostItemContainer } from './styled'

const PostItem: React.FC = () => {
  return (
    <PostItemContainer>
      <FlexContainer className="post-info" justifyContent="flex-start">
        <div className="post-user-avatar">
          <ImageContainer width={53} height={53}>
            <Image src="/images/no_avatar.svg" alt="avatar" layout="fill" objectFit="contain" />
          </ImageContainer>
        </div>
        <FlexContainer className="post-user-detail" col justifyContent="space-between">
          <p className="post-user-name">
            コンドリア水戸
            <span>さん</span>
          </p>
          <p className="post-user-time">2021年12月5日 14:58</p>
        </FlexContainer>
      </FlexContainer>
      <div className="post-content">
        知り合いの外国人が日本に来るらしく、
        謝礼有りで数日ガイドをしてくれないか？と頼まれました。一日ごとの日程表を組む場合の注意点や効率の良い作成方法が知りたいで……
      </div>
      <FlexContainer justifyContent="space-between" className="post-action">
        <FlexContainer justifyContent="flex-start" className="post-reaction-btn">
          <ButtonReaction theme={BUTTON_LIKE_THEMES.theme01} id={1} />
          <ButtonReaction
            theme={BUTTON_HEART_THEMES.theme01}
            left="2.5rem"
            position="relative"
            id={2}
          />
        </FlexContainer>
        <Link href="#">
          <a className="post-comment-link">0件の返信＞</a>
        </Link>
      </FlexContainer>
    </PostItemContainer>
  )
}

export default PostItem
