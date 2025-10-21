// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from "vite-plugin-dts"; // For generating TypeScript declaration files

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ], // Include dts plugin
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MyVueLibrary", // Global variable name if using UMD format
      fileName: (format) => `main.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"], // Exclude Vue from the bundle
      output: {
        globals: {
          vue: "Vue", // Global variable name for Vue if external
        },
      },
    },
  },
});
