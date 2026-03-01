import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { mkdirSync, copyFileSync } from 'fs'

export default defineConfig({
    plugins: [
        dts(),
        react(),
        tailwindcss(),
        {
            name: 'copy-shadcn-css',
            closeBundle() {
                mkdirSync('./dist/style')
                copyFileSync('./src/style/shadcn.css', './dist/style/shadcn.css')
            }
        }
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, './src/index.ts'),
            name: 'reykit',
            fileName: 'index',
            formats: ['es']
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react-router-dom', 'clsx', 'tailwind-merge']
        }
    }
})
