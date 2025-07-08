import React from 'react';

export type LinkComponent = React.FC<
    Required<Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>> &
        React.AnchorHTMLAttributes<HTMLAnchorElement>
>;
