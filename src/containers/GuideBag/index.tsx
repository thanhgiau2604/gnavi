import { GUIDE_BAG_CATEGORIES, ROUTES } from '@constants'
import ListItem from 'components/common/ListItem'
import Category from 'components/guide_bag/Category'
import GuideBagLayout from 'components/layout/GuideBagLayout'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { GuideBagContainer } from './styled'

const GuideBag = () => {
  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categories, setCategories] = useState<string[]>(GUIDE_BAG_CATEGORIES)
  const [showQA, setShowQA] = useState<boolean>(false)

  const updateCategoryList = (categoryList: string[]) => {
    setCategories(categoryList)
    setShowQA(true)
  }
  return (
    <GuideBagContainer>
      <GuideBagLayout showSearchForm headerTitle="ガイドの知恵袋">
        <>
          {showQA && (
            <div className="guidebag-qa-link">
              <ListItem
                text="このカテゴリのすべてのQ&A"
                borderTop
                handleClick={() => router.push(ROUTES.guide_bag.posts)}
              />
            </div>
          )}
          <div className="guidebag-categories">
            <Category categoryList={categories} updateCategoryList={updateCategoryList} />
          </div>
        </>
      </GuideBagLayout>
    </GuideBagContainer>
  )
}

export default GuideBag
