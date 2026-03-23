---
sidebar_position: 400
---

# Extending framework modules

The O2S framework ships with a set of core modules (invoices, tickets, orders, etc.). When your domain requires additional normalized data modules — such as documents, reports, or warranties — you can create **custom modules** that follow the same abstract-service/swappable-integration pattern as core modules.

## When to use Custom Modules

Use custom modules when:

- The core modules don't cover your domain entity
- You want the same integration-swappable pattern (abstract service + concrete implementations)
- Your module needs to be globally available for injection across the application

If you only need to **add fields** to an existing module, see [Extending an integration](./extending-integrations.md) instead.

## File structure overview

All custom module files live inside your **integration package** — the same place where core module implementations are located. For example, if you're adding a `documents` module to the mocked integration, the file structure would be:

```
packages/integrations/mocked/src/modules/documents/
├── documents.model.ts            # Normalized data model
├── documents.service.ts          # Abstract service class (DI token)
├── documents.service.mocked.ts   # Concrete implementation
├── documents.controller.ts       # REST controller
├── documents.mapper.ts           # Data mapping / mock data
└── index.ts                      # Barrel exports
```

This mirrors the structure of core module implementations in the same integration (e.g. `packages/integrations/mocked/src/modules/invoices/`).

:::info Where to put files in different project setups
- **Monorepo:** Create a new directory under your integration package, e.g. `packages/integrations/<your-integration>/src/modules/<module-name>/`
- **CLI-bootstrapped projects:** Keep `apps/api-harmonization/` free of module definitions. Instead, create the abstract module (model, service, controller) in `packages/modules/<module-name>/` and the concrete implementation in a new integration package at `packages/integrations/<your-integration>/`. This keeps the NestJS app clean and follows the same separation of concerns as the core framework.
:::

After creating the module files, you also need to update:
- `packages/integrations/<your-integration>/src/modules/index.ts` — re-export the new module
- `packages/integrations/<your-integration>/src/integration.ts` — add a `CustomModules` export
- `packages/configs/integrations/src/models/` — add a config re-export (if using the configs package)
- `apps/api-harmonization/src/app.config.ts` — add `customModules` to your `ApiConfig`
- `apps/api-harmonization/src/app.module.ts` — register custom modules via `registerCustomModules()`

## Step-by-Step guide

### 1. Define your normalized data model

Create the model inside your integration package at `packages/integrations/<your-integration>/src/modules/<module-name>/`:

```typescript title="packages/integrations/<your-integration>/src/modules/documents/documents.model.ts"
import { Models } from '@o2s/framework/modules';

export type DocumentType = 'CONTRACT' | 'REPORT' | 'POLICY';
export type DocumentStatus = 'DRAFT' | 'ACTIVE' | 'ARCHIVED';

export class Document {
    id!: string;
    title!: string;
    type!: DocumentType;
    status!: DocumentStatus;
    createdDate!: string;
    description!: string;
}

export type Documents = Models.Pagination.Paginated<Document>;

export class GetDocumentListQuery {
    offset?: number;
    limit?: number;
    type?: DocumentType;
    status?: DocumentStatus;
}

export class GetDocumentParams {
    id!: string;
}
```

### 2. Create an abstract service class

Define the service contract that integrations will implement. This file lives alongside the model in the same directory:

```typescript title="packages/integrations/<your-integration>/src/modules/documents/documents.service.ts"
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as Model from './documents.model';

@Injectable()
export abstract class DocumentService {
    protected constructor(..._services: unknown[]) {}

    abstract getDocumentList(
        query: Model.GetDocumentListQuery,
        authorization?: string,
    ): Observable<Model.Documents>;

    abstract getDocument(
        params: Model.GetDocumentParams,
        authorization?: string,
    ): Observable<Model.Document>;
}
```

### 3. Create a controller

Define REST endpoints for your module in the same directory:

```typescript title="packages/integrations/<your-integration>/src/modules/documents/documents.controller.ts"
import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoggerService } from '@o2s/utils.logger';
import * as Model from './documents.model';
import { DocumentService } from './documents.service';

@Controller('/documents')
@UseInterceptors(LoggerService)
export class DocumentController {
    constructor(protected readonly documentService: DocumentService) {}

    @Get()
    getDocumentList(
        @Query() query: Model.GetDocumentListQuery,
        @Headers('authorization') authorization?: string,
    ): Observable<Model.Documents> {
        return this.documentService.getDocumentList(query, authorization);
    }

    @Get(':id')
    getDocument(
        @Param() params: Model.GetDocumentParams,
        @Headers('authorization') authorization?: string,
    ): Observable<Model.Document> {
        return this.documentService.getDocument(params, authorization);
    }
}
```

