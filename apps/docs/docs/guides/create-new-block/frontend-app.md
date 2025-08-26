---
sidebar_position: 300
---

# Creating the frontend block

### Updating the block resolver

Once the harmonizing block is ready, the next step is to update the `renderBlocks` function inside `apps/frontend/src/utils/renderBlocks.tsx` file so that it includes the newly added [renderer](../../main-components/blocks/structure.md#renderer):

```typescript jsx
import * as TicketsSummary from '@o2s/blocks.faq/frontend';

...

switch (block.__typename as Modules.Page.Model.Blocks) {
    ...
    case 'TicketsSummaryBlock':
        return <TicketsSummary.Renderer key={block.id} {...blockProps} />;
    ...
}

```

### Fetch block data

Next, we need to fetch the initial data required to actually render the block. The generated files already include the necessary code to do that, located at `packages/blocks/tickets-summary/src/frontend/TicketsSummary.server.tsx`:

```typescript jsx
const data = await sdk.blocks.getTicketsSummary(
    {
        id,
    },
    { 'x-locale': locale },
    accessToken,
);
```

### Render the content

In the last step, we need to display the block. Let's edit the `packages/blocks/tickets-summary/src/frontend/TicketsSummary.client.tsx` file and render the content in a simple layout:

```typescript jsx
export const TicketsSummaryPure: React.FC<TicketsSummaryPureProps> = ({ ...block }) => {
    const {
        title,
        tickets: { closed, open, latest },
    } = block;

    return (
        <Card>
            <CardHeader>
                <Typography variant="h2" asChild>
                    <h1>{title}</h1>
                </Typography>
            </CardHeader>
            <CardContent>
                <TextItem title={open.label}>{open.value}</TextItem>
                <TextItem title={closed.label}>{closed.value}</TextItem>

                <Typography variant="h4" asChild>
                    <h3>{latest.title}</h3>
                </Typography>

                <TextItem title={latest.topic.label}>{latest.topic.value}</TextItem>
                <TextItem title={latest.type.label}>{latest.type.value}</TextItem>
                <TextItem title={'latest.editDate.label'}>{latest.editDate.value}</TextItem>
            </CardContent>
            <CardFooter></CardFooter>
        </Card>
    );
};
```
