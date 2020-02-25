import { handleActions } from 'redux-actions'

import { Course } from './Course'
import {
  setOptionAction,
  addCoursesAction,
  deleteItemFromOrderAction,
} from '../course'

const setOptionActionHandler = (state, { payload }) => {
  return {
    ...state,
    dishOptions: {
      ...state.dishOptions,
      firstDish: payload.firstDish,
      secondDish: payload.secondDish,
      salad: payload.salad,
      dietDish: payload.dietDish,
      desert: payload.desert
    },
    menu: {
      ...state.menu,
      dishes: Object.keys(payload)
    }
  }
};

const addCoursesToOrderHandler = (state, { payload }) => {
  return {
    ...state,
    orderedCourses: [
      ...state.orderedCourses,
      payload
    ]
  }
};

const removeItemFromOrderHandler = (state, { payload }) => {
  const list = state.orderedCourses.filter(order => order.name !== payload.item)
  return {
    ...state,
    orderedCourses: list
  }
};



export const courseReducer = handleActions(
  {
    [setOptionAction]: setOptionActionHandler,
    [addCoursesAction]: addCoursesToOrderHandler,
    [deleteItemFromOrderAction]: removeItemFromOrderHandler
  },
  new Course()
)
  