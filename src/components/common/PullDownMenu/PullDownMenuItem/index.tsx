import { PullDownMenuItemProps } from 'interfaces/PullDownMenu'
import React from 'react'
import { PullDownMenuItemContainer } from './styled'

const PullDownMenuItem: React.FC<PullDownMenuItemProps> = ({ tag, info }) => {
  return (
    <PullDownMenuItemContainer>
      <p className="tag">{tag}</p>
      <p className="information">{info}</p>
    </PullDownMenuItemContainer>
  )
}

export default PullDownMenuItem
