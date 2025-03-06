const buildEslintCommand = (filenames) =>
    `next lint --fix --file ${filenames.join(' --file ')}`;

export default {
    '*.{js,jsx,ts,tsx,css,scss}': ['prettier --write'],
    '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
