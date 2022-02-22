import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GUIDEBAG_CATEGORIES } from '@constants'
import { GuideBagCategoriesState } from 'interfaces/GuideBag'

const initialState: GuideBagCategoriesState = {
  categories: GUIDEBAG_CATEGORIES[0],
  isLast: false,
  currentLevel: 1,
  selected: '',
}

const gbCategoriesSlice = createSlice({
  name: 'gbCategories',
  initialState,
  reducers: {
    updateCategories(state, action: PayloadAction<GuideBagCategoriesState>) {
      state.categories = action.payload.categories
      state.isLast = action.payload.isLast
      state.currentLevel = action.payload.currentLevel
    },

    updateSelection(state, action: PayloadAction<string>) {
      state.selected = action.payload
    },

    resetState(state) {
      state.categories = initialState.categories
      state.isLast = initialState.isLast
      state.currentLevel = initialState.currentLevel
      state.selected = initialState.selected
    },
  },
})

export const gbCategoriesActions = gbCategoriesSlice.actions

const gbCategoriesReducer = gbCategoriesSlice.reducer

export default gbCategoriesReducer
