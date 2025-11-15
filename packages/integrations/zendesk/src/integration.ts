import { HttpModule } from '@nestjs/axios';

import { ApiConfig, Users } from '@o2s/framework/modules';

import { Service as TicketsService } from './modules/tickets';

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    tickets: {
        name: 'zendesk',
        service: TicketsService,
        imports: [HttpModule, Users.Module],
    },
};
