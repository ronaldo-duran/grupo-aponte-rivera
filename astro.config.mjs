// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Sitio estático del Grupo Aponte Rivera.
// El dominio definitivo lo confirma el cliente; por ahora apuntamos al grupo.
export default defineConfig({
  site: 'https://grupoaponterivera.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
