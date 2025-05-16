import React from 'react';

import { CMS } from '@o2s/framework/modules';

export interface HeaderProps {
    data: CMS.Model.Header.Header;
    children?: React.ReactNode;
    alternativeUrls?: {
        [key: string]: string;
    };
}
