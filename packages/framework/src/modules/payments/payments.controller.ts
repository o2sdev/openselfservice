import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { PaymentService } from './payments.service';
import { AppHeaders } from '@/utils/models/headers';

@Controller('/payments')
@UseInterceptors(LoggerService)
export class PaymentsController {
    constructor(protected readonly paymentService: PaymentService) {}

    @Get('providers')
    getProviders(@Query() params: Request.GetProvidersParams, @Headers() headers: AppHeaders) {
        return this.paymentService.getProviders(params, headers.authorization);
    }

    @Post('sessions')
    createSession(@Body() body: Request.CreateSessionBody, @Headers() headers: AppHeaders) {
        return this.paymentService.createSession(body, headers.authorization);
    }

    @Get('sessions/:id')
    getSession(@Param() params: Request.GetSessionParams, @Headers() headers: AppHeaders) {
        return this.paymentService.getSession(params, headers.authorization);
    }

    @Patch('sessions/:id')
    updateSession(
        @Param() params: Request.UpdateSessionParams,
        @Body() body: Request.UpdateSessionBody,
        @Headers() headers: AppHeaders,
    ) {
        return this.paymentService.updateSession(params, body, headers.authorization);
    }

    @Delete('sessions/:id')
    cancelSession(@Param() params: Request.CancelSessionParams, @Headers() headers: AppHeaders) {
        return this.paymentService.cancelSession(params, headers.authorization);
    }
}
