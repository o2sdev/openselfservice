export default {
    '*.{js,jsx,ts,tsx,css,scss}': ['prettier --write'],
    '*.{js,jsx,ts,tsx}': () => 'tsc --noEmit',
};
