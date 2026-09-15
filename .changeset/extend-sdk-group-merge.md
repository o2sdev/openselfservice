---
'@o2s/framework': minor
---

fix(framework): merge SDK method groups instead of replacing them

`extendSdk` spread the groups it was given over the SDK, so naming a group that was already there dropped everything it held. The frontend application hits this today: it passes a `notifications` group of its own, which leaves `sdk.notifications` with that one method and without `getNotifications`, `getNotification` and `markAs`. The returned type never showed it, being an intersection of both sides, so the compiler kept promising methods that were no longer there at runtime.

A group the SDK already has is now merged one level deep: the methods that were there stay, the new ones land next to them, and a method of the same name replaces the one below it. Anything that is not a group of methods, `makeRequest` for instance, is replaced as before.

`extendSdk` also keeps the type of the SDK it extends rather than narrowing it to `Sdk`, so extending an already extended SDK no longer hides what the first extension added.

`getSdk` and `extendSdk` now say in their doc comments what they build and how the merge behaves.
