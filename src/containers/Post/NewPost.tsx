import Header from 'components/common/Header'
import PostForm from 'components/post/PostForm'
import React from 'react'
import { NewPostContainer } from './styled'

const NewPost: React.FC = () => {
  return (
    <NewPostContainer>
      <Header showBtnBack title="質問を投稿する" />
      <div className="new-post-form">
        <PostForm />
      </div>
    </NewPostContainer>
  )
}

export default NewPost
