# Procedura dodawania nowego bloku do integracji Contentful CMS

## Analiza implementacji CategoryListBlock

Przy dodawaniu bloku CategoryList do integracji Contentfula zostały zmodyfikowane następujące pliki:

1. **GraphQL Fragment** - `packages/integrations/contentful-cms/src/modules/cms/graphql/fragments/blocks/CategoryList.graphql`
2. **Mapper** - `packages/integrations/contentful-cms/src/modules/cms/mappers/blocks/cms.category-list.mapper.ts`
3. **Component Fragment** - `packages/integrations/contentful-cms/src/modules/cms/graphql/fragments/Component.graphql`
4. **CMS Service** - `packages/integrations/contentful-cms/src/modules/cms/cms.service.ts`
5. **Page Mapper** - `packages/integrations/contentful-cms/src/modules/cms/mappers/cms.page.mapper.ts`

## Część 1: Integracja Contentful CMS

### Krok 1: Utworzenie GraphQL Fragment dla bloku

Utworzyć plik: `packages/integrations/contentful-cms/src/modules/cms/graphql/fragments/blocks/[BlockName].graphql`

Wzorzec:
```graphql
fragment [BlockName]Component on Block[BlockName] {
    __typename
    sys {
        ...Sys
    }
    [pola z Contentful]
}
```

Przykład z CategoryList:
```graphql
fragment CategoryListComponent on BlockCategoryList {
    __typename
    sys {
        ...Sys
    }
    title
    description
    categoriesCollection {
        items {
            slug
        }
    }
    parent {
        slug
    }
}
```

### Krok 2: Dodanie fragmentu do Component.graphql

Edytować: `packages/integrations/contentful-cms/src/modules/cms/graphql/fragments/Component.graphql`

Dodać case w union type:
```graphql
... on Block[BlockName] {
    ...[BlockName]Component
}
```

Przykład:
```graphql
... on BlockCategoryList {
    ...CategoryListComponent
}
```

### Krok 3: Utworzenie mappera bloku

Utworzyć plik: `packages/integrations/contentful-cms/src/modules/cms/mappers/blocks/cms.[block-name].mapper.ts`

Wzorzec:
```typescript
import { NotFoundException } from '@nestjs/common';
import { CMS } from '@o2s/framework/modules';
import { [BlockName]ComponentFragment } from '@/generated/contentful';

export const map[BlockName]Block = ({
    isPreview,
    ...data
}: [BlockName]ComponentFragment & { isPreview?: boolean }): CMS.Model.[BlockName]Block.[BlockName]Block => {
    if (!data) {
        throw new NotFoundException();
    }

    switch (data.__typename) {
        case 'Block[BlockName]':
            return {
                id: data.sys.id,
                // mapowanie pól z Contentful
                meta: isPreview
                    ? {
                          __id: data.sys.id,
                          // nazwy pól dla LivePreview
                      }
                    : undefined,
            };
    }
};
```

Przykład z CategoryList:
```typescript
import { NotFoundException } from '@nestjs/common';
import { CMS } from '@o2s/framework/modules';
import { CategoryListComponentFragment } from '@/generated/contentful';

export const mapCategoryListBlock = ({
    isPreview,
    ...data
}: CategoryListComponentFragment & { isPreview?: boolean }): CMS.Model.CategoryListBlock.CategoryListBlock => {
    if (!data) {
        throw new NotFoundException();
    }

    switch (data.__typename) {
        case 'BlockCategoryList':
            return {
                id: data.sys.id,
                title: data.title,
                description: data.description,
                categoryIds: data.categoriesCollection?.items.map((category) => category.slug || '') || [],
                parent: data.parent
                    ? {
                          slug: data.parent.slug || '',
                      }
                    : undefined,
                meta: isPreview
                    ? {
                          __id: data.sys.id,
                          title: 'title',
                          description: 'description',
                          categories: 'categories',
                      }
                    : undefined,
            };
    }
};
```

### Krok 4: Dodanie metody do CMS Service

Edytować: `packages/integrations/contentful-cms/src/modules/cms/cms.service.ts`

1. Dodać import mappera:
```typescript
import { map[BlockName]Block } from './mappers/blocks/cms.[block-name].mapper';
```

2. Dodać metodę get[BlockName]Block:
```typescript
get[BlockName]Block(options: CMS.Request.GetCmsEntryParams) {
    const key = `[block-name]-component-${options.id}-${options.locale}`;
    return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(map[BlockName]Block)));
}
```

