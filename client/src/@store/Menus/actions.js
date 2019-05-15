import { createAction } from "redux-actions";

export const menusFetch = createAction('MENUS_FETCH');
export const menusFetchSuccess = createAction('MENUS_FETCH_SUCCES');
export const menusFetchFail = createAction('MENUS_FETCH_FAIL');
