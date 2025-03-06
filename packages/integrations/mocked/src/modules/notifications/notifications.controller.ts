import { Get, Injectable } from '@nestjs/common';

import { Notifications } from '@o2s/framework/modules';

@Injectable()
export class NotificationsController extends Notifications.Controller {
    @Get()
    someNewEndpoint() {
        return 'someNewEndpoint';
    }
}
