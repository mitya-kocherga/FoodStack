import { combineReducers } from 'redux'
import { courseReducer } from './course/reducers'
import {ordersReducer} from './order/reducers'
import { authReducer } from './Auth/reducers'

export default combineReducers({
  courseReducer,
  authReducer,
  ordersReducer
})
