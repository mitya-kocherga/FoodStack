
import { logIn, logInSuccess, logInFail } from '../actions';


export const logInRequest = (userName, password) => dispatch => {

    dispatch(logIn(userName, password));

    fetch('/users/login-user' ,{
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        body : JSON.stringify({userName, password})
        })
        .then( res => res.json())
        .then( data => data.token ? dispatch(logInSuccess(data)) : dispatch(logInFail(data)) )
        .catch( err => dispatch(logInFail(err)) )

}

/**
 * 
 * TODO: по какойто причине диспачит еще раз логин перед success
 * 
 * унифицировать эту функцию
 */