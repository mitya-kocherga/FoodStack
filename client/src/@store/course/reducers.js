import { handleActions } from 'redux-actions'

import { Course } from './Constructors/Course'
import {
  setOptionAction,
  changeFirstAction,
  changeSecondAction,
  addCoursesAction,
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
  },
  new Course()
)
  