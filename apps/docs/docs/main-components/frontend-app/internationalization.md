---
sidebar_position: 300
---

# Internationalization

Since the O2S is heavily based on headless and API-first architecture, the main assumption when it comes to internationalization was to have it managed though API as well. This means that all localized content comes from integrations that are plugged into the API Harmonization server (mainly, the CMS integrations).

We also wanted to give the possibility to:

- have the internationalized routing (i.e. `/cases` route in English becomes `/fealle` in German),
- have the current localization defined with the URL instead only saved in local storage or within user profile - as some pages in the application are also available before signing in, having it in the pathname os much more SEO-friendly.

## i18n integration

The frontend app internally utilizes the [next-intl](https://next-intl.dev/) library for Next.js App Router internationalization, which allows to easily implement the mentioned requirements.

The i18n is set up in the `apps/frontend/src/i18n/routing.ts` file, where supported and default locales are configured.

:::tip
Check the [official documentation](https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing) for more information how to customize this library to your needs.
:::

### Accessing current locale

You can retrieve the current locale using the [provided React hook](https://next-intl.dev/docs/usage/configuration#locale):

```typescript
import { useLocale } from 'next-intl';

const currentLocale = useLocale();
```

### Navigation wrappers

`next-intl` provides [several wrappers](https://next-intl.dev/docs/routing/navigation#apis) for Next.js routing components and hooks, which should be used whenever there is a need to access or modify routing:

```typescript jsx
import { usePathname, useRouter, Link } from '@/i18n';

const SomeComponent = () => {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <Link href="/cases">go to details</Link>
    )
}
```

## Supported locales

The list of supported locales needs to be defined in the runtime via the environment variables:

```dotenv
NEXT_PUBLIC_SUPPORTED_LOCALES=en,de,pl
NEXT_PUBLIC_DEFAULT_LOCALE=en
```

- `NEXT_PUBLIC_SUPPORTED_LOCALES` defines which locales will be handled through the `next-intl` library,
- `NEXT_PUBLIC_DEFAULT_LOCALE` defines to which locale should the frontend app default if no prefix is entered into the URL (e.g. `/` will be redirected to `/en`).

## Pre-defined routes

However, as mentioned in the [Routing chapter](./routing.md) there are some pages that are not fully managed via an API. For those "special" pages routing also has to be specified directly within the frontend app, which happens inside `apps/frontend/src/i18n/routing.ts` file:

```typescript
export const routing = defineRouting({
    ...,
    pathnames: {
        '/login': {
            en: '/sign-in',
            de: '/einloggen',
            pl: '/logowanie',
        },
    } as { [key: string]: { [locale: string]: string } },
});
```

This causes the Next.js route `/login` (defined by `[locale]/(auth)/login` folder) to be automatically redirected to the URL for appropriate locale (e.g. `/de/einloggen`).

:::note
At the moment, only pages related to authentication have pre-defined route names. Check the [Authentication chapter](./authentication.md) for more information.
:::
