import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { Users } from '@o2s/framework/modules';

import { ZendeskTicketService } from './zendesk-ticket.service';

@Module({
    imports: [HttpModule, Users.Module],
    providers: [ZendeskTicketService],
    exports: [ZendeskTicketService],
})
export class ZendeskTicketModule {}
