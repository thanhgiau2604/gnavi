import { GUIDEBAG_CATEGORIES } from '@constants'
import ListItem from 'components/common/ListItem'
import { GuideBagCateProps } from 'interfaces/GuideBag'
import React, { useState } from 'react'

const Category: React.FC<GuideBagCateProps> = ({ categoryList, updateCategoryList }) => {
  const [selected, setSelected] = useState<string>('')

  const handleSelect = (cate: string) => {
    setSelected(cate)
    updateCategoryList(GUIDEBAG_CATEGORIES[1])
  }
  return (
    <div>
      {categoryList.map((cate, index) => (
        <ListItem
          text={cate}
          key={`guidebag_cate_${index.toString()}`}
          borderTop={index === 0}
          handleClick={() => handleSelect(cate)}
          showIcon={categoryList !== GUIDEBAG_CATEGORIES[1]}
          isActive={cate === selected}
        />
      ))}
    </div>
  )
}

export default Category
