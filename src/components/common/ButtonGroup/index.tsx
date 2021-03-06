import React from 'react'
import { ButtonGroupItemProps, ButtonGroupProps } from 'interfaces/ButtonGroup'
import { ButtonGroupStyledContainer, ButtonGroupStyledItem } from './styled'

export const ButtonGroupItem: React.FC<ButtonGroupItemProps> = ({ handleClick, active, text }) => {
  return (
    <ButtonGroupStyledItem onClick={handleClick} active={active}>
      <div className="text">{text}</div>
    </ButtonGroupStyledItem>
  )
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ itemPerRow, children }) => {
  const countChild = React.Children.toArray(children).length
  const countRow = Math.ceil(countChild / itemPerRow < 0 ? 1 : countChild / itemPerRow)
  const arrRow = Array.from(Array(countRow).keys())

  return (
    <ButtonGroupStyledContainer>
      <tbody>
        {arrRow.map((num: number) => (
          <tr key={num}>
            <td>
              <ButtonGroupStyledContainer rowTop={num === 0}>
                <tbody>
                  <tr>
                    {React.Children.toArray(children)
                      .slice(num * itemPerRow, num * itemPerRow + itemPerRow)
                      .map((child) => child)}
                  </tr>
                </tbody>
              </ButtonGroupStyledContainer>
            </td>
          </tr>
        ))}
      </tbody>
    </ButtonGroupStyledContainer>
  )
}

export default ButtonGroup
