import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';

import {store} from '@src/redux/store';

import {IService} from './config-types';

const API_URL = 'https://nubitestapi.free.beeceptor.com';
// This should be in a .env file

const MAX_RETRY = 3;
let retryURL: {url: string; retryCount: number}[] = [];

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  async request => {
    if (!axiosInstance.defaults.headers.common.Authorization) {
      // User logged, first EP call. Sets the default header from getTokenFromRedux
      const token = getTokenFromRedux();
      if (token) {
        request!.headers!.Authorization = `Bearer ${token}`;
      }
    }
    return request;
  },
  error => {
    return Promise.reject(error.response.data);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const currentREQ = retryURL.find(
      item => item.url === response?.config?.url,
    );
    const auxArray = retryURL.filter(item => item.url !== currentREQ?.url); // Elimino del array de retry en caso de que ya dejó de fallar
    retryURL = auxArray;
    return response;
  },
  async (error: AxiosError) => {
    const {config} = error;

    const currentREQ = retryURL.find(item => item.url === config?.url);

    if (!currentREQ) {
      retryURL.push({url: config?.url!, retryCount: 1});
      return axiosInstance(config!); // Intentar de nuevo la solicitud por primera vez
    }

    if (currentREQ.retryCount > MAX_RETRY) {
      // Llegue al max y tiro reject.
      const auxArray = retryURL.filter(item => item.url !== currentREQ?.url);
      retryURL = auxArray;
      return Promise.reject(error?.response?.data);
    }

    const auxArray = retryURL.map(item => {
      if (item.url === currentREQ.url) {
        return {...item, retryCount: (currentREQ.retryCount += 1)};
      }
      return item;
    });
    retryURL = auxArray;
    return axiosInstance(config!); // Intentar de nuevo la solicitud
  },
);

const setToken = (token: string | undefined) => {
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};

const getTokenFromRedux = (): string => {
  const state = store.getState();
  const token = state?.user?.token;
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  return token;
};

const service: IService = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
  patch: axiosInstance.patch,
  setToken: setToken,
};

export default service;
