import { createAction } from 'redux-actions';

export const logIn = createAction('LOGIN');
export const logInSuccess = createAction('LOGIN_SUCCES');
export const logInFail = createAction('LOGIN_FAIL');

export const rememberMeClick = createAction('REMEMBER_ME');
