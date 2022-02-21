import { PostItemProps } from 'interfaces/GuideBag'
import React from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import PostInfo from '../PostInfo'
import { PostItemContainer } from './styled'

const PostItem: React.FC<PostItemProps> = ({
  data,
  withBoxWrapper,
  isDetail = false,
  handleClick,
}) => {
  const { post_info, title, content, categories } = data

  return (
    <PostItemContainer withBoxWrapper={withBoxWrapper} onClick={handleClick}>
      <PostInfo
        picture={post_info.picture}
        username={post_info.username}
        time={post_info.time}
        showTag={post_info.showTag}
        postStatus={post_info.postStatus}
        answerNum={post_info.answerNum}
        postType={post_info.postType}
      />
      <h3 className="post-title">{title}</h3>
      <div className="post-content">{content}</div>
      {!isDetail && (
        <div className="post-categories">
          <FlexContainer>
            <h4>カテゴリー：</h4>
            {categories &&
              categories.map((cate, index) => (
                <p key={cate + index.toString()} className="post-category-item">
                  {cate}
                </p>
              ))}
          </FlexContainer>
        </div>
      )}
    </PostItemContainer>
  )
}

export default PostItem
