import React from 'react'
import { useRouter } from 'next/router'
import { POSTS_DATA, ROUTES } from '@constants'
import PostMenu from 'components/guidebag/Menu'
import PostItem from 'components/guidebag/PostItem'
import GuideBagLayout from 'components/layout/GuideBagLayout'
import { PostContainer } from './styled'

const Post: React.FC = () => {
  const router = useRouter()
  const goToDetailPage = (index: number) => {
    router.push(ROUTES.guidebag.post_detail + index.toString())
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
