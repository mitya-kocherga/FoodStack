import { createAction } from "redux-actions";

import { createRequestActions } from "../common/createRequestActions"

export const logIn = createAction("LOGIN");
export const logInSuccess = createAction('LOGIN_SUCCES');
export const logInFail = createAction('LOGIN_FAIL');


