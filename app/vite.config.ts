import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vuetifyPlugin from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuetifyPlugin()],
  server: {
    host: "0.0.0.0",
  },
  build: {
    outDir: path.resolve(__dirname, "../docs/"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
});
