import { setOptionAction } from '../actions'
import { getToken } from '../../../@common/getToken'

export const getOptions = () => dispatch => {

  fetch('/menus/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json',
      'token': getToken()}
  }).then(response => response.json())
    .then(data => dispatch(setOptionAction(data)))
}
