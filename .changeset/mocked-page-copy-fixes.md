---
'@o2s/integrations.mocked': patch
'@o2s/integrations.mocked-dxp': patch
---

fix(integrations): correct titles and slugs of the mocked pages

The detail pages of `@o2s/integrations.mocked` carried the title of their list page in Polish and in German — the ticket details page was titled "Zgłoszenia" and "Fälle" — so the ticket, notification, order and service details pages now use a title of their own, as the product details page already did. The German slug of the warranty category lost its trailing typo (`garantie-und-reparaturt`) and the German slug of the complaint form its Polish wording (`/einreichen-reklamacji` became `/beschwerde-einreichen`).

The product list mock no longer stamps itself with `new Date()` on every boot, so its `lastMod` in the sitemap stops moving between restarts, and it carries the same fixed date as every other page.

In `@o2s/integrations.mocked-dxp` the credit and debit card pages had localized slugs but the English title in all three locales, and the savings account page was titled "Sparen Konto" in German.
