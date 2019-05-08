import { createAction } from 'redux-actions';

export const logIn = createAction('LOGIN');
export const logInSuccess = createAction('LOGIN_SUCCES');
export const logInFail = createAction('LOGIN_FAIL');

export const signIn = createAction('SIGNIN');
export const signInSuccess = createAction('SIGNIN_SUCCES');
export const signInFail = createAction('SIGNIN_FAIL');

export const checkToken = createAction('CHECK_TOKEN');
export const checkTokenSuccess = createAction('CHECK_TOKEN_SUCCES');
export const checkTokenFail = createAction('CHECK_TOKEN_FAIL');

export const rememberMeClick = createAction('REMEMBER_ME');
export const setSigning = createAction('SET_SIGNING');
export const logOut = createAction('LOGOUT');