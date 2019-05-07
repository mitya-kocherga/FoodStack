import { handleActions } from "redux-actions";

import { Auth } from "./Auth";
import { logIn, logInSuccess, logInFail, rememberMeClick } from "./actions"

const loginHandler = state => ({
  ...state,
});

const logInSuccessHandler = (state, { payload }) => {
  localStorage.setItem('food_token', payload.token);
  return {
    ...state,
    isLogin: true,
    isAdmin: false,
  }
};

const logInFailHandler = (state, { payload }) => {
  return {
    ...state,
    isLogin: false,
    isAdmin: false,
    error: payload.message
  }
};

const rememberMeClickHandler = state => ({
  ...state,
  rememberMe: !state.rememberMe
});


export const authReducer = handleActions(
  {
    [logIn]          : loginHandler,
    [logInSuccess]   : logInSuccessHandler,
    [logInFail]      : logInFailHandler,

    [rememberMeClick]: rememberMeClickHandler,
  },
  new Auth()
);
  