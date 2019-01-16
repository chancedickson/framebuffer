export default [
  {
    input: "src/index.js",
    output: {
      file: "cjs/index.js",
      format: "cjs"
    },
    external: ["@chancedickson/easy-errors", "stream"]
  }
];
