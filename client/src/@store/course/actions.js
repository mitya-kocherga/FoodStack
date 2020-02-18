import { createAction } from "redux-actions";

export const setOptionAction = createAction("MENU/ORDER/COURSE_OPTION");;

export const changeFirstAction = createAction("MENU/ORDER/SELECT");

export const changeSecondAction = createAction("MENU/ORDER/SELECT_SECOND");

export const addCoursesAction = createAction("MENU/ORDER/ADD");

export const deleteItemFromOrderAction = createAction("MENU/ORDER/REMOVE_ITEM");
