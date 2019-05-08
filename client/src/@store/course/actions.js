import { createAction } from "redux-actions";

export const changeSelectorAction = createAction("MENU/ORDER/SELECT");

export const changeSelectorSecondAction = createAction("MENU/ORDER/SELECT_SECOND");

export const addSelectorAction = createAction("MENU/ORDER/ADD_SELECTOR");

export const addSecondSelectorAction = createAction("MENU/ORDER/ADD_SELECTOR_SECOND");