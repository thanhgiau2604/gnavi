import { NO_AVATAR } from '@constants'
import Header from 'components/common/Header'
import PostForm from 'components/post/PostForm'
import PostInfo from 'components/post/PostInfo'
import React from 'react'
import { NewPostContainer } from './styled'

const NewPost: React.FC = () => {
  return (
    <div className="container">
      <NewPostContainer>
        <Header showBtnBack title="質問を投稿する" />
        <div className="new-post-info">
          <PostInfo picture={NO_AVATAR} username="旅行花子" />
        </div>
        <div className="new-post-form">
          <PostForm />
        </div>
      </NewPostContainer>
    </div>
  )
}

export default NewPost
