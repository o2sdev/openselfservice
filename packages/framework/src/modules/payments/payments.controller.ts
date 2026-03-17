import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { PaymentService } from './payments.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

@Controller('/payments')
@UseInterceptors(LoggerService)
export class PaymentsController {
    constructor(protected readonly paymentService: PaymentService) {}

    @Get('providers')
    getProviders(@Query() params: Request.GetProvidersParams, @Headers() headers: AppHeaders) {
        return this.paymentService.getProviders({ ...params, locale: headers[H.Locale] }, headers[H.Authorization]);
    }

    @Post('sessions')
    createSession(@Body() body: Request.CreateSessionBody, @Headers() headers: AppHeaders) {
        return this.paymentService.createSession(body, headers[H.Authorization]);
    }

    @Get('sessions/:id')
    getSession(@Param() params: Request.GetSessionParams, @Headers() headers: AppHeaders) {
        return this.paymentService.getSession(params, headers[H.Authorization]);
    }

    @Patch('sessions/:id')
    updateSession(
        @Param() params: Request.UpdateSessionParams,
        @Body() body: Request.UpdateSessionBody,
        @Headers() headers: AppHeaders,
    ) {
        return this.paymentService.updateSession(params, body, headers[H.Authorization]);
    }

    @Delete('sessions/:id')
    cancelSession(@Param() params: Request.CancelSessionParams, @Headers() headers: AppHeaders) {
        return this.paymentService.cancelSession(params, headers[H.Authorization]);
    }
}
