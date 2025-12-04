export default {
    '*.{js,jsx,ts,tsx,css,scss}': ['prettier --write'],
    '*.{js,jsx,ts,tsx}': ['eslint "{src,apps,libs,test}/**/*.{ts,tsx}" --fix'],
};
