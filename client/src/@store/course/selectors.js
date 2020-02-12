import { createSelector } from 'reselect'

const baseState = state => state.dateReducer

export const FirstCourse = createSelector(
  baseState,
  state => state.firstCourses
)
export const SecondCourse = createSelector(
  baseState,
  state => state.secondCourses
)
//главное блюдо
export const optionMainCourse = createSelector(
  baseState,
  state => state.optionMainCourse
)
//второе блюдо
export const optionSecondCourse = createSelector(
  baseState,
  state => state.optionSecondCourse
)
export const firstCourseSelectors = createSelector(
  FirstCourse,
  state => state.selectors
)
export const secondCourseSelectors = createSelector(
  SecondCourse,
  state => state.selectors
)