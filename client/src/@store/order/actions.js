import { createAction } from 'redux-actions'

export const makeOrderAction = createAction("MENU/ORDER/MAKE")

export const successMakeOrderAction = createAction("MENU/ORDER/MAKE_SUCC")