# 简介

带有模拟接口的前端请求库

# 快速开始

## 安装依赖
```ts
  pnpm i @stellaround/request
```

# 全局引入
```ts
    // vite.config.ts
    import { defineConfig } from 'vite';
    import AutoImport from 'unplugin-auto-import/vite';
    export default defineConfig({
        plugins: [
            //...
            AutoImport({
                imports: [
                    {
                     // 可以按需引入 请求相关 'publicRequests','useGet','usePost','usePut','useDelete',
                     // mock虚拟请求相关 'publicMock','mockGet','mockPost','mockPut','mockDelete'
                    '@stellaround/request': ['publicRequests','useGet','usePost','usePut','useDelete','publicMock','mockGet','mockPost','mockPut','mockDelete'],
                    },
                ],
            }),
        ]
    });
```

# request 初始化
```ts
// request.ts

import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// 设置request请求头
const requestHandler = async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    //...
    return config;
};

// 设置response回调
const responseHandler = (response: any): ResponseBody<any> | AxiosResponse<any> | Promise<any> | any => {
    //...
    return Promise.reject(response);
};

// 设置error错误拦截
const errorHandler = (error: AxiosError): Promise<any> => {
    //...
    return Promise.reject(error);
};

export const initRequest = ()=>{
  publicRequests({
    baseURL: import.meta.env.VITE_APP_BASE_API ?? '/',
    timeout: 60000,
  },requestHandler,responseHandler,errorHandler)  
}
initRequest()
```

在main.ts中 引入request.ts

```ts
// main.ts
import '~/utils/request.ts'
```

## 请求方法声明示例
```ts
// api.ts
    export const getTest = (params: any) => {
        return useGet('url', params);
    };
    export const postTest = (data: any) => {
        return usePost('url', data);
    };
    export const putTest = (data: any) => {
        return usePut('url', data);
    };
    export const deleteTest = (data: any) => {
        return useDelete('url', data);
    };
```

## 请求方法参数说明

useGet，usePost，usePut，useDelete 中接收的4种参数(url: string, data?: T, isMock= false, config?: AxiosRequestConfig )

| 属性       | 说明                          | 类型   | 默认值 | 版本 |
| ---------- | ----------------------------- | ------ | ------ | ---- |
| url       | 请求地址             | any | -      |      |
| data      | 请求携带参数         | any | -      |      |
| isMock    | 是否为mock虚拟请求   | boolean | -      |      |
| config    | [用于发出请求的可用配置选项](https://github.com/axios/axios?tab=readme-ov-file#request-config)  | AxiosRequestConfig | -      |      |

## 调用请求方法示例
```ts
// demo.vue
    <template></template>
    <script lang="ts" setup>
    import { getTest, postTest ,putTest, deleteTest} from '@/api.ts';
    const demoFun = ()=>{
        getTest(params).then((res: any) => {
            console.log("res",res)
        });
        postTest(data).then((res: any) => {
            console.log("res",res)
        });
        putTest(data).then((res: any) => {
            console.log("res",res)
        });
        deleteTest(data).then((res: any) => {
            console.log("res",res)
        });
    }
    </script>
```

# 虚拟请求初始化
```ts
// mock.ts 

// 可以选择安装@faker-js/faker 生成虚拟数据
import { fakerZH_CN as faker } from '@faker-js/faker'

const createData = {
  baseURL: '/',
  timeout: 60000
}
// 初始化mock 如不需要修改请求配置，无需调用
publicMock(createData)

// 模拟数据列表
let dataList = Array.from({ length: 50 }, (_, index) => ({
  key: index + 1,
  id: index + 1,
  name: faker.person.fullName(),
  age: index + 1,
  address: faker.location.city(),
  sex: index % 2 === 0 ? 2 : 1
}))

// 基础实例 可直接传入返回结果数组包含 网络请求code和响应结果
mockGet('/api/getName',[200,{name:'demoName'}])

// 或者传入方法 
mockGet('/api/nameList',() => {
  const nameList = dataList.map((item) => item.name)
  return [
    200,
    {
      nameList: nameList
    }
  ]
})

// 传入的拦截url 可以为正则匹配
const url = /\/api\/item\/\d+/
mockGet(url,(config) => {
  const id = parseInt(config.url.split('/').pop(), 10)
  const item = dataList.find((item) => item.id === id)
  return [
    200,
    {
      data: item
    }
  ]
})

mockPost('/api/list-data/all',() => {
  return [
    200,
    {
      dataList,
      total: dataList.length
    }
  ]
})

mockPut('/api/dataPut',()=>{
  return [
    200,
    {
      dataList,
      total: dataList.length
    }
  ]
})

mockDelect('/api/item',(config) => {
  const idsToDelete = JSON.parse(config.data)
  dataList = dataList.filter((item) => (typeof idsToDelete === 'number' ? idsToDelete !== item.id : idsToDelete.includes(item.id)))
  return [
    200,
    {
      message: 'Items deleted successfully'
    }
  ]
})
```

## 模拟回调方法参数说明

mockGet，mockPost，mockPut，mockDelect 中接收的2种参数(url: string, fun: any )

| 属性       | 说明                          | 类型   | 默认值 | 版本 |
| ---------- | ----------------------------- | ------ | ------ | ---- |
| url       | 模拟请求的拦截地址             | any | -      |      |
| fun       | 拦截请求后返回的参数数组或者方法         | any | -      |      |

fun 数组接收的参数[code,data] ,code为模拟请求的网络响应，data为请求的返回对象{}


## 调用moke虚拟请求

```ts
//demo.vue
    <template></template>
    <script lang="ts" setup>
    // 对应拦截为 mockGet('/api/getName',[200,{name:'demoName'}])
    const getTest = () => {
        return useGet('/api/getName',{},true); //第一参数为mock拦截的请求地址，第二参数为请求接收的params或者data参数，第三个值为是否为模拟接口 默认为false （当模拟接口和真实接口 url重复时，可根据第三个参数来进行区分调用）
    };
    
    const demoFun = ()=>{
        getTest().then((res: any) => {
            console.log("res",res) // 返回为 {name:'demoName'}
        });
    }
    </script>
```


# License

Copyright (c) 2024-present [dsq1109511798](https://github.com/dsq1109511798)