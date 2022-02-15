import { GUIDE_BAG_CATEGORIES } from '@constants'
import Category from 'components/guide_bag/Category'
import GuideBagLayout from 'components/layout/GuideBagLayout'
import React, { useState } from 'react'
import { GuideBagContainer } from './styled'

const GuideBag = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categories, setCategories] = useState<string[]>(GUIDE_BAG_CATEGORIES)
  return (
    <GuideBagContainer>
      <GuideBagLayout showSearchForm headerTitle="ガイドの知恵袋" btnBackTitle="カテゴリ">
        <div className="guide-bag-categories">
          <Category categoryList={categories} />
        </div>
      </GuideBagLayout>
    </GuideBagContainer>
  )
}

export default GuideBag
