import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import Link from '@docusaurus/Link';

type EditMetaRowProps = {
    editUrl?: string;
    lastUpdatedAt?: string;
    lastUpdatedBy?: string;
    className?: string;
};

export default function EditMetaRow({ editUrl, lastUpdatedAt, lastUpdatedBy, className }: EditMetaRowProps): ReactNode {
    return (
        <div className={clsx('row', className)}>
            <div className="col">
                {editUrl && <Link to={editUrl}>Edit this page</Link>}
                {(lastUpdatedAt || lastUpdatedBy) && (
                    <div className="margin-top--sm">
                        Last updated{' '}
                        {lastUpdatedAt && (
                            <>
                                on <time>{new Date(lastUpdatedAt).toLocaleDateString()}</time>{' '}
                            </>
                        )}
                        {lastUpdatedBy && <>by {lastUpdatedBy}</>}
                    </div>
                )}
            </div>
        </div>
    );
}
