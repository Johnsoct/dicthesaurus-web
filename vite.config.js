import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
        css: {
                preprocessorOptions: {
                        scss: {
                                api: 'modern-compiler',
                        }
                }
        }
});
