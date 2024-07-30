/// <reference types="node" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/api/index.ts',
      name: 'AxiosWrapper',
      fileName: (format) => `axios-wrapper.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'ant-design-vue'],
      output: {
        globals: {
          vue: 'Vue',
          axios: 'axios',
          'ant-design-vue': 'antd'
        }
      }
    }
  }
});
