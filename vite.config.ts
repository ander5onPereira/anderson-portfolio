import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import viteCompression from 'vite-plugin-compression';
import type { MinifyOptions } from 'terser';
import { viteStaticCopy } from 'vite-plugin-static-copy';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteCompression(),
     viteStaticCopy({
       targets: [
        {
          src: './robots.txt',
          dest: '.' // copia para dist/
        },
        {
          src: './sitemap.xml',
          dest: '.' // copia para dist/
        },
        {
          src: './404.html',
          dest: '.' // copia para dist/
        }
      ]
     })
  ],
  server:{
    host: true, 
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      } as MinifyOptions['compress'],
    },

    // chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react';
            if (id.includes('@headlessui')) return 'headlessui';
            if (id.includes('tailwindcss') || id.includes('tailwind-merge'))
              return 'tailwind';
            if (id.includes('framer-motion')) return 'framer-motion';
            if (id.includes('react-icons')) return 'react-icons';
            if (id.includes('react-tsparticles') || id.includes('tsparticles'))
              return 'tsparticles';
          }
        },
      },
    },
  },
});
