import { combineReducers } from 'redux'
import { menusReducer } from './Menus/reducers'
import { authReducer } from './Auth/reducers'

export default combineReducers({
  menusReducer,
  authReducer
})
