import { createSelector } from 'reselect'

const baseState = state => state.dateReducer

export const firstCourseOption = createSelector(
  baseState, firstOption => firstOption.optionFirstCourse.dataSelectionFirstDishes)

export const secondCourseOption = createSelector(
  baseState, secondOption => secondOption.optionSecondCourse.dataSelectionSecondDishes)

export const menuList = createSelector(
  baseState, listOfMenu => listOfMenu.menu.dishes)

//change selector to .list

export const dishesOptions = createSelector(
  [ firstCourseOption, secondCourseOption ], (first, second) => ({ firstDish: first, secondDish: second })
)

export const listOfOrder = createSelector(
  baseState, listOrderedCourses => listOrderedCourses.orderedCourses.list)

export const orderedFirstDishes = createSelector(
  listOfOrder, list => list.filter(item => item.type === 'firstDish'))


export const orderedSecondDishes = createSelector(
  listOfOrder, list => list.filter(item => item.type === 'secondDish'))


export const orderedDietDishes = createSelector(
  listOfOrder, list => list.filter(item => item.type === 'dietDish'))


export const orderedSaladDishes = createSelector(
  listOfOrder, list => list.filter(item => item.type === 'salad'))


export const orderedDesertDishes = createSelector(
  listOfOrder, list => list.filter(item => item.type === 'desert'))