import { handleActions } from "redux-actions";

import { Auth } from "./Auth";
import { logIn, logInSuccess } from "./actions"

const logInSuccessHandler = (state, { payload }) => {
  console.log(1);
  
  localStorage.setItem('food_token', payload.token);
  return {
    ...state,
    isLogin: true,
    isAdmin: false,
  }
};

const loginHandler = state => {
  console.log(123123);
  return {
    ...state,
  };
};


export const authReducer = handleActions(
  {
    [logIn]       : loginHandler,
    [logInSuccess]: logInSuccessHandler,
  },
  new Auth()
);
  