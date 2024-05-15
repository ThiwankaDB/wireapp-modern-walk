import axios from 'axios';

const axiosInstance = axios.create();

const successHandler = response => response;

const errorHandler = error => {
  console.log('Something went wrong!');
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error),
);

export const get = (url, config) => axiosInstance.get(url, config);

export const post = (url, body, config) => axiosInstance.post(url, body, config);

export const put = (url, body, config) => axiosInstance.put(url, body, config);

export const patch = (url, body, config) => axiosInstance.patch(url, body, config);

export const del = (url, body, config) => axiosInstance.delete(url, { data: body }, config);
