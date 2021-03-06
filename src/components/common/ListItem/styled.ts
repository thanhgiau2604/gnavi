import { ListItemStyleProps } from 'interfaces/ListItem'
import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const ListItemContainer = styled.div<ListItemStyleProps>`
  width: 100%;
  background-color: ${Variables.colorWhite};
  font-size: ${({ fontSize }) => fontSize && `calc(${fontSize}rem / 10)`};
  border-top: ${({ borderTop }) => (borderTop ? `1px solid ${Variables.color3}` : `none`)};
  border-bottom: ${({ borderBottom }) => (borderBottom ? `1px solid ${Variables.color3}` : `none`)};
  border-left: 1px solid ${Variables.color3};
  border-right: 1px solid ${Variables.color3};
  color: ${({ textColor }) => textColor && `${textColor}`};
  cursor: pointer;

  .list-item-flex {
    height: ${({ height }) => height && `calc(${height}rem / 10)`};
  }

  &.active,
  &:hover {
    background-color: ${Variables.color1};
    color: ${Variables.colorWhite};
  }
`

export { ListItemContainer }
