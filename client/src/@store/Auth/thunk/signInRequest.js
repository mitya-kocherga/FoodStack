
import { signIn, signInSuccess, signInFail, setSigning } from '../actions';
import { notify } from '@common/notify';

export const signInRequest = (userName, password) => dispatch => {
    dispatch(signIn());

    fetch('/users/add-user', {
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
        if (data.message === ' User created!') {
            notify('Welcome!');
            dispatch(signInSuccess(data));
            dispatch(setSigning(false))
        } else {
            notify(data.message, true);
            dispatch(signInFail(data));
        }
     })
     .catch( err => {
        notify('error', true);
        dispatch(signInFail(err));
     })
}

/**
 * унифицировать эту функцию
 */