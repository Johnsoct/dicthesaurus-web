import { defineConfig } from "vite";

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
                        '@': require('path').resolve(__dirname, '/'),
                },
        },
});
