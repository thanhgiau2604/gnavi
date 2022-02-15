import { BUTTON_COLORS, ROUTES } from '@constants'
import Button from 'components/common/Button'
import Header from 'components/common/Header'
import SearchForm from 'components/post/SearchForm'
import Link from 'next/link'
import React from 'react'
import { PostLayoutContainer } from './styled'

interface PostLayoutProps {
  headerTitle: string
  btnBackTitle: string
  showSearchForm: boolean
  children: JSX.Element
}
const PostLayout: React.FC<PostLayoutProps> = ({
  headerTitle,
  btnBackTitle,
  showSearchForm,
  children,
}) => {
  return (
    <PostLayoutContainer>
      <div className="post-layout-main">
        <Header title={headerTitle} btnBackTitle={btnBackTitle} showBtnBack />
        {showSearchForm && (
          <div className="container">
            <SearchForm />
          </div>
        )}
        {children}
      </div>
      <div className="container">
        <div className="post-layout-btn-create">
          <Link href={ROUTES.new_post} passHref>
            <a>
              <Button title="質問する" height={40} buttonColor={BUTTON_COLORS.style01} margin="0" />
            </a>
          </Link>
        </div>
      </div>
    </PostLayoutContainer>
  )
}

export default PostLayout
