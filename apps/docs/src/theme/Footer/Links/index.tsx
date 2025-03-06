import React, { type ReactNode } from 'react';

import { isMultiColumnFooterLinks } from '@docusaurus/theme-common';

import type { Props } from '@theme/Footer/Links';
import FooterLinksMultiColumn from '@theme/Footer/Links/MultiColumn';
import FooterLinksSimple from '@theme/Footer/Links/Simple';

export default function FooterLinks({ links }: Props): ReactNode {
    return isMultiColumnFooterLinks(links) ? (
        <FooterLinksMultiColumn columns={links} />
    ) : (
        <FooterLinksSimple links={links} />
    );
}
