
import { logIn, logInSuccess, logInFail } from '../actions';
import { toast } from 'react-toastify';


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
        .then( data => {
            if (data.token){
                toast.success('Welcome to Lunch Time!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                });
                dispatch(logInSuccess(data))
            } else {
                toast.error('err', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                });
                dispatch(logInFail(data))
            }
        })
        .catch( err => {
            toast.error('err', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
            });
            dispatch(logInFail(err)) 
        })
}

/**
 * унифицировать эту функцию
 */