import { handleActions } from 'redux-actions';

import { Menus } from './Menus';
import { menusFetchSuccess } from '.';

const menusFetchSuccessHandler = (state, { payload }) => ({
  ...state,
  menu: payload.menu[0]
});

export const menusReducer = handleActions(
  {
    [menusFetchSuccess]: menusFetchSuccessHandler
  },
  new Menus()
);
  