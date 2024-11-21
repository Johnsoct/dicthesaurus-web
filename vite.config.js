import path from 'path'
import { defineConfig } from "vite"

export default defineConfig({
        css: {
                preprocessorOptions: {
                        scss: {
                                api: 'modern-compiler',
                        }
                }
        },
        resolve: {
                alias: {
                        '@': path.resolve(__dirname, './'),
                },
        },
})
