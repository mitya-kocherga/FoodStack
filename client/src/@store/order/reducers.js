import { handleActions } from 'redux-actions'
import { Orders } from './Orders'
import { makeOrderAction } from '../order'

const makeOrderHandler = (state, { payload }) => {
  console.log(payload, '<---------- payload from reducer')
  return {
    ...state,
    usersOrder: payload

  }
}

export const ordersReducer = handleActions(
  {
    [makeOrderAction]: makeOrderHandler
  },
  new Orders()
)

