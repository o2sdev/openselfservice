import { ReactNode } from 'react';

import { CMS } from '@o2s/framework/modules';

export interface DesktopNavigationProps {
    logoSlot?: ReactNode;
    contextSlot?: ReactNode;
    localeSlot?: ReactNode;
    notificationSlot?: ReactNode;
    userSlot?: ReactNode;
    items: CMS.Model.Header.Header['items'];
    signInLabel?: CMS.Model.Header.Header['signInLabel'];
    shouldIncludeSignInButton?: boolean;
}
