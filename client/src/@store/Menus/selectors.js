import { createSelector } from 'reselect';

const baseState = state => state.menusReducer

export const date = createSelector(
  baseState,
  s => s.date
);

export const menu = createSelector(
  baseState,
  s => s.menu
);