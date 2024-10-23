import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./src/manifest";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    crx({
      manifest,
      contentScripts: {
        injectCss: true,
      },
    }),
  ],
  server: {
    port: 3000,
    hmr: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@assets": resolve(__dirname, "./src/assets"),
    },
  },
});
