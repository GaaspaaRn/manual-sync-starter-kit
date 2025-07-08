
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { componentTagger } from "lovable-tagger"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [react()]
  
  if (mode === 'development') {
    plugins.push(componentTagger())
  }

  return {
    plugins,
    server: {
      host: "::",
      port: 8080,
    },
  }
})
