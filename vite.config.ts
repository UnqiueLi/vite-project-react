import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 以es模块化的方式,从node的path 模块中,导入join函数
import { join } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // 在resolve.alias对象下,配置@的指向路径
    resolve: {
        alias: {
            '@':join(__dirname,'./src/')
        }
    }
})
