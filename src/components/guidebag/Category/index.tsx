import { GUIDEBAG_CATEGORIES } from '@constants'
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
          handleClick={() => updateCategoryList(GUIDEBAG_CATEGORIES[1])}
          showIcon={categoryList !== GUIDEBAG_CATEGORIES[1]}
        />
      ))}
    </div>
  )
}

export default Category
