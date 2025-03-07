---
'@o2s/integrations.strapi-cms': patch
'@o2s/integrations.mocked': patch
'@o2s/api-harmonization': patch
'@o2s/framework': patch
'@o2s/frontend': patch
---

fixed an issue with alternative URLs for pages - on pages with dynamic URLs (e.g. /cases/(.+)) switching to another locale caused route to change to /cases/(.+) instead of /cases/12345
