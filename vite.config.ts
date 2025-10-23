// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from "vite-plugin-dts"; // For generating TypeScript declaration files

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: false,
      // Get a _single_ ts file
      rollupTypes: true,

      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: (format) => `main.${format}.js`,
      cssFileName: "styles",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        preserveModules: false,

        inlineDynamicImports: false,
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
