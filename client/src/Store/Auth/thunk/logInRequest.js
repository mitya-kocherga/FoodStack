
import { logIn, logInSuccess, logInFail } from '../actions';
import { notify } from '../../../common/notify';


export const logInRequest = (userName, password) => dispatch => {
    dispatch(logIn(userName, password));

    fetch('/users/login-user', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        body : JSON.stringify({userName, password})
        }
    )
     .then(res => res.json())
     .then(data => {
        if (data.token){
            notify('Welcome to Lunch Time!');
            dispatch(logInSuccess(data));
        } else {
            notify('err', true);
            dispatch(logInFail(data));
        }
     })
     .catch( err => {
        notify('err', true);
        dispatch(logInFail(err));
     })
}

/**
 * унифицировать эту функцию
 */