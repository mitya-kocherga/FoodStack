import { handleActions } from "redux-actions";

import { Auth } from "./Auth";
import {
  logInSuccess,
  logInFail,
  rememberMeClick,
  signInFail,
  setSigning,
  checkTokenSuccess,
  checkTokenFail,
  logOut
} from "./actions";

const logInSuccessHandler = (state, { payload }) => {
  localStorage.setItem('food_token', payload.token);
  return {
    ...state,
    isLogin: true,
    isAdmin: false,
  }
};

const checkTokenSuccessHandler = state => ({
  ...state,
  isLogin: true,
  isAdmin: false,
});

const checkTokenFailHandler = state => ({
  ...state,
  isLogin: false,
  isAdmin: false,
});

const logInFailHandler = (state, { payload }) => ({
  ...state,
  isLogin: false,
  isAdmin: false,
  error: payload.message
});

const signInFailHandler = (state, { payload }) => ({
  ...state,
  error: payload.message
});

const rememberMeClickHandler = state => ({
  ...state,
  rememberMe: !state.rememberMe
});

const setSigningClickHandler = (state, { payload }) => ({
  ...state,
  signing: payload
});

const logOutHandler = state => {
  localStorage.removeItem('food_token');
  return {
    ...state,
    isLogin: false,
    isAdmin: false,
  };
};


export const authReducer = handleActions(
  {
    [logInSuccess]     : logInSuccessHandler,
    [logInFail]        : logInFailHandler,
    [signInFail]       : signInFailHandler,
    [checkTokenSuccess]: checkTokenSuccessHandler,
    [checkTokenFail]   : checkTokenFailHandler,

    [rememberMeClick]  : rememberMeClickHandler,
    [setSigning]       : setSigningClickHandler,
    [logOut]           : logOutHandler,
  },
  new Auth()
);
  