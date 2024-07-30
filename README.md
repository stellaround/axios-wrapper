# 简介

针对请求方法封装的公共库

# 快速开始

## 安装依赖
```ts
    pnpm i @stellaround/request -D
```

Taro config文件配置
# 全局引入
```ts
    AutoImport({
        imports: [
            {
            '@stellaround/request': ['publicRequests','useGet','usePost','usePut','useDelete'],
            },
        ],
    }),
```

# License

Copyright (c) 2024-present 