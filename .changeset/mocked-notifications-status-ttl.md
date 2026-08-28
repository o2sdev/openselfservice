---
'@o2s/integrations.mocked': patch
---

fix(integrations.mocked): roll a marked notification back to its original status after 5 minutes

Marking a notification as viewed mutates the in-memory mocks, which are shared by everyone hitting the same instance, so the change used to stick until the app was restarted. Each change is now kept for `STATUS_TTL` (5 minutes) and then rolled back, so that marking a notification can be tried again on a running demo.
