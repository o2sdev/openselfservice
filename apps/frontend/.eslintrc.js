/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@o2s/eslint-config/frontend.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
