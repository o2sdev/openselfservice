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

A custom module is split across two locations, mirroring how core modules are structured in the framework:

**Module definition** — the abstract service, model, and controller live in `packages/modules/<name>/`:

```text
packages/modules/documents/
├── src/
│   ├── documents.model.ts        # Normalized data model
│   ├── documents.service.ts      # Abstract service class (DI token)
│   ├── documents.controller.ts   # REST controller
│   └── index.ts                  # Barrel exports
├── package.json
└── tsconfig.json
```

**Concrete implementation** — the actual data-fetching logic lives in the integration package:

```text
packages/integrations/<your-integration>/src/modules/documents/
├── documents.service-impl.ts     # Concrete implementation
├── documents.mapper.ts           # Data mapping / mock data
└── index.ts                      # Barrel exports (re-exports abstract + impl)
```

This separation keeps the abstract module reusable across integrations, following the same pattern as core framework modules (where abstracts live in `@o2s/framework` and implementations live in integration packages).

After creating the module files, you also need to update:

- `packages/integrations/<your-integration>/src/modules/index.ts` — re-export the new module
- `packages/configs/integrations/src/models/` — add a config re-export for the module's types
- `apps/api-harmonization/src/app.module.ts` — register the module using `createModule()`

## Using the generator

A Turbo generator helps you scaffold the module definition:

```bash
npm run generate
# Select: custom-module
```

This scaffolds a standalone module package at `packages/modules/<name>/` containing the abstract service, model, controller, and barrel export. You provide:

- **Module name** — e.g. `documents`, `reports`, `warranties`

:::note
After running the generator, you still need to manually:

