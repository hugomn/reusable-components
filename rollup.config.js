import babel from "rollup-plugin-babel";

export default [
  {
    input: "src/main.js",
    output: {
      name: "reusable",
      file: "dist/main.js",
      format: "iife"
    },
    external: ["react"],
    plugins: [
      babel({
        exclude: "node_modules/**"
      })
    ]
  }
];
