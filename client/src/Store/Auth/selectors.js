import { createSelector } from "reselect";

const baseState = state => state.authReducer;

export const isLogin = createSelector(
  baseState,
  s => s.isLogin
)

