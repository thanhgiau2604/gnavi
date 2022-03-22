import React from 'react'
import { useRouter } from 'next/router'
import { ROUTES } from '@constants'
import { useAppSelector } from 'app/hooks'
import ListItem from 'components/common/ListItem'
import Category from 'components/guidebag/Category'
import GuideBagLayout from 'components/layout/GuideBagLayout'
import { GuideBagContainer } from './styled'

const GuideBag = () => {
  const router = useRouter()
  const currentLevel = useAppSelector((state) => state.gbCategories.currentLevel)
  const showQA = currentLevel !== 1
  return (
    <GuideBagContainer>
      <GuideBagLayout showSearchForm headerTitle="ガイドの知恵袋">
        <>
          {showQA && (
            <div className="guidebag-qa-link">
              <ListItem
                text="このカテゴリのすべてのQ&A"
                borderTop
                handleClick={() => router.push(ROUTES.guidebag.posts)}
              />
            </div>
          )}
          <div className="guidebag-categories">
            <Category />
          </div>
        </>
      </GuideBagLayout>
    </GuideBagContainer>
  )
}

export default GuideBag
