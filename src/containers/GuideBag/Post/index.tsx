import PostItem from 'components/guide_bag/PostItem'
import PostMenu from 'components/guide_bag/Menu'
import React from 'react'
import GuideBagLayout from 'components/layout/GuideBagLayout'
import { POSTS_DATA, ROUTES } from '@constants'
import { useRouter } from 'next/router'
import { PostContainer } from './styled'

const Post: React.FC = () => {
  const router = useRouter()
  const goToDetailPage = (index: number) => {
    router.push(ROUTES.guide_bag.post_detail + index.toString())
  }
  return (
    <PostContainer>
      <GuideBagLayout headerTitle="ガイドの知恵袋" showSearchForm>
        <div className="post-main">
          <div className="post-menu">
            <PostMenu />
          </div>
          <div className="post-container">
            {POSTS_DATA.map((post, index) => (
              <PostItem
                data={post}
                key={`post${index.toString()}`}
                withBoxWrapper
                handleClick={() => goToDetailPage(index + 1)}
              />
            ))}
          </div>
        </div>
      </GuideBagLayout>
    </PostContainer>
  )
}

export default Post
