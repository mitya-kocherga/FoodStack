import { handleActions } from 'redux-actions'

import { Course } from './Course'
import {
  setOptionAction,
  changeFirstAction,
  changeSecondAction,
  addCoursesAction,
  deleteItemFromOrderAction
} from '../course'

const setOption = (state, { payload }) => {
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
}

const addCoursesToOrderHandler = (state, { payload }) => {
  return {
    ...state,
    orderedCourses: [
      ...state.orderedCourses,
      payload
    ]
  }
}

const removeItemFromOrderHandler = (state, { payload }) => {
  const list = state.orderedCourses.filter(order => order.name !== payload.item)
  return {
    ...state,
    orderedCourses: list
  }
}

const changeFirstActionHandler = (state, { payload }) => {
  const newRow = state.firstCourses.list
  newRow[payload.id].value = payload.value

  return {
    ...state,
    firstCourses: {
      ...state.firstCourses,
      list: newRow
    }
  }
}

const changeSecondActionHandler = (state, { payload }) => {
  const newRowsSec = state.secondCourses.list
  newRowsSec[payload.id].value = payload.value

  return {
    ...state,
    secondCourses: {
      ...state.secondCourses,
      list: newRowsSec
    }
  }
}


export const dateReducer = handleActions(
  {
    [setOptionAction]: setOption,
    [changeFirstAction]: changeFirstActionHandler,
    [changeSecondAction]: changeSecondActionHandler,
    [addCoursesAction]: addCoursesToOrderHandler,
    [deleteItemFromOrderAction]: removeItemFromOrderHandler
  },
  new Course()
)
  