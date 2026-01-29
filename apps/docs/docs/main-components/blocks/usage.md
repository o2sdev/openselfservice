---
sidebar_position: 200
---

# Usage

Because a block is treated as a NPM package, it can be simply installed and imported as any other NPM dependency. The only small complexity comes from the fact that each block consists of API Harmonization and Frontend parts, which should be used in the appropriate apps as well.

## Installing an existing block

A block needs to be installed into both the API Harmonization server and the Frontend app. You can either do that twice in their appropriate folders, or once on the root level of the project:

```shell
npm install @dxp/blocks.block-name --workspace=@o2s/api-harmonization --workspace=@o2s/frontend
```

## Using a block in apps

Once installed, a block needs to be imported in two places in both apps.

### API Harmonization server

The module part of the block has to be imported into the NestJS app for the block's API endpoints to be exposed. This happens within the `apps/api-harmonization/src/app.module.ts` file:

```typescript
import * as Faq from '@o2s/blocks.faq/api-harmonization';

...


@Module({
    imports: [
        ...,
        Faq.Module.register(AppConfig),
        ...,
    ]
})
```

Besides that, the `page` module also needs to br aware of which blocks are available (so that the Frontend app can properly distinguish blocks in the response) inside the `apps/api-harmonization/src/modules/page/page.model.ts` file:

```typescript
import * as Faq from '@o2s/blocks.faq/api-harmonization';

...

export type Blocks =
    ...
    | Faq.Model.FaqBlock['__typename']
    ...
```

With both places being added, the block is now fully included in the API Harmonization server and its endpoints are ready to be queried by the Frontend app.

### Frontend app

The only place that needs to be aware of the new block is the function responsible for rendering of blocks that is kept within the `apps/frontend/src/blocks/renderBlocks.tsx` file.

```typescript jsx
import * as Faq from '@o2s/blocks.faq/frontend';

...

switch (block.__typename as Modules.Page.Model.Blocks) {
    ...
    case 'FaqBlock':
        return <Faq.Renderer key={block.id} {...blockProps} />;
    ...
}
```

## Adding a new block

To add a completely new block, you can either manuallt create and initialize a package within the `packages/blocks` folder, or just use the [dedicated generator](../../guides/using-generators.md#block) that will take care of everything automatically.

:::tip
For more information on how to actually implement the block parts, take a look into the [Create a new block guide](../../guides/create-new-block/overview.md)
:::
