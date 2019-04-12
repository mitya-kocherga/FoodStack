import { combineReducers } from 'redux'
import { dateReducer } from './course/reducers'
import { authReducer } from './Auth/reducers'

export default combineReducers({
  dateReducer,
  authReducer
})
