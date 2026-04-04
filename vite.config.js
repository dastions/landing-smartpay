import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
const isUserPage = repository.endsWith('.github.io')
const base = process.env.GITHUB_ACTIONS
  ? (isUserPage ? '/' : `/${repository}/`)
  : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
