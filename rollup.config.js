import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";
import sourceMaps from "rollup-plugin-sourcemaps";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      file: pkg.main,
      sourcemap: true,
    },
    {
      format: "es",
      file: pkg.module,
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
    }),
    terser(),
    sourceMaps(),
  ],
};
