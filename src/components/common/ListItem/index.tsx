import React from 'react'
import Image from 'next/image'
import { ListItemProps } from 'interfaces/ListItem'
import { ImageContainer } from 'styles/styled/app/Image'
import { Variables } from 'styles/styled/app/Variables'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { ListItemContainer } from './styled'

const ListItem: React.FC<ListItemProps> = ({
  text,
  height = 48,
  textColor = Variables.colorTextCommon,
  fontSize = 18,
  iconWidth = 8.3,
  iconHeight = 12,
  borderBottom = true,
  borderTop = false,
  handleClick,
  showIcon = true,
  isActive = false,
}) => {
  return (
    <ListItemContainer
      height={height}
      textColor={textColor}
      fontSize={fontSize}
      borderBottom={borderBottom}
      borderTop={borderTop}
      onClick={handleClick}
      className={isActive ? 'active' : ''}
    >
      <div className="container">
        <FlexContainer
          justifyContent="space-between"
          alignItems="center"
          className="list-item-flex"
        >
          <p>{text}</p>
          {showIcon && (
            <ImageContainer width={iconWidth} height={iconHeight}>
              <Image src="/icons/arrow_right.svg" alt="" layout="fill" objectFit="contain" />
            </ImageContainer>
          )}
        </FlexContainer>
      </div>
    </ListItemContainer>
  )
}

export default ListItem
