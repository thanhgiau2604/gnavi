import { COMMENTS_DATA } from '@constants'
import CommentItem from 'components/guide_bag/CommentItem'
import React from 'react'

const CommentTest = () => {
  return (
    <div className="container">
      <CommentItem data={COMMENTS_DATA} />
    </div>
  )
}

export default CommentTest
