import React, { type ReactNode } from 'react';

import Link from '@docusaurus/Link';

type ReadMoreLinkProps = {
    blogPostTitle: string;
    to: string;
};

export default function ReadMoreLink({ blogPostTitle, to }: ReadMoreLinkProps): ReactNode {
    return (
        <Link to={to} aria-label={`Read more about ${blogPostTitle}`}>
            Read more
        </Link>
    );
}
