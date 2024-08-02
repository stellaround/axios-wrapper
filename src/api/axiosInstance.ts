import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';
import {instanceMock} from './mockInstance'

export interface ResponseBody<T = any> {
  code: number;
  data?: T;
  msg: string;
}

var instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API ?? '/',
  timeout: 60000,
});

export const publicRequests = (createData:any,requestHandler?:any,responseHandler?:any,errorHandler?:any)=>{

  instance = axios.create(createData);
  const defaultResponseHandler = (response: any): ResponseBody<any> | AxiosResponse<any> | Promise<any> | any => {
    const hasChildrenPropData = Object.prototype.hasOwnProperty.call(response.data, 'data');
    const returnData = hasChildrenPropData ? response.data.data : response.data;
    return returnData;
  };

  if(!responseHandler){
    responseHandler = defaultResponseHandler
  }
  
  if(requestHandler){
    instance.interceptors.request.use(requestHandler);
  }
  if(errorHandler){
    instance.interceptors.response.use(responseHandler, errorHandler);
  }else{
    instance.interceptors.response.use(responseHandler);
  }
}

export const useGet = <R = any, T = any>(url: string, params?: T, isMock= false, config?: AxiosRequestConfig ): Promise<R> => {
  return ( isMock? instanceMock: instance).request<any, R>({
    url,
    params,
    method: 'GET',
    ...config,
  });
};

export const usePost = <R = any, T = any>(url: string, data?: T, isMock= false, config?: AxiosRequestConfig ): Promise<R> => {
  return ( isMock? instanceMock: instance).request<any, R>({
    url,
    data,
    method: 'POST',
    ...config,
  });
};

export const usePut = <R = any, T = any>(url: string, data?: T, isMock= false, config?: AxiosRequestConfig ): Promise<ResponseBody<R>> => {
  return ( isMock? instanceMock: instance).request({
    url, 
    data,
    method: 'PUT',
    ...config,
  });
};

export const useDelete = <R = any, T = any>(url: string, data?: T, isMock= false, config?: AxiosRequestConfig ): Promise<ResponseBody<R>> => {
  return ( isMock? instanceMock: instance).request({
    url,
    data,
    method: 'DELETE',
    ...config,
  });
};
