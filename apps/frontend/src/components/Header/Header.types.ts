import { Page } from '@o2s/api-harmonization/modules';
import React from 'react';

import { CMS } from '@o2s/framework/modules';

export interface HeaderProps {
    headerData: CMS.Model.Header.Header;
    alternativeUrls?: Page.Model.PageData['alternativeUrls'];
    children?: React.ReactNode;
}
