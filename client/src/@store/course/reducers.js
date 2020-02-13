import { handleActions } from 'redux-actions'

import { firstSelectorConstructor } from './Constructors/firstSelectorConstructor'
import { secondSelectorConstructor } from './Constructors/secondSelectorConstructor'
import { Course } from './Constructors/Course'
import {
  setOptionAction,
  changeSelectorFirstAction,
  changeSelectorSecondAction,
  addSelectorAction,
  addSecondSelectorAction
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
    }
  }
}


const changeSelectorFirstActionHandler = (state, { payload }) => {
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

const changeSelectorSecondActionHandler = (state, { payload }) => {
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

const addSelectorActionHandler = state => {
  const sel = new firstSelectorConstructor()
  return {
    ...state,
    firstCourses: {
      ...state.firstCourses,
      list: [
        ...state.firstCourses.list,
        sel
      ]
    }
  }
}

const addSecondSelectorActionHandler = state => {
  const sel = new secondSelectorConstructor()

  return {
    ...state,
    secondCourses: {
      ...state.secondCourses,
      list: [
        ...state.secondCourses.list,
        sel
      ]
    }
  }
}

export const dateReducer = handleActions(
  {
    [setOptionAction]: setOption,
    [changeSelectorFirstAction]: changeSelectorFirstActionHandler,
    [changeSelectorSecondAction]: changeSelectorSecondActionHandler,
    [addSelectorAction]: addSelectorActionHandler,
    [addSecondSelectorAction]: addSecondSelectorActionHandler
  },
  new Course()
)
  