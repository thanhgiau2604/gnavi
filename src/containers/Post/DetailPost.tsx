import { POSTS_DATA } from '@constants'
import Header from 'components/common/Header'
import PostItem from 'components/post/Item'
import React from 'react'
import { DetailPostContainer } from './styled'

const DetailPost: React.FC = () => {
  return (
    <DetailPostContainer>
      <Header showBtnBack title="知り合いの外国" />
      <div className="container">
        <div className="detail-post">
          <PostItem data={POSTS_DATA[0]} commentControlType="button" />
        </div>
        <div className="detail-post-comments">
          <PostItem data={POSTS_DATA[0]} commentControlType="button" itemType="comment" />
        </div>
      </div>
    </DetailPostContainer>
  )
}

export default DetailPost
