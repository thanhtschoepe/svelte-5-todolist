import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Icons from 'unplugin-icons/vite';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), Icons({
    autoInstall: true,
    compiler: "svelte"
  })],
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
})
