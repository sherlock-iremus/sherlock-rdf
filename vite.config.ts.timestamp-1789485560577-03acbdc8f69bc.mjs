import "node:module";
import { defineConfig } from "file:///Users/amleth/pCloud%20Drive/repositories/sherlock-rdf/.yarn/__virtual__/vite-virtual-0b2d045219/4/.yarn/berry/cache/vite-npm-8.3.0-91dd376ce4-10c0.zip/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import dts from "file:///Users/amleth/pCloud%20Drive/repositories/sherlock-rdf/.yarn/__virtual__/vite-plugin-dts-virtual-b369c5418b/4/.yarn/berry/cache/vite-plugin-dts-npm-5.1.0-0eeab62366-10c0.zip/node_modules/vite-plugin-dts/dist/index.mjs";
var vite_config_default = defineConfig({
	plugins: [dts({ include: ["lib"] })],
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve("/Users/amleth/pCloud Drive/repositories/sherlock-rdf", "lib/main.ts"),
			formats: ["es"]
		},
		rollupOptions: { output: { entryFileNames: "[name].js" } }
	}
});
//#endregion
export { vite_config_default as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml0ZS5jb25maWcuanMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FtbGV0aC9wQ2xvdWQgRHJpdmUvcmVwb3NpdG9yaWVzL3NoZXJsb2NrLXJkZi92aXRlLmNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIGR0cyh7IGluY2x1ZGU6IFsnbGliJ10gfSlcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBjb3B5UHVibGljRGlyOiBmYWxzZSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ2xpYi9tYWluLnRzJyksXG4gICAgICBmb3JtYXRzOiBbJ2VzJ10sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLElBQUEsc0JBQWUsYUFBYTtDQUMxQixTQUFTLENBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUMxQjtDQUNBLE9BQU87RUFDTCxlQUFlO0VBQ2YsS0FBSztHQUNILE9BQU8sUUFBQSx3REFBbUIsYUFBYTtHQUN2QyxTQUFTLENBQUMsSUFBSTtFQUNoQjtFQUNBLGVBQWUsRUFDYixRQUFRLEVBQ04sZ0JBQWdCLFlBQ2xCLEVBQ0Y7Q0FDRjtBQUNGLENBQUMifQ==