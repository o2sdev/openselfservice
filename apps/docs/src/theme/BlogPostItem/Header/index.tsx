import React, { type ReactNode } from 'react';

import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';

export default function BlogPostItemHeader(): ReactNode {
    return (
        <header className="blogpost-header">
            <BlogPostItemHeaderInfo />
            <BlogPostItemHeaderTitle />
            <BlogPostItemHeaderAuthors />
        </header>
    );
}
