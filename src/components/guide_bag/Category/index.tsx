import { GUIDE_BAG_CATEGORIES_LEVEL2 } from '@constants'
import ListItem from 'components/common/ListItem'
import { GuideBagCateProps } from 'interfaces/GuideBag'
import React from 'react'
import { CategoryContainer } from './styled'

const Category: React.FC<GuideBagCateProps> = ({ categoryList, updateCategoryList }) => {
  return (
    <CategoryContainer>
      {categoryList.map((cate, index) => (
        <ListItem
          text={cate}
          key={`guide_bag_cate_${index.toString()}`}
          borderTop={index === 0}
          handleClick={() => updateCategoryList(GUIDE_BAG_CATEGORIES_LEVEL2)}
        />
      ))}
    </CategoryContainer>
  )
}

export default Category
