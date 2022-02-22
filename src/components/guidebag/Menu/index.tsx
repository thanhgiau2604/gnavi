import React from 'react'
import { POST_MENU_OPTIONS } from '@constants'
import ButtonGroup, { ButtonGroupItem } from 'components/common/ButtonGroup'

const PostMenu = () => {
  const [isActive, setIsActive] = React.useState<number>(0)
  return (
    <ButtonGroup itemPerRow={3}>
      {POST_MENU_OPTIONS.map((option, index) => (
        <ButtonGroupItem
          key={option}
          handleClick={() => setIsActive(index)}
          active={isActive === index}
          text={option}
        />
      ))}
    </ButtonGroup>
  )
}

export default PostMenu
