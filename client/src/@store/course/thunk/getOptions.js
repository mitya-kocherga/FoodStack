import { setOptionAction } from '../actions'

export const getOptions = () => dispatch => {

  fetch('http://localhost:3002/menus/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json())
    .then(data => dispatch(setOptionAction(data)))
}
