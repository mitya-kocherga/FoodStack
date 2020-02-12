import { handleActions } from "redux-actions";

import { firstSelectorConstructor} from "./Constructors/firstSelectorConstructor";
import { secondSelectorConstructor} from "./Constructors/secondSelectorConstructor";
import { Course} from "./Constructors/Course";
import { changeSelectorAction, changeSelectorSecondAction, addSelectorAction, addSecondSelectorAction } from "../course"

const changeSelectorActionHandler = (state, { payload }) => {
  const newRows = state.firstCourses.selectors;
  newRows[payload.id].value = payload.value;

  return {
    ...state,
    firstCourses: {
      ...state.firstCourses,
      selectors: newRows
    }
  } ;
}

const changeSelectorSecondActionHandler = (state, { payload }) => {
   const newRowsSec = state.secondCourses.selectors;
   newRowsSec[payload.id].value = payload.value;

   return {
    ...state,
    secondCourses: {
      ...state.secondCourses,
      selectors: newRowsSec
    }
  } ;
}

const addSelectorActionHandler = state => {
  const sel = new firstSelectorConstructor();
    return {
      ...state,
      firstCourses: {
        ...state.firstCourses,
        selectors: [
          ...state.firstCourses.selectors,
          sel
        ]
      }
  };
}

const addSecondSelectorActionHandler = state => {
  const sel = new secondSelectorConstructor();

    return {
      ...state,
      secondCourses: {
        ...state.secondCourses,
        selectors: [
          ...state.secondCourses.selectors,
          sel
        ]
      }
  };
}

 export const dateReducer = handleActions(
    {
      [changeSelectorAction]: changeSelectorActionHandler,
      [changeSelectorSecondAction]: changeSelectorSecondActionHandler,
      [addSelectorAction]: addSelectorActionHandler,
      [addSecondSelectorAction]: addSecondSelectorActionHandler,
      
    },
    new Course()
  );
  