---
sidebar_position: 203
---

# CMS Configuration

Themes are managed in CMS and can be assigned to both pages and individual blocks.

## Theme Data Structure

Each theme in CMS consists of:

- **name** (string, required) – theme name, which must match the CSS class name (e.g., `dark` → `.theme-dark`)
- **logo** (Media, optional) – logo assigned to the theme

The theme name is crucial – it must exactly match the CSS class name defined in `theme.css` (without the `theme-` prefix).

## Strapi

### Adding a Theme in Strapi

1. Go to **Content-Type Builder** in Strapi
2. Find the **AppConfig** content type
3. In the **Themes** field (relation) add a new entry of type **Theme**
4. Fill in the fields:
   - **Name** – theme name (e.g., `dark`, `corporate`)
   - **Logo** (optional) – select media with the logo
5. Save changes

### Structure in Strapi

Themes are stored as a relation in the `AppConfig` content type:

```typescript
appConfig {
  themes {
    name  // e.g., "dark"
    logo  // Media (optional)
  }
}
```

Mapping from Strapi to the application model happens in:

```26:34:packages/integrations/strapi-cms/src/modules/cms/mappers/cms.app-config.mapper.ts
        themes: component.themes.reduce((prev, theme) => {
            return {
                ...prev,
                [theme.name]: {
                    name: theme.name,
                    logo: mapMedia(theme.logo, baseUrl),
                },
            };
        }, {}),
```

### Assigning Theme to Page

1. Open a page in Strapi
2. In the **Theme** field, select a theme from the list of available themes
3. Save and publish the page

### Assigning Theme to Block

1. Open a block in Strapi
2. In the **Layout** section, find the **Theme** field
3. Select a theme from the list of available themes
4. Save and publish the block

## Contentful

### Adding a Theme in Contentful

1. Go to **Content model** in Contentful
2. Find the **AppConfig** content type
3. In the **Themes** field (reference, many) add a new entry of type **Theme**
4. Fill in the fields:
   - **Name** – theme name (e.g., `dark`, `corporate`)
   - **Logo** (optional) – select asset with the logo
5. Save and publish changes

### Structure in Contentful

Themes are stored as a reference collection in the `AppConfig` content type:

```typescript
appConfig {
  themesCollection {
    items {
      name  // e.g., "dark"
      logo  // Asset (optional)
    }
  }
}
```

Mapping from Contentful to the application model happens in:

```51:61:packages/integrations/contentful-cms/src/modules/cms/mappers/cms.app-config.mapper.ts
        themes:
            appConfig.themesCollection?.items.reduce((prev, theme) => {
                if (!theme.name) return prev;
                return {
                    ...prev,
                    [theme.name]: {
                        name: theme.name,
                        logo: mapMedia(theme.logo, baseUrl),
                    },
                };
            }, {} as CMS.Model.AppConfig.Themes) || {},
```

### Assigning Theme to Block

1. Open a block in Contentful
2. In the **Layout** section, find the **Theme** field
3. Select a theme from the list of available themes
4. Save and publish the block

The theme is mapped from the block's layout section:

```508:515:packages/integrations/contentful-cms/src/modules/cms/mappers/cms.page.mapper.ts
const mapLayout = ({ spacing, background, variant, theme }: ComponentBaseFragment): CMS.Model.Page.LayoutSection => {
    return {
        spacing: spacing as CMS.Model.Page.LayoutSection['spacing'],
        background: background as CMS.Model.Page.LayoutSection['background'],
        variant: variant as CMS.Model.Page.LayoutSection['variant'],
        theme: theme as CMS.Model.Page.LayoutSection['theme'],
    };
};
```

## Important Notes

### Theme Name

The theme name in CMS **must** match the CSS class name in `theme.css`:

- CMS: `dark` → CSS: `.theme-dark`
- CMS: `corporate` → CSS: `.theme-corporate`

If the names don't match, the theme will not be applied correctly.

### Theme Availability

All themes defined in CMS are available in `GlobalProvider` through `themes.available`:

```typescript
const { themes } = useGlobalContext();
// themes.available - object with all themes
// themes.current - current page theme
```

### Theme Hierarchy

If a block has an assigned theme, it overrides the page theme for that specific block. If a block doesn't have an assigned theme, it inherits the page theme (or the default theme from `:root`).

## Next Steps

- See how to [define themes in CSS](./css-themes.md)
