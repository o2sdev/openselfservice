export const getApiHeaders = () => {
    return {
        'x-client-timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
};
