import { createSelector } from 'reselect'

const baseState = state => state.courseReducer

export const dishesOptions = createSelector(
  baseState, (state) => state.dishOptions)

export const menuList = createSelector(
  baseState, listOfMenu => listOfMenu.menu.dishes)

export const listOfOrder = createSelector(
  baseState, listOrderedCourses => listOrderedCourses.orderedCourses)

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

export const currentDish = createSelector(
  [
    orderedFirstDishes,
    orderedSecondDishes,
    orderedDietDishes,
    orderedSaladDishes,
    orderedDesertDishes
  ], (first, second, dietDish, salad, desert) =>
    ({
      firstDish: first,
      secondDish: second,
      dietDish: dietDish,
      salad: salad,
      desert: desert
    })
)
