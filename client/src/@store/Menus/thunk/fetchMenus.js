import { createRequest } from '@common/createRequest';
import { menusFetch, menusFetchSuccess, menusFetchFail } from '../actions';

export const fetchMenus = date => dispatch => {
    dispatch(menusFetch());
        
    return createRequest({
        url: '/menus',
        method: 'GET',
        header: { created_for: date }, //dafault prop < TODO: change this value
        callback: data => data.ok ? dispatch(menusFetchSuccess(data)) : dispatch(menusFetchFail(data)),
        errorCallback: err => dispatch(menusFetchFail(err))
    });
};
