/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ['next/core-web-vitals', 'next/typescript'],
    ignorePatterns: ['dist/', '.next/', '.eslintrc.js', 'lint-staged.config.js'],
};
