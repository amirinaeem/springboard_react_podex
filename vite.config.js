import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using a relative base makes the build work on GitHub Pages without editing.
export default defineConfig({
  plugins: [react()],
  base: './'
})
