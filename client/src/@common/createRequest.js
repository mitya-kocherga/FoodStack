import { getToken } from '@common/getToken';

export const createRequest =  ({url, method, body, header, callback, errorCallback, token = true }) => {
    const setToken = token ? {'token': getToken()} : {};
    if (method === 'GET') {
        fetch(url, {
            method: method,
            headers: {
                ...setToken,
                ...header,
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(r => callback(r))
        .catch(e => errorCallback(e));
    } else {
        fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                ...setToken
            },
            body : JSON.stringify(body)
        })
        .then(res => res.json())
        .then(r => callback(r))
        .catch(e => errorCallback(e));
    };
};

/**
 * функция получает в себя основные параметры для fetch запроса и выполняет его 
 * после выполнения запускает колбек пришедший из вызова
 */
