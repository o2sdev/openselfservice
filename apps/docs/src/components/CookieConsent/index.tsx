import React, { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

import pluginConfig from '@site/src/components/CookieConsent/config';

import styles from '../../css/cookie-consent.css';

const CookieConsentComponent = () => {
    useEffect(() => {
        // I'm sorry React, this is ugly but so are you! :)
        setTimeout(() => {
            CookieConsent.run(pluginConfig);
        }, 1000);
        // CookieConsent.show(true);
    }, []);

    return (
        <div id="cc-root" className="cc--elegant-black">
            {/*TODO: style the preferences button (a simple icon or similar?)*/}
            {/*<button className="fixed bottom-4 left-4 w-fit px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors" onClick={CookieConsent.showPreferences}>*/}
            {/*    Show Cookie Preferences*/}
            {/*</button>*/}
        </div>
    );
};

export default CookieConsentComponent;
