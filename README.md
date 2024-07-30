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
    import vue from '@vitejs/plugin-vue';
    export default defineConfig({
        //...
        AutoImport({
            imports: [
                {
                '@stellaround/request': ['publicRequests','useGet','usePost','usePut','useDelete','publicMock','mockGet','mockPost','mockPut','mockDelete'],
                },
            ],
        }),
    });
```

# request初始化

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
import '~/utils/request.ts'
```

## 方法使用示例
```ts
// api.ts
    export const getTest = (data: any) => {
        return useGet('url', data);
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

```ts
// demo.vue
    <template></template>
    <script lang="ts" setup>
    import { getTest, postTest ,putTest, deleteTest} from '@/api.ts';
    const demoFun = ()=>{
        getTest(query).then((res: any) => {
            console.log("res",res)
        });
        postTest(query).then((res: any) => {
            console.log("res",res)
        });
        putTest(query).then((res: any) => {
            console.log("res",res)
        });
        deleteTest(query).then((res: any) => {
            console.log("res",res)
        });
    }
    </script>
```



# License

Copyright (c) 2024-present 