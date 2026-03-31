---
sidebar_position: 900
---

# Telemetry

O2S collects completely anonymous telemetry data about general usage. Participation in this anonymous program is optional, and you may opt out if you'd not like to share any information.

## What data is collected

The following data is being collected in your O2S application:

- unique machine ID,
- information about the operating system and CI system that the application is running on,
- Node.js version,
- names of the inegration packages that are plugged in into the API Harmonization Server.

## How to opt out

The easiest way of choosing not to participate, you can simply set the following environment variable:

```shell
TELEMETRY_DISABLED=true
```

Alternatively, if you've chosen to clone the whole repository and have access to the entire codebase, you can also manually remove the usage of the `@o2s/telemetry` package, e.g. by removing tracing of `strapi-cms` integration:

```typescript title="packages/integrations/strapi-cms/src/modules/articles/articles.service.ts"
telemetry.sendEvent('articles', 'register', 'strapi-cms');
```
