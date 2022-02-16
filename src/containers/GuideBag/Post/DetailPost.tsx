import { BUTTON_COLORS, COMMENTS_DATA, POSTS_DATA } from '@constants'
import Button from 'components/common/Button'
import CommentForm from 'components/guide_bag/CommentForm'
import CommentItem from 'components/guide_bag/CommentItem'
import PostItem from 'components/guide_bag/PostItem'
import GuideBagLayout from 'components/layout/GuideBagLayout'
import { PostItemData } from 'interfaces/GuideBag'
import React, { useState } from 'react'
import { Variables } from 'styles/styled/app/Variables'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { DetailPostContainer } from './styled'

const DetailPost: React.FC = () => {
  const [postData] = useState<PostItemData>(POSTS_DATA[0])
  const [showCommentForm, setCommentForm] = useState<boolean>(false)
  return (
    <DetailPostContainer>
      <GuideBagLayout headerTitle="香港粥が食べられるところ" bgColor={Variables.colorWhite}>
        <>
          <div className="container">
            <div className="detail-post">
              <PostItem data={postData} isDetail />
            </div>
            <FlexContainer justifyContent="center">
              {postData.post_info.postStatus === 'accepting' && (
                <Button
                  width={230}
                  height={43}
                  buttonColor={BUTTON_COLORS.style01}
                  title="この質問に回答する"
                  margin="3.4rem 0 0"
                  onClick={() => setCommentForm((state) => !state)}
                />
              )}
              {postData.post_info.postStatus === 'closed' && (
                <Button
                  width={230}
                  height={43}
                  buttonColor={BUTTON_COLORS.style08}
                  title="回答の受付は終了しました"
                  margin="3.4rem 0 0"
                  fontWeight={700}
                />
              )}
            </FlexContainer>
          </div>
          {showCommentForm && (
            <div className="container">
              <div className="detail-post-comment-form">
                <CommentForm />
              </div>
            </div>
          )}
          <div className="detail-post-best-answer">
            <div className="detail-post-answer-title">
              <div className="container">
                <h3>ベストアンサー</h3>
              </div>
            </div>
            <div className="container">
              <div className="detail-post-answer-item">
                <CommentItem data={COMMENTS_DATA} />
              </div>
              <div className="detail-post-answer-item">
                <CommentItem data={COMMENTS_DATA} />
              </div>
            </div>
          </div>
          <div className="detail-post-answers">
            <div className="detail-post-answer-title">
              <div className="container">
                <h3>回答</h3>
              </div>
            </div>
            <div className="container">
              <div className="detail-post-answer-item">
                <CommentItem data={COMMENTS_DATA} />
              </div>
            </div>
          </div>
        </>
      </GuideBagLayout>
    </DetailPostContainer>
  )
}

export default DetailPost
