import babel from "rollup-plugin-babel";
import pkg from "../package.json";

export default [
  {
    input: "src/main.js",
    output: {
      name: "reusable-components",
      file: pkg.main,
      format: "iife"
    },
    external: ["react", "prop-types"],
    plugins: [
      babel({
        exclude: "node_modules/**"
      })
    ]
  }
];
