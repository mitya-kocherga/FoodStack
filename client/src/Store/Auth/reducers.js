import { handleActions } from "redux-actions";

import { Auth } from "./Auth";
import {
  logInSuccess,
  logInFail,
  rememberMeClick,
  signIn,
  signInFail,
  signInSuccess,
  setSigning
} from "./actions";


const logInSuccessHandler = (state, { payload }) => {
  localStorage.setItem('food_token', payload.token);
  return {
    ...state,
    isLogin: true,
    isAdmin: false,
  }
};

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


export const authReducer = handleActions(
  {
    [logInSuccess]   : logInSuccessHandler,
    [logInFail]      : logInFailHandler,
    [signInFail]     : signInFailHandler,

    [rememberMeClick]: rememberMeClickHandler,
    [setSigning]     : setSigningClickHandler,
  },
  new Auth()
);
  