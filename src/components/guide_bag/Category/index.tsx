import ListItem from 'components/common/ListItem'
import { GuideBagCateProps } from 'interfaces/GuideBag'
import React from 'react'
import { CategoryContainer } from './styled'

const Category: React.FC<GuideBagCateProps> = ({ categoryList }) => {
  return (
    <CategoryContainer>
      {categoryList.map((cate, index) => (
        <ListItem text={cate} key={`guide_bag_cate_${index.toString()}`} borderTop={index === 0} />
      ))}
    </CategoryContainer>
  )
}

export default Category
