---
'@o2s/ui': minor
'@o2s/modules.surveyjs': minor
---

Upgrade `react-day-picker` to v10. The custom `Calendar` (`@o2s/ui`) drops the `caption` classNames slot removed in v10 — styling is unchanged, as it is already covered by `month_caption` and `caption_label` — along with the now-obsolete `captionClassName` prop. The surveyjs date-picker question uses `autoFocus` in place of the removed `initialFocus` prop.
