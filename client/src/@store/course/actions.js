import { createAction } from "redux-actions";

export const setOptionAction = createAction("MENU/ORDER/COURSE_OPTION");

export const addCoursesAction = createAction("MENU/ORDER/ADD_COURSE");

export const deleteItemFromOrderAction = createAction("MENU/ORDER/REMOVE_ITEM");
