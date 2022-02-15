import Header from 'components/common/Header'
import PostItem from 'components/guide_bag/Item'
import SearchForm from 'components/guide_bag/SearchForm'
import PostMenu from 'components/guide_bag/Menu'
import React from 'react'
import Button from 'components/common/Button'
import { BUTTON_COLORS, POSTS_DATA, ROUTES } from '@constants'
import Link from 'next/link'
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
          {POSTS_DATA.map((post, index) => (
            <PostItem
              data={post}
              key={`post${index.toString()}`}
              commentControlType="link"
              withBoxWrapper
            />
          ))}
        </div>
      </div>
      <div className="container">
        <div className="post-btn-create">
          <Link href={ROUTES.new_post} passHref>
            <Button title="質問する" height={40} buttonColor={BUTTON_COLORS.style01} margin="0" />
          </Link>
        </div>
      </div>
    </PostContainer>
  )
}

export default Post
