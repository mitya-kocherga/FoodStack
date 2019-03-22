import { combineReducers } from 'redux'
import counter from './counter'
import { dateReducer } from '../containers/course/reducers'

export default combineReducers({
  counter,
  dateReducer
})
