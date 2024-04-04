// vite.config.ts
import { defineConfig } from "file:///Users/amleth/Library/CloudStorage/Dropbox/CNRS/iremus/data-iremus/repositories/sherlock-rdf/node_modules/.pnpm/vite@5.1.6_@types+node@20.11.26/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import dts from "file:///Users/amleth/Library/CloudStorage/Dropbox/CNRS/iremus/data-iremus/repositories/sherlock-rdf/node_modules/.pnpm/vite-plugin-dts@3.7.3_@types+node@20.11.26_typescript@5.4.2_vite@5.1.6/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/amleth/Library/CloudStorage/Dropbox/CNRS/iremus/data-iremus/repositories/sherlock-rdf";
var vite_config_default = defineConfig({
  plugins: [
    dts({ include: ["lib"] })
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/main.ts"),
      formats: ["es"]
    },
    rollupOptions: {
      output: {
        entryFileNames: "[name].js"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYW1sZXRoL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL0Ryb3Bib3gvQ05SUy9pcmVtdXMvZGF0YS1pcmVtdXMvcmVwb3NpdG9yaWVzL3NoZXJsb2NrLXJkZlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FtbGV0aC9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0NOUlMvaXJlbXVzL2RhdGEtaXJlbXVzL3JlcG9zaXRvcmllcy9zaGVybG9jay1yZGYvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FtbGV0aC9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94L0NOUlMvaXJlbXVzL2RhdGEtaXJlbXVzL3JlcG9zaXRvcmllcy9zaGVybG9jay1yZGYvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIGR0cyh7IGluY2x1ZGU6IFsnbGliJ10gfSlcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBjb3B5UHVibGljRGlyOiBmYWxzZSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ2xpYi9tYWluLnRzJyksXG4gICAgICBmb3JtYXRzOiBbJ2VzJ10sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc2MsU0FBUyxvQkFBb0I7QUFDbmUsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUztBQUZoQixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQUEsRUFDMUI7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxJQUNmLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDdkMsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNoQjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
