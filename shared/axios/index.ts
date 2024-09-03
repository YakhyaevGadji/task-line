import axios from 'axios';

const instance = axios.create({
    baseURL: `https://93799b8011e37ad7.mokky.dev`,
});

// instance.interceptors.request.use((config) => {
//     config.headers.Authorization = window.localStorage.getItem('token');
//     return config;
// });

export default instance;
