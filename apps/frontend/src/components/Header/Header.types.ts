import { Page } from '@o2s/api-harmonization/modules';
import { Session } from 'next-auth';
import React from 'react';

import { CMS } from '@o2s/framework/modules';

export interface HeaderProps {
    headerData: CMS.Model.Header.Header;
    user?: Session['user'];
    alternativeUrls?: Page.Model.PageData['alternativeUrls'];
    children?: React.ReactNode;
}
