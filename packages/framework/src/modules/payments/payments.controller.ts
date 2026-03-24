import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, Query, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { PaymentService } from './payments.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

/**
 * HTTP controller for payments. Base path: `/payments`. All methods delegate to {@link PaymentService}.
 */
@Controller('/payments')
@UseInterceptors(LoggerService)
@ApiTags('payments')
export class PaymentsController {
    constructor(protected readonly paymentService: PaymentService) {}

    @Get('providers')
    @ApiOperation({ summary: 'List payment providers' })
    @ApiQuery({
        name: 'query',
        required: false,
        type: String,
        description: 'Payment provider resolution query (region, locale).',
    })
    @ApiResponse({ status: 200, description: 'Returns available payment providers.' })
    getProviders(
        @Query() params: Request.GetProvidersParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<PaymentService['getProviders']> {
        return this.paymentService.getProviders({ ...params, locale: headers[H.Locale] }, headers[H.Authorization]);
    }

    @Post('sessions')
    @ApiOperation({ summary: 'Create payment session' })
    @ApiBody({ type: Request.CreateSessionBody, description: 'Payment session creation payload.' })
    @ApiResponse({ status: 201, description: 'Payment session created.' })
    createSession(
        @Body() body: Request.CreateSessionBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<PaymentService['createSession']> {
        return this.paymentService.createSession(body, headers[H.Authorization]);
    }

    @Get('sessions/:id')
    @ApiOperation({ summary: 'Get payment session by id' })
    @ApiParam({ name: 'id', type: String, description: 'Payment session identifier.' })
    @ApiResponse({ status: 200, description: 'Returns payment session details.' })
    getSession(
        @Param() params: Request.GetSessionParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<PaymentService['getSession']> {
        return this.paymentService.getSession(params, headers[H.Authorization]);
    }

    @Patch('sessions/:id')
    @ApiOperation({ summary: 'Update payment session' })
    @ApiParam({ name: 'id', type: String, description: 'Payment session identifier.' })
    @ApiBody({ type: Request.UpdateSessionBody, description: 'Payment session update payload.' })
    @ApiResponse({ status: 200, description: 'Payment session updated.' })
    updateSession(
        @Param() params: Request.UpdateSessionParams,
        @Body() body: Request.UpdateSessionBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<PaymentService['updateSession']> {
        return this.paymentService.updateSession(params, body, headers[H.Authorization]);
    }

    @Delete('sessions/:id')
    @ApiOperation({ summary: 'Cancel payment session' })
    @ApiParam({ name: 'id', type: String, description: 'Payment session identifier.' })
    @ApiResponse({ status: 200, description: 'Payment session canceled.' })
    cancelSession(
        @Param() params: Request.CancelSessionParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<PaymentService['cancelSession']> {
        return this.paymentService.cancelSession(params, headers[H.Authorization]);
    }
}
