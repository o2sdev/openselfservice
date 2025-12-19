import React, { type ReactNode } from 'react';

import { useThemeConfig } from '@docusaurus/theme-common';

import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';

function Footer(): ReactNode {
    const { footer } = useThemeConfig();

    const { copyright, links, logo, style } = footer;

    return (
        <FooterLayout
            style={style}
            links={links && links.length > 0 && <FooterLinks links={links} />}
            logo={logo && <FooterLogo logo={logo} />}
            copyright={copyright && <FooterCopyright copyright={copyright} />}
        />
    );
}

export default React.memo(Footer);
