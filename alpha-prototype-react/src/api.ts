import axios from 'axios';

export const initAxios = (): void => {
    axios.defaults.baseURL = 'https://localhost:7164/api';
};

export function getAsQueryParamString(params:any): any {
    if (!params) {
        return undefined;
    }

    return Object.keys(params)
        .filter(key => typeof params[key] === 'string' ? params[key].length > 0 : !!params[key])
        .map(key => key + '=' + params[key])
        .join('&');
}