Przykład:
```typescript
getCategoryListBlock(options: CMS.Request.GetCmsEntryParams) {
    const key = `category-list-component-${options.id}-${options.locale}`;
    return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapCategoryListBlock)));
}
```

### Krok 5: Dodanie mapowania w Page Mapper

Edytować: `packages/integrations/contentful-cms/src/modules/cms/mappers/cms.page.mapper.ts`

Dodać case w funkcji `mapComponent`:
```typescript
case 'Block[BlockName]':
    return '[BlockName]Block';
```

Przykład:
```typescript
case 'BlockCategoryList':
    return 'CategoryListBlock';
```

### Krok 6: Regeneracja typów GraphQL

Po dodaniu wszystkich plików GraphQL, należy uruchomić codegen aby wygenerować typy TypeScript:

```bash
npm run codegen
```

lub odpowiednią komendę w projekcie do generowania typów z GraphQL.

## Część 2: Aktualizacja istniejącego bloku dla obsługi preview

### Krok 7: Dodanie pola meta do modelu bloku

Edytować: `packages/blocks/[block-name]/src/api-harmonization/[block-name].model.ts`

Dodać pole `meta` do modelu:
```typescript
meta?: CMS.Model.[BlockName]Block.[BlockName]Block['meta'];
```

Przykład z CategoryList:
```typescript
export class CategoryListBlock extends ApiModels.Block.Block {
    __typename!: 'CategoryListBlock';
    title!: CMS.Model.CategoryListBlock.CategoryListBlock['title'];
    description?: CMS.Model.CategoryListBlock.CategoryListBlock['description'];
    items!: Articles.Model.Category[];
    meta?: CMS.Model.CategoryListBlock.CategoryListBlock['meta'];
}
```

### Krok 8: Aktualizacja mappera - przekazywanie meta

Edytować: `packages/blocks/[block-name]/src/api-harmonization/[block-name].mapper.ts`

Dodać przekazywanie `meta` z CMS do modelu bloku:
```typescript
meta: cms.meta,
```

Przykład z CategoryList:
```typescript
export const mapCategoryList = (
    cms: CMS.Model.CategoryListBlock.CategoryListBlock,
    categories: Articles.Model.Category[],
    _locale: string,
): CategoryListBlock => {
    return {
        __typename: 'CategoryListBlock',
        id: cms.id,
        title: cms.title,
        description: cms.description,
        items: categories,
        meta: cms.meta,
    };
};
```

### Krok 9: Dodanie pola preview do request

Edytować: `packages/blocks/[block-name]/src/api-harmonization/[block-name].request.ts`

Upewnić się, że klasa request ma pole `preview`:
```typescript
preview?: boolean;
```

Przykład:
```typescript
export class GetCategoryListBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    preview?: boolean;
}
```

### Krok 10: Aktualizacja server component - przekazywanie preview

Edytować: `packages/blocks/[block-name]/src/frontend/[BlockName].server.tsx`

Upewnić się, że:
1. Komponent przyjmuje `isDraftModeEnabled` w props
2. Przekazuje `preview: isDraftModeEnabled` do SDK

Przykład z CategoryList:
```typescript
export const CategoryList: React.FC<CategoryListProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
    isDraftModeEnabled,
}) => {
    let data;
    try {
        data = await sdk.blocks.getCategoryList(
            {
                id,
                preview: isDraftModeEnabled,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
        return null;
    }

    return (
        <CategoryListDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
```

### Krok 11: Aktualizacja client component - LivePreview

Edytować: `packages/blocks/[block-name]/src/frontend/[BlockName].client.tsx`

1. Dodać import LivePreview:
```typescript
import { LivePreview } from '@o2s/configs.integrations/live-preview';
```

2. Dodać `meta` do destructuring props:
```typescript
meta,
...component
```

3. Użyć `LivePreview.useInspector()`:
```typescript
const inspector = LivePreview.useInspector();
```

4. Przekazać `meta` do komponentów i użyć `inspector` dla edytowalnych elementów:
```typescript
<ContentSection
    title={component.title}
    description={component.description}
    LinkComponent={LinkComponent}
    meta={meta}
>
    <ul {...inspector(meta, 'items')}>
        {component.items.map((item, index) => (
            <li {...inspector(meta?.items?.[index], 'label')}>
                ...
            </li>
        ))}
    </ul>
</ContentSection>
```

