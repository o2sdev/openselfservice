import { ConfigFactory } from '@nestjs/config';

import { AppConfig } from '../app.config';

export const configuration: ConfigFactory = () => {
    return {
        integrations: AppConfig.integrations,
    };
};
