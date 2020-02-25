import { createSelector } from 'reselect'

const baseState = state => state.ordersReducer

export const usersOrderSelector = createSelector(
  baseState, orders => orders.usersOrder)

