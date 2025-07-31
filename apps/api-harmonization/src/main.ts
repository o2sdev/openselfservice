import { LogLevel } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as telemetry from '@o2s/telemetry';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import process from 'node:process';

import { LoggerService } from '@o2s/utils.logger';

import { AppConfig } from './app.config';
import { AppModule } from './app.module';

async function bootstrap() {
    const logLevel = (process.env.LOG_LEVEL === 'info' ? 'log' : process.env.LOG_LEVEL) as LogLevel;
    const logLevels = [logLevel];
    if (logLevel === 'debug') {
        logLevels.push('verbose');
    }

    const app = await NestFactory.create(AppModule, {
        logger: logLevels,
    });

    if (process.env.API_PREFIX) {
        app.setGlobalPrefix(process.env.API_PREFIX);
    }

    const origins = process.env.FRONT_BASE_URLS!.split(',');

    app.enableCors({
        origin: [...origins],
        preflightContinue: false,
        credentials: true,
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cookie',
            'Cache-Control',
            'Pragma',
            'Expires',
            'x-locale',
            'x-currency',
            'x-client-timezone',
        ],
        methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    });

    app.use(helmet());
    app.use(cookieParser());
    app.use(compression());

    app.enableShutdownHooks();

    app.useLogger(app.get(LoggerService));

    telemetry.sendEvent('api-harmonization', 'bootstrap');
    telemetry.sendEvent(
        'api-harmonization',
        'integrations',
        Object.entries(AppConfig.integrations).reduce((prev, [module, integration]) => {
            return {
                ...prev,
                [module]: integration.name,
            };
        }, {}),
    );

    await app.listen(process.env.PORT as string);
}

bootstrap();
