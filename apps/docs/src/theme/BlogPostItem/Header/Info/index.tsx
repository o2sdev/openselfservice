import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import { translate } from '@docusaurus/Translate';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';

import type { Props } from '@theme/BlogPostItem/Header/Info';
import TagsListInline from '@theme/TagsListInline';

import styles from './styles.module.css';

export default function BlogPostItemFooter({ className }): ReactNode {
    const { metadata } = useBlogPost();
    const { date, readingTime, tags } = metadata;
    const tagsExists = tags.length > 0;

    return (
        <div className={clsx(styles.container, 'margin-vert--md', className)}>
            <time dateTime={date} className={clsx(styles.date, 'margin-right--sm')}>
                {new Date(date).toLocaleDateString()}
            </time>
            {readingTime && (
                <>
                    {' · '}
                    <span className={styles.readingTime}>
                        {translate(
                            {
                                message: '{readingTime} min read',
                                id: 'theme.blog.post.readingTime',
                                description: 'The blog post reading time in minutes',
                            },
                            { readingTime: Math.ceil(readingTime) },
                        )}
                    </span>
                </>
            )}
            {tagsExists && (
                <>
                    {' · '}
                    <TagsListInline tags={tags} />
                </>
            )}
        </div>
    );
}
