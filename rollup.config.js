import typescript from "rollup-plugin-typescript";

export default [
  {
    input: "src/main.ts",
    output: {
      name: "reusable",
      file: "dist/main.js",
      format: "cjs",
      name: "ReactUi"
    },
    external: ["react"],
    plugins: [typescript()]
  }
];
