import Header from 'components/common/Header'
import PostItem from 'components/post/Item'
import SearchForm from 'components/post/SearchForm'
import PostMenu from 'components/post/Menu'
import React from 'react'
import Button from 'components/common/Button'
import { BUTTON_COLORS } from '@constants'
import { PostContainer } from './styled'

const Post: React.FC = () => {
  return (
    <PostContainer>
      <div className="post-main">
        <Header title="ガイドの知恵袋" showBtnBack />
        <div className="container">
          <SearchForm />
        </div>
        <div className="post-menu">
          <PostMenu />
        </div>
        <div className="post-container">
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
      </div>
      <div className="container">
        <div className="post-btn-create">
          <Button title="質問する" height={40} buttonColor={BUTTON_COLORS.style01} margin="0" />
        </div>
      </div>
    </PostContainer>
  )
}

export default Post
