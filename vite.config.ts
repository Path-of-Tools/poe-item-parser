import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "PoE2ItemParser",
      fileName: (format) => `poe2-item-parser.${format}.js`,
    },
  },
});