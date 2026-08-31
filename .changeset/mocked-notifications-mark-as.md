---
'@o2s/integrations.mocked': patch
---

fix(integrations.mocked): implement `markAs` in the mocked Notifications service

Opening an unviewed notification triggered an automatic mark-as-read request, which failed with
`NotImplementedException` and surfaced a "Something went wrong" toast on the notification details screen.
The mocked service now updates the notification status in the in-memory mocks (for every locale) and
completes successfully. An id that matches no notification is reported as a `404`, the way the other mocked
services report unknown ids.
