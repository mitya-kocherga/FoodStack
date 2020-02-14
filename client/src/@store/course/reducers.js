import { handleActions } from 'redux-actions'

import { Course } from './Constructors/Course'
import {
  setOptionAction,
  changeSelectorFirstAction,
  changeSelectorSecondAction,
  addSelectorFirstAction,
  addSecondSelectorAction
} from '../course'

//set options
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
};


const changeSelectorFirstActionHandler = (state, { payload }) => {
  const newRow = state.firstCourses.list;
  newRow[payload.id].value = payload.value;

  return {
    ...state,
    firstCourses: {
      ...state.firstCourses,
      list: newRow
    }
  }
};

const changeSelectorSecondActionHandler = (state, { payload }) => {
  const newRowsSec = state.secondCourses.list;
  newRowsSec[payload.id].value = payload.value;

  return {
    ...state,
    secondCourses: {
      ...state.secondCourses,
      list: newRowsSec
    }
  }
};

const addSelectorActionHandler = state => {
  return {
    ...state,
    firstCourses: {
      ...state.firstCourses,
      list: [
        ...state.firstCourses.list,
      ]
    }
  }
}

const addSecondSelectorActionHandler = state => {

  return {
    ...state,
    secondCourses: {
      ...state.secondCourses,
      list: [
        ...state.secondCourses.list,
      ]
    }
  }
}

export const dateReducer = handleActions(
  {
    [setOptionAction]: setOption,
    [changeSelectorFirstAction]: changeSelectorFirstActionHandler,
    [changeSelectorSecondAction]: changeSelectorSecondActionHandler,
    [addSelectorFirstAction]: addSelectorActionHandler,
    [addSecondSelectorAction]: addSecondSelectorActionHandler
  },
  new Course()
)
  