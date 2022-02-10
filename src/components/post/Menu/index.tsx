import ButtonGroup, { ButtonGroupItem } from 'components/common/ButtonGroup'
import { POST_MENU_OPTIONS } from '@constants'
import React from 'react'

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
