import { createSelector } from "reselect";

const baseState = state => state.dateReducer

export const FirstCourse = createSelector(
    baseState,
    state => state.firstCourses
  );
export const SecondCourse = createSelector(
    baseState,
    state => state.secondCourses
  );
  export const mainCourse = createSelector(
    baseState,
    state => state.mainCourse
  );
  export const secondCourse = createSelector(
    baseState,
    state => state.secondCourse
  );
  export const firstCouresSelectors = createSelector(
    FirstCourse,
    state => state.selectors
  );
  export const secondCouresSelectors = createSelector(
    SecondCourse,
    state => state.selectors
  );