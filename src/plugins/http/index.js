import axios from 'axios';
import interceptors from './interceptors';

/**
 * Axios default options
 * Set base URL
 */
export const http = axios.create({
  baseURL: 'https://geo.api.gouv.fr',
});

/**
 * Helper to set token
 * in each axios request
 */
export function setTokenHeader(token) {
  token !== null
    ? (http.defaults.headers.common['Authorization'] = `Bearer ${token}`)
    : delete http.defaults.headers.common['Authorization'];
}

/**
 * Install http plugin
 * Make $http available in vue instance
 */
export default function install(Vue, { store, router }) {
  interceptors(http, store, router);
  Object.defineProperty(Vue.prototype, '$http', {
    get() {
      return http;
    },
  });
}
