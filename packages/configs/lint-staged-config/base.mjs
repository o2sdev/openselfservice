export const config =  {
    '*.{css,scss}': (files) => [
        `prettier --write ${files.join(' ')}`
    ],
    '*.{js,jsx,ts,tsx}': (files) => [
        `prettier --write ${files.join(' ')}`,
        'tsc --noEmit',
        `eslint ${files.join(' ')} --fix --max-warnings=0`,
    ],
};
