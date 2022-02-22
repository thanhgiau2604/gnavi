import React from 'react'
import { NO_AVATAR } from '@constants'
import Header from 'components/common/Header'
import PostForm from 'components/guidebag/PostForm'
import PostInfo from 'components/guidebag/PostInfo'
import { NewPostContainer } from './styled'

const NewPost: React.FC = () => {
  return (
    <NewPostContainer>
      <Header showBtnBack title="質問を投稿する" />
      <div className="container">
        <div className="new-post-info">
          <PostInfo picture={NO_AVATAR} username="旅行花子" postStatus="none" />
        </div>
        <div className="new-post-form">
          <PostForm />
        </div>
      </div>
    </NewPostContainer>
  )
}

export default NewPost
