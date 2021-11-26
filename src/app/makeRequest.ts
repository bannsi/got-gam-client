import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { tokenStore } from './tokenStore';

axios.defaults.baseURL = 'http://52.79.130.111:5555/';
export interface ApiOption {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  headers?: { [key: string]: string };
  body?: { [key: string]: any }; // eslint-disable-line
  query?: { [key: string]: string | number | boolean | string[] };
}

const makeRequest = async <T>({ url, method, headers, body, query }: ApiOption): Promise<T> => {
  // let token = null;
  // token = tokenStore.get();
  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTk4MjY2MDQ1IiwiZXhwIjoxNjQ1NTI2NjE4LCJpYXQiOjE2Mzc3NTA2MTh9.q5rfGr8NZD69yZhXS5FUfWmj81NJCeru15Tbgibda9_P1PO_TiweW5OIz20Dr1zTpwMJsEa7UxncLAYsjs3hSg';
  let response = {} as AxiosResponse;
  try {
    const requestConfig: AxiosRequestConfig = {
      url,
      method,
      data: body,
      params: query
    };
    requestConfig.headers = headers ? { ...headers } : {};
    // if (token) {
    requestConfig.headers.Authorization = `Bearer ${token}`;
    // }
    response = await axios.request<T>(requestConfig);
  } catch (error) {
    console.log(error);
  }
  return response.data;
};

export default makeRequest;
