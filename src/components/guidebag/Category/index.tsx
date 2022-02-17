import { GUIDE_BAG_CATEGORIES_LEVEL2 } from '@constants'
import ListItem from 'components/common/ListItem'
import { GuideBagCateProps } from 'interfaces/GuideBag'
import React from 'react'

const Category: React.FC<GuideBagCateProps> = ({ categoryList, updateCategoryList }) => {
  return (
    <div>
      {categoryList.map((cate, index) => (
        <ListItem
          text={cate}
          key={`guidebag_cate_${index.toString()}`}
          borderTop={index === 0}
          handleClick={() => updateCategoryList(GUIDE_BAG_CATEGORIES_LEVEL2)}
        />
      ))}
    </div>
  )
}

export default Category
