import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import { ThemeClassNames } from '@docusaurus/theme-common';

import EditMetaRow from './EditMetaRow';
import ReadMoreLink from './ReadMoreLink';

export default function BlogPostItemFooter(): ReactNode {
    const { metadata, isBlogPostPage } = useBlogPost();
    const { title, editUrl, hasTruncateMarker, lastUpdatedBy, lastUpdatedAt } = metadata;

    // A post is truncated if it's in the "list view" and it has a truncate marker
    const truncatedPost = !isBlogPostPage && hasTruncateMarker;

    const renderFooter = truncatedPost || editUrl;

    if (!renderFooter) {
        return null;
    }

    // BlogPost footer - details view
    if (isBlogPostPage) {
        const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

        return (
            <footer className="docusaurus-mt-lg">
                {canDisplayEditMetaRow && (
                    <EditMetaRow
                        className={clsx('margin-top--sm', ThemeClassNames.blog.blogFooterEditMetaRow)}
                        editUrl={editUrl}
                        lastUpdatedAt={lastUpdatedAt?.toString()}
                        lastUpdatedBy={lastUpdatedBy}
                    />
                )}
            </footer>
        );
    }
    // BlogPost footer - list view
    else {
        return (
            <footer className="row docusaurus-mt-lg">
                {truncatedPost && (
                    <div className="col blogpost-button-container">
                        <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
                    </div>
                )}
            </footer>
        );
    }
}
