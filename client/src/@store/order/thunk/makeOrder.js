import { getToken } from '../../../@common/getToken'
import { makeOrderAction } from '../index'

export const makeOrder = (payload) => dispatch => {
  fetch('orders/add-order', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'token': getToken()
    },
    body: JSON.stringify({ choice: payload})
  }).then(response => response.json())
    .then(data => dispatch(makeOrderAction(data.choice)))
    .catch(error => console.error(error))
}