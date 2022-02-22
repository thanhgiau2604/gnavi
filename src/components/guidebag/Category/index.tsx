import React from 'react'
import { GUIDEBAG_CATEGORIES } from '@constants'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { gbCategoriesActions } from 'app/slices/gbCategoriesSlice'
import ListItem from 'components/common/ListItem'

const Category: React.FC = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.gbCategories)
  const { currentLevel, selected, isLast, categories } = data

  const handleSelect = (cate: string) => {
    dispatch(gbCategoriesActions.updateSelection(cate))
    if (GUIDEBAG_CATEGORIES.length !== currentLevel) {
      dispatch(
        gbCategoriesActions.updateCategories({
          categories: GUIDEBAG_CATEGORIES[currentLevel],
          isLast: GUIDEBAG_CATEGORIES.length === currentLevel + 1,
          currentLevel: currentLevel + 1,
        })
      )
    }
  }
  return (
    <div>
      {categories &&
        categories.map((cate, index) => (
          <ListItem
            text={cate}
            key={`guidebag_cate_${index.toString()}`}
            borderTop={index === 0}
            handleClick={() => handleSelect(cate)}
            showIcon={!isLast}
            isActive={cate === selected}
          />
        ))}
    </div>
  )
}

export default Category
