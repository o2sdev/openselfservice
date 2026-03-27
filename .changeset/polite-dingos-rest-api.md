---
'@o2s/framework': patch
'@o2s/integrations.mocked': patch
'@o2s/utils.frontend': patch
---

docs(api): REST API reference site, OpenAPI tooling, and Swagger metadata

Restructure generated OpenAPI docs under `rest-api` with a readable sidebar label. Enrich the
OpenAPI snapshot script and set Swagger title or description in the harmonization app. Exclude the
app-only Organizations controller from the public spec. Expand `@nestjs/swagger` decorators across
framework controllers and models. Minor mocked auth guard and frontend status-order mapping tweaks.
