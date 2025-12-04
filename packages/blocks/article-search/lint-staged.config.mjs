export default {
    '*.{js,jsx,ts,tsx,css,scss}': ['prettier --write'],
    '*.{js,jsx,ts,tsx}': ['tsc --noEmit', 'eslint "{src,apps,libs,test}/**/*.{ts,tsx}" --fix'],
};
