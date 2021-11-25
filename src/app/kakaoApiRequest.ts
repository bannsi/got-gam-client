import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://dapi.kakao.com';

export interface ApiOption {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  headers?: { [key: string]: string };
  body?: { [key: string]: any }; // eslint-disable-line
  query?: { [key: string]: string | number | boolean };
  isApplicant?: boolean;
}

const kakaoApiRequest = async <T>({ url, method, headers, body, query }: ApiOption): Promise<T> => {
  let response = {} as AxiosResponse;

  try {
    const requestConfig: AxiosRequestConfig = {
      baseURL: BASE_URL,
      url: `${url}.json`,
      method,
      data: body,
      params: query
    };
    requestConfig.headers = headers ? { ...headers } : {};
    requestConfig.headers.Authorization = `KakaoAK 057a07ccce2a54f042f9b62e61d4457f`;
    response = await axios.request<T>(requestConfig);
  } catch (error) {
    console.log(error);
  }
  return response.data;
};

export default kakaoApiRequest;
