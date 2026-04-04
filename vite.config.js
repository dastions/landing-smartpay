import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://landing.appsmartpay.com — GitHub Pages with custom domain (assets at site root)
const base = '/'

export default defineConfig({
  plugins: [react()],
  base,
})
