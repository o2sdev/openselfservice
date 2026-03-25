---
'@o2s/ui': patch
---

fix: improve accessibility and flexibility of UI form elements

- `PhoneInput`: add `label` and `caption` props for proper form labeling
- `SelectWithDetails`: add `isLabelHidden` prop for visually hidden but accessible labels
- `Switch`: add `SwitchWithLabelAndDetails` variant with description, error, and read-only support
- `LoadingOverlay`: ensure full-width/height coverage on container
- `GlobalProvider`: update CMS import path to use `@o2s/configs.integrations`
