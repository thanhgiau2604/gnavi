import { MENU_DATA } from 'constants/home'
import { MenuGroup } from 'interfaces/Home'
import type { FC } from 'react'
import MenuItem from './Item'
import { HomeMenuContainer } from './styled'

const Menu: FC = () => {
  return (
    <HomeMenuContainer>
      {MENU_DATA.map((item: MenuGroup, index: number) => (
        <div className="menu-group-item" key={`menu-group-${index.toString()}`}>
          {item.label && (
            <div className="container">
              <h5 className="menu-group-title">{item.label}</h5>
            </div>
          )}

          {item.option &&
            item.option.map((o: string, i: number) => (
              <MenuItem key={o} option={o} redirectTo={item.redirectTo[i]} />
            ))}
        </div>
      ))}
    </HomeMenuContainer>
  )
}

export default Menu
