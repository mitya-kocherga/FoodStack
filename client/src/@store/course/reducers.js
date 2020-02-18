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
    optionFirstCourse: {
      ...state.optionFirstCourse,
      dataSelectionFirstDishes: payload.firstDish
    },
    optionSecondCourse: {
      ...state.optionSecondCourse,
      dataSelectionSecondDishes: payload.secondDish
    },
    menu: {
      ...state.menu,
      dishes: Object.keys(payload)
    }
  }
}

const addCoursesToOrderHandler = (state, {payload}) => {
  return {
    ...state,
    orderedCourses: {
      ...state.orderedCourses,
      list: [
        ...state.orderedCourses.list,
        payload,
        ]
    }
  }
}

const removeItemFromOrderHandler = (state, {payload}) => {
  const listlist = state.orderedCourses.list.filter(order => order.name !== payload.item)
  return {
    ...state,
    orderedCourses: {
      ...state.orderedCourses,
    list: listlist
    }
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
    [deleteItemFromOrderAction]: removeItemFromOrderHandler,
  },
  new Course()
)
  