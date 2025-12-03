import React from 'react';

export type LinkComponent = (
    props: Required<Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>> &
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
) => React.ReactNode;
