import PostItem from 'components/guide_bag/PostItem'
import PostMenu from 'components/guide_bag/Menu'
import React from 'react'
import GuideBagLayout from 'components/layout/GuideBagLayout'
import { POSTS_DATA } from '@constants'
import { PostContainer } from './styled'

const Post: React.FC = () => {
  return (
    <PostContainer>
      <GuideBagLayout headerTitle="ガイドの知恵袋" showSearchForm>
        <div className="post-main">
          <div className="post-menu">
            <PostMenu />
          </div>
          <div className="post-container">
            {POSTS_DATA.map((post, index) => (
              <PostItem data={post} key={`post${index.toString()}`} withBoxWrapper />
            ))}
          </div>
        </div>
      </GuideBagLayout>
    </PostContainer>
  )
}

export default Post
