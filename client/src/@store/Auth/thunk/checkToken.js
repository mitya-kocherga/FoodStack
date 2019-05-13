
import { checkToken, checkTokenSuccess, checkTokenFail } from '../actions';
import { notify } from '@common/notify';
import { getToken } from '@common/getToken';


export const checkTokenRequest = () => dispatch => {
    dispatch(checkToken());

    fetch('/users/check-auth', {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'token': getToken()
        }
    })
     .then(res => res.json())
     .then(data => {
        if (data.auth){
            notify('Welcome to Lunch Time!');
            dispatch(checkTokenSuccess());
        } else {
            dispatch(checkTokenFail());
        }
     })
     .catch( err => {
        notify('err', true);
        dispatch(checkTokenFail());
     })
}

/**
 * унифицировать эту функцию
 */