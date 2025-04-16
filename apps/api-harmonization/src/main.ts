import { LogLevel } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { LoggerService } from '@o2s/utils.logger';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

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

    app.enableCors({
        origin: [process.env.FRONT_BASE_URL as string],
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

    app.useLogger(app.get(LoggerService));

    await app.listen(process.env.PORT as string);
}

bootstrap();
