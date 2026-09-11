---
'@o2s/framework': minor
---

feat(framework): normalize errors from every SDK request

SDK methods now reject with the framework-level `ApiRequestError` for transport, HTTP and response parsing failures. The error exposes the request method and URL together with the status, response data and original cause when available. `BlockRequestError` remains a deprecated alias for compatibility with block SDK consumers.