Przykład z CategoryList:
```typescript
'use client';

import { LivePreview } from '@o2s/configs.integrations/live-preview';
import { createNavigation } from 'next-intl/navigation';
import React from 'react';

export const CategoryListPure: React.FC<Readonly<CategoryListPureProps>> = ({
    locale,
    accessToken,
    routing,
    meta,
    ...component
}) => {
    const { Link: LinkComponent } = createNavigation(routing);
    const inspector = LivePreview.useInspector();

    return (
        <ContentSection
            title={component.title}
            description={component.description}
            LinkComponent={LinkComponent}
            meta={meta}
        >
            <ul
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                {...inspector(meta, 'categories')}
            >
                {component.items.map((item) => (
                    <li key={item.id} className="w-full">
                        <InformativeCard
                            title={item.title}
                            description={item.description}
                            href={item.slug}
                            icon={{
                                name: item.icon as DynamicIconProps['name'],
                                size: 24,
                            }}
                            LinkComponent={LinkComponent}
                        />
                    </li>
                ))}
            </ul>
        </ContentSection>
    );
};
```

### Krok 12: Aktualizacja types - dodanie isDraftModeEnabled i meta

Edytować: `packages/blocks/[block-name]/src/frontend/[BlockName].types.ts`

Upewnić się, że:
1. Interface props ma `isDraftModeEnabled?: boolean`
2. PureProps rozszerza model bloku, który zawiera `meta`

Przykład:
```typescript
export interface CategoryListProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
    isDraftModeEnabled?: boolean;
}

export type CategoryListPureProps = CategoryListProps & Model.CategoryListBlock;
```

## Ważne uwagi

### Integracja Contentful CMS

1. **Nazewnictwo**: Nazwy bloków w GraphQL muszą odpowiadać typom zdefiniowanym w Contentful (np. `BlockCategoryList`)
2. **Typy generowane**: Po uruchomieniu codegen, typy TypeScript będą dostępne w `@/generated/contentful`
3. **Cache**: Metody w CMS Service używają cache z kluczem opartym na ID i locale
4. **Preview mode**: Mappery obsługują tryb preview poprzez parametr `isPreview` i zwracają meta informacje
5. **Struktura**: Każdy blok powinien mieć odpowiedni model w `CMS.Model.[BlockName]Block.[BlockName]Block`

### Obsługa preview w bloku

1. **Meta**: Pole `meta` jest opcjonalne i zawiera informacje potrzebne do LivePreview (np. `__id`, nazwy pól)
2. **Inspector**: `LivePreview.useInspector()` zwraca funkcję, która przyjmuje meta i ścieżkę pola, zwracając atrybuty do edycji w Contentful
3. **Preview flag**: Parametr `preview` w request jest przekazywany przez cały łańcuch: Frontend → SDK → API → CMS Service → Contentful GraphQL
4. **ContentSection**: Komponent `ContentSection` już obsługuje `meta`, więc wystarczy je przekazać

## Pliki do modyfikacji - checklist

### Część 1: Integracja Contentful CMS

- [ ] `packages/integrations/contentful-cms/src/modules/cms/graphql/fragments/blocks/[BlockName].graphql` (nowy plik)
- [ ] `packages/integrations/contentful-cms/src/modules/cms/graphql/fragments/Component.graphql` (edycja)
- [ ] `packages/integrations/contentful-cms/src/modules/cms/mappers/blocks/cms.[block-name].mapper.ts` (nowy plik)
- [ ] `packages/integrations/contentful-cms/src/modules/cms/cms.service.ts` (edycja - import + metoda)
- [ ] `packages/integrations/contentful-cms/src/modules/cms/mappers/cms.page.mapper.ts` (edycja - mapComponent)
- [ ] Uruchomienie codegen do regeneracji typów

### Część 2: Aktualizacja istniejącego bloku dla preview

- [ ] `packages/blocks/[block-name]/src/api-harmonization/[block-name].model.ts` (edycja - dodanie meta)
- [ ] `packages/blocks/[block-name]/src/api-harmonization/[block-name].mapper.ts` (edycja - przekazywanie meta)
- [ ] `packages/blocks/[block-name]/src/api-harmonization/[block-name].request.ts` (edycja - dodanie preview)
- [ ] `packages/blocks/[block-name]/src/frontend/[BlockName].server.tsx` (edycja - przekazywanie preview)
- [ ] `packages/blocks/[block-name]/src/frontend/[BlockName].client.tsx` (edycja - LivePreview)
- [ ] `packages/blocks/[block-name]/src/frontend/[BlockName].types.ts` (edycja - isDraftModeEnabled)