### 4. Create a barrel export

Export everything from the module directory:

```typescript title="packages/integrations/<your-integration>/src/modules/documents/index.ts"
export * as Model from './documents.model';
export { DocumentService as Service } from './documents.service';
export { MockedDocumentService as MockedService } from './documents.service.mocked';
export { DocumentController as Controller } from './documents.controller';
```

Then add the re-export to your integration's modules index:

```typescript title="packages/integrations/<your-integration>/src/modules/index.ts"
// ... existing module exports
export * as Documents from './documents';
```

### 5. Create a concrete implementation

Implement the abstract service with your data source. This file also lives in the same module directory:

```typescript title="packages/integrations/<your-integration>/src/modules/documents/documents.service.mocked.ts"
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { DocumentService } from './documents.service';
import * as Model from './documents.model';

@Injectable()
export class MockedDocumentService extends DocumentService {
    constructor() {
        super();
    }

    getDocumentList(query: Model.GetDocumentListQuery): Observable<Model.Documents> {
        // Your implementation here
    }

    getDocument(params: Model.GetDocumentParams): Observable<Model.Document> {
        // Your implementation here
    }
}
```

### 6. Register the module

Add a `CustomModules` export to your integration's main configuration file:

```typescript title="packages/integrations/<your-integration>/src/integration.ts"
import { CustomModuleEntry } from '@o2s/framework/modules';

import { DocumentController } from './modules/documents/documents.controller';
import { DocumentService } from './modules/documents/documents.service';
import { MockedDocumentService } from './modules/documents/documents.service.mocked';

export const CustomModules: Record<string, CustomModuleEntry> = {
    documents: {
        name: 'my-integration',
        service: DocumentService,
        serviceImpl: MockedDocumentService,
        controller: DocumentController,
    },
};
```

If you use the `@o2s/configs.integrations` package, create a config re-export:

```typescript title="packages/configs/integrations/src/models/custom-modules.ts"
import { CustomModules } from '@o2s/integrations.mocked/integration';

export const CustomModulesConfig = CustomModules;
```

And add it to the configs index:

```typescript title="packages/configs/integrations/src/models/index.ts"
// ... existing exports
export { CustomModulesConfig } from './custom-modules';
```

Then add `customModules` to your `ApiConfig`:

```typescript title="apps/api-harmonization/src/app.config.ts"
import { CustomModulesConfig } from '@o2s/configs.integrations';
import { ApiConfig } from '@o2s/framework/modules';

export const AppConfig: ApiConfig = {
    integrations: {
        // ... core module configs
    },
    customModules: CustomModulesConfig,
};
```

Finally, use `registerCustomModules()` in your app module to automatically register all custom modules:

```typescript title="apps/api-harmonization/src/app.module.ts"
import { registerCustomModules } from '@o2s/framework/modules';
import { AppConfig } from './app.config';

const customModules = registerCustomModules(AppConfig);

@Module({
    imports: [
        // ... core modules
        ...customModules,
        // ... block modules
    ],
})
export class AppModule {}
```

## Creating an integration for your Custom Module

Other integrations can provide alternative implementations for your custom module. They just need to:

1. Import the abstract service class
2. Create a concrete implementation extending it
3. Export a `CustomModuleEntry` with their implementation

This follows the same pattern as core modules — the abstract service acts as the DI token, and the concrete implementation is swapped via configuration.

## Frontend SDK extension

To call your custom module's endpoints from the frontend, use `extendSdk()`:

```typescript
import { extendSdk, getSdk } from '@o2s/framework/sdk';

const baseSdk = getSdk({ apiUrl: '/api' });

const sdk = extendSdk(baseSdk, {
    documents: {
        getList: (query) => baseSdk.makeRequest('/documents', { params: query }),
        getById: (id) => baseSdk.makeRequest(`/documents/${id}`),
    },
});
```

## Working example

The mocked integration includes a complete example of a custom "documents" module at `packages/integrations/mocked/src/modules/documents/`. This module demonstrates:

- Normalized data model (`documents.model.ts`)
- Abstract service definition (`documents.service.ts`)
- Mocked implementation (`documents.service.mocked.ts`)
- REST controller (`documents.controller.ts`)
- Mock data mapper (`documents.mapper.ts`)
