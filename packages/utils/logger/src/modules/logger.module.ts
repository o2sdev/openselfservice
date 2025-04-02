import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { LoggerService } from './logger.service';

@Global()
@Module({
    imports: [ConfigModule],
    providers: [LoggerService, ConfigService],
    exports: [LoggerService],
})
export class LoggerModule {}
