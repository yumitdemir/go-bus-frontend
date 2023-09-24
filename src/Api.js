import { BASE_URL } from "../config.js";

const jwt = JSON.parse(localStorage.getItem('jwt'));

const api = (url, options = {}) => {
    options.headers = {
        ...options.headers,
        'Authorization': `Bearer ${jwt}`
    };

    return fetch(BASE_URL + url, options);
};

export default api;
