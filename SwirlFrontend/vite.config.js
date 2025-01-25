import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: parseInt(process.env.VITE_PORT),
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['gsap'], // Externalize GSAP if it's not bundled
    },
  },
  optimizeDeps: {
    include: ['gsap', 'gsap/ScrollTrigger'], // Ensure GSAP and ScrollTrigger are included in dev dependencies
  },
});
