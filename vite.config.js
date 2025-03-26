import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    historyApiFallback: true,
  },
  plugins: [react()],
})
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   base: '/', // Replace '/' with your subdirectory if needed, e.g., '/my-app/'
//   plugins: [react()],
//   server: {
//     historyApiFallback: true, // Enables proper routing
//   },
// });
