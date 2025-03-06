import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { LoggerService } from './logger.service';

@Global()
@Module({
    providers: [LoggerService, ConfigService],
    exports: [LoggerService],
})
export class LoggerModule {}
