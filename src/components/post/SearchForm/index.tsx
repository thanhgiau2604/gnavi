import Button from 'components/common/Button'
import CustomInput from 'components/common/CustomFields/InputField'
import { BUTTON_COLORS } from 'constants/index'
import { INIT_SEARCH_BAR_VALUE } from 'constants/post'
import { FastField, Form, Formik } from 'formik'
import Image from 'next/image'
import React from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { SearchFormContainer } from './styled'

const SearchForm = () => {
  return (
    <SearchFormContainer>
      <Formik
        initialValues={INIT_SEARCH_BAR_VALUE}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false)
        }}
      >
        {() => {
          return (
            <Form>
              <div className="search-field">
                <FastField
                  name="search-term"
                  component={CustomInput}
                  placeholder="検索する"
                  pb={0}
                />
                <div className="search-icon">
                  <ImageContainer width={24} height={24}>
                    <Image src="/images/search.svg" alt="" layout="fill" objectFit="contain" />
                  </ImageContainer>
                </div>
              </div>

              <FlexContainer margin="1.9rem 0 0 -1.9rem">
                <Button
                  title="場所から検索"
                  type="submit"
                  buttonColor={BUTTON_COLORS.style01}
                  height={32}
                  radius={0}
                  margin="0"
                />
                <Button
                  title="テーマから検索"
                  type="submit"
                  buttonColor={BUTTON_COLORS.style01}
                  height={32}
                  radius={0}
                  margin="0"
                />
              </FlexContainer>
            </Form>
          )
        }}
      </Formik>
    </SearchFormContainer>
  )
}

export default SearchForm
