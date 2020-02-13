import { createSelector } from 'reselect'

const baseState = state => state.dateReducer

export const firstCourseOption = createSelector(

  baseState, firstOption => firstOption.optionFirstCourse.dataSelectionFirstDishes);

export const secondCourseOption = createSelector(
  baseState, secondOption => secondOption.optionSecondCourse.dataSelectionSecondDishes);

