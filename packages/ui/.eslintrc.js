/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@o2s/eslint-config/ui.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
};
