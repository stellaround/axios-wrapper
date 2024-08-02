// mock-instance.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'

export interface ResponseBody<T = any> {
  code: number;
  data?: T;
  msg: string;
}

export var instanceMock = axios.create({
  baseURL: '/',
  timeout: 60000
})

 var mock = new MockAdapter(instanceMock)

export const publicMock = (createData:any)=>{
  instanceMock = axios.create(createData);
  mock = new MockAdapter(instanceMock)
}

export const mockGet =(url: string, fun: any) => {
  return mock.onGet(url).reply(fun)
};

export const mockPost =(url: string, fun: any) => {
  return mock.onPost(url).reply(fun)
};

export const mockDelete =(url: string, fun: any) => {
  return mock.onDelete(url).reply(fun)
};

export const mockPut =(url: string, fun: any) => {
  return mock.onPut(url).reply(fun)
};
