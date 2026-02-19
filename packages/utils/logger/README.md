# @o2s/utils.logger

Winston-based logging utility for O2S applications with NestJS integration.

## Installation

```bash
npm install @o2s/utils.logger
```

## Usage

### NestJS Integration

Register the logger module in your `app.module.ts`:

```typescript
import { LoggerModule } from '@o2s/utils.logger';

@Module({
    imports: [LoggerModule],
})
export class AppModule {}
```

### Using Logger Service

```typescript
import { LoggerService } from '@o2s/utils.logger';

@Injectable()
export class MyService {
    constructor(private readonly logger: LoggerService) {}

    doSomething() {
        this.logger.log('Info message');
        this.logger.warn('Warning message');
        this.logger.error('Error message', error);
    }
}
```

### Logger Interceptor

Use the logger interceptor to automatically log HTTP requests:

```typescript
import { LoggerInterceptor } from '@o2s/utils.logger';

@UseInterceptors(LoggerInterceptor)
@Controller('api')
export class ApiController {}
```

## Features

- Winston-based logging
- NestJS integration
- HTTP request logging interceptor
- Structured logging
- Log levels (error, warn, info, debug)

## Peer Dependencies

- `@nestjs/common` ^11.0.16
- `@nestjs/core` ^11
- `@nestjs/config` ^4.0.2
- `@nestjs/axios` ^4.0.1
- `rxjs` ^7

## Related Packages

- `@o2s/framework` - Core framework