- Create a concrete service implementation in your integration (see [step 5](#5-create-a-concrete-implementation))
- Add a config re-export in `packages/configs/integrations/` for the module's types
- Register the module with `createModule()` in `apps/api-harmonization/src/app.module.ts`
- Run `npm install && npm run build`

See [step 6](#6-register-the-module) for details.
:::

## Step-by-step guide (manual)

### 1. Define your normalized data model

Create the model inside the module package at `packages/modules/<module-name>/src/`:

```typescript title="packages/modules/documents/src/documents.model.ts"
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

Define the service contract that integrations will implement. This file lives alongside the model in the same package:

```typescript title="packages/modules/documents/src/documents.service.ts"
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

Define REST endpoints for your module in the same package:

```typescript title="packages/modules/documents/src/documents.controller.ts"
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

Export the abstract module's public API:

```typescript title="packages/modules/documents/src/index.ts"
export * as Model from './documents.model';
export { DocumentService as Service } from './documents.service';
export { DocumentController as Controller } from './documents.controller';
```

### 5. Create a concrete implementation

Create the implementation in your integration package. This is the only part that lives in `packages/integrations/`:

```typescript title="packages/integrations/<your-integration>/src/modules/documents/documents.service-impl.ts"
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { DocumentService, Model } from '@o2s/modules.documents';

@Injectable()
export class DocumentServiceImpl extends DocumentService {
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

Create a barrel export for the integration module, re-exporting both the abstract types and the concrete implementation:

```typescript title="packages/integrations/<your-integration>/src/modules/documents/index.ts"
export { Service, Controller, Model } from '@o2s/modules.documents';
export { DocumentServiceImpl as MockedService } from './documents.service-impl';
```

Then add the re-export to your integration's modules index:

```typescript title="packages/integrations/<your-integration>/src/modules/index.ts"
// ... existing module exports
export * as Documents from './documents';
```

### 6. Register the module

Create a config re-export in `@o2s/configs.integrations` so that the module's types are accessible to blocks and the app, following the same pattern as core modules:

```typescript title="packages/configs/integrations/src/models/documents.ts"
import { Integration } from '@o2s/integrations.mocked/integration';

export import Service = Integration.Documents.Service;
export import MockedService = Integration.Documents.MockedService;
export import Controller = Integration.Documents.Controller;
export import Model = Integration.Documents.Model;
```

```typescript title="packages/configs/integrations/src/models/index.ts"
// ... existing exports
export * as Documents from './documents';
```

Then register the module directly in `app.module.ts` using `createModule()`, the same way SurveyJS and other non-core modules are registered:

```typescript title="apps/api-harmonization/src/app.module.ts"
import { Documents } from '@o2s/configs.integrations';
import { createModule } from '@o2s/framework/modules';

const DocumentsModule = createModule('documents');
export const DocumentsBaseModule = DocumentsModule.register({
    name: 'documents',
    service: Documents.Service,
    serviceImpl: Documents.MockedService,
    controller: Documents.Controller,
});

@Module({
    imports: [
        // ... core modules
        DocumentsBaseModule,
        // ... block modules
    ],
})
export class AppModule {}
```

Each custom module can be implemented by a different integration. For example, if `documents` is implemented in `integration1` and `warranties` in `integration2`, create separate config re-exports for each and register them independently in `app.module.ts`.

## Creating an integration for your custom module

Other integrations can provide alternative implementations for your custom module. They just need to:

1. Add `@o2s/modules.<name>` as a dependency
2. Create a concrete service class extending the abstract service
3. Re-export it alongside the abstract types from their `modules/index.ts`

Then update `@o2s/configs.integrations` to point to the new integration, and the `createModule()` call in `app.module.ts` to use the new implementation. This follows the same pattern as swapping core module integrations.

## Using custom modules in blocks

Blocks can inject and use custom module services the same way they use core framework services. Once you've set up the config re-export in [step 6](#6-register-the-module), use the module in blocks exactly like core framework services:

### Block module

```typescript title="packages/blocks/support/ticket-list/src/api-harmonization/ticket-list.module.ts"
import { DynamicModule, Module } from '@nestjs/common';
import { CMS, Documents, Tickets } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { TicketListController } from './ticket-list.controller';
import { TicketListService } from './ticket-list.service';

@Module({})
export class TicketListBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: TicketListBlockModule,
            providers: [
                TicketListService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Tickets.Service,
                    useExisting: Framework.Tickets.Service,
                },
                Documents.Service, // custom module — globally provided by createModule()
            ],
            controllers: [TicketListController],
            exports: [TicketListService],
        };
    }
}
```

### Block service

```typescript title="packages/blocks/support/ticket-list/src/api-harmonization/ticket-list.service.ts"
import { Injectable } from '@nestjs/common';
import { CMS, Documents, Tickets } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

@Injectable()
export class TicketListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly ticketService: Tickets.Service,
        private readonly documentService: Documents.Service,
    ) {}

    getTicketListBlock(query, headers): Observable<TicketListBlock> {
        const cms = this.cmsService.getBlockConfig<CMS.Model.TicketListBlock.TicketListBlock>({
            ...query, locale: headers[H.Locale], blockType: 'TicketListBlock',
        });
        const documents = this.documentService.getDocumentList({ limit: 5 });

        return forkJoin([cms, documents]).pipe(
            concatMap(([cms, documents]) => {
                // Use both CMS data and documents in your block
                // ...
            }),
        );
    }
}
```

This follows the same pattern as core services — imports come from `@o2s/configs.integrations`, which acts as the single source of truth for which integration provides each module. The abstract service class acts as the DI token, and NestJS resolves it to whatever concrete implementation was registered via `createModule()`.

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

The mocked integration includes a working example of a custom "documents" module:

- **Module definition** at `packages/integrations/mocked/src/modules/documents/`:
    - Normalized data model (`documents.model.ts`)
    - Abstract service definition (`documents.service.ts`)
    - REST controller (`documents.controller.ts`)
    - Mocked implementation (`documents.service.mocked.ts`)
    - Mock data mapper (`documents.mapper.ts`)
- **Config re-export** at `packages/configs/integrations/src/models/documents.ts`
- **Registration** in `apps/api-harmonization/src/app.module.ts` using `createModule()`

:::note
In the working example, the abstract module and implementation are co-located in the mocked integration for simplicity. In your own projects, follow the recommended split: abstract module in `packages/modules/<name>/` and implementation in `packages/integrations/<integration>/`.
:::
