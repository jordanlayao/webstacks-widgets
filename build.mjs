/**
 * Programmatic Vite build to avoid CLI path resolution issues on Vercel.
 * Usage: node build.mjs
 */
import { build } from 'vite';
import react from '@vitejs/plugin-react';

const config = {
  plugins: [react()],
};

await build(config);
