import { createAction } from "redux-actions";

export const setOptionAction = createAction("MENU/ORDER/COURSE_OPTION");;

export const changeSelectorFirstAction = createAction("MENU/ORDER/SELECT");

export const changeSelectorSecondAction = createAction("MENU/ORDER/SELECT_SECOND");

export const addSelectorFirstAction = createAction("MENU/ORDER/ADD_SELECTOR");

export const addSecondSelectorAction = createAction("MENU/ORDER/ADD_SELECTOR_SECOND");