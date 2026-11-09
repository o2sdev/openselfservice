---
'@o2s/integrations.zendesk': patch
---

fix(integrations.zendesk): narrow custom field ids before mapping them

The Zendesk types are generated at install time from the live OpenAPI spec, and the current spec widens ticket `custom_fields` to `TicketFieldValueInput | { [key: string]: unknown }`. For the untyped branch `field.id` is `unknown`, so the non-null assertion narrows it to `{}` and the calls to `getFieldKeyById` and `consentFieldIds.includes` no longer compile. Any fresh install failed to build the package.

The ticket mapper now reads the id once with `Number(field.id)` and passes that number on. Nothing changes at runtime: Zendesk still returns numeric ids, which is what the assertion assumed before.
