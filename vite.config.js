import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import { json } from 'react-router-dom'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.COIN_KEY': JSON.stringify(process.env.COIN_KEY),
  },
})
