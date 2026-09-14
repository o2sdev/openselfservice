---
'@o2s/modules.surveyjs': patch
---

refactor(modules.surveyjs): build the module SDK on the shared instance

The SurveyJS module repeated the same SDK setup as the blocks — the API url resolution, the logger settings with an `@ts-expect-error` per environment variable and a method-by-method pick out of its own factory. It now extends the instance from `@o2s/utils.frontend/sdk` like they do, which also drops its undeclared import of `next-runtime-env`.
