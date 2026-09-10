---
'@o2s/framework': minor
'@o2s/utils.frontend': minor
---

feat(utils.frontend): add the shared SDK instance the blocks can build on

Adds `getSharedSdk` to `@o2s/utils.frontend/sdk`: the API url resolution (internal while rendering on the server, the runtime public url in the browser) and the logger settings now live in one place, and the SDK behind them is built on first use and reused — per process on the server, per bundle in the browser. Each of the 42 blocks currently repeats that setup and ends up with an `ofetch` client and a logger of its own; a block can now be reduced to `extendSdk(sdk, <block>(sdk))` over the shared instance. `extendSdk` copies the instance it extends, so what one block adds to it stays invisible to the others.

To make that possible without an `@ts-expect-error` per environment variable, `@o2s/framework/sdk` now exports `toLoggerConfig` along with the `LoggerConfig`, `LogLevel` and `LogFormat` types. It turns raw environment values into a logger config and leaves out a level or a format the logger does not know, so a typo in `LOG_LEVEL` falls back to the default instead of reaching winston.

No block is migrated yet, so nothing changes for them in this release.
