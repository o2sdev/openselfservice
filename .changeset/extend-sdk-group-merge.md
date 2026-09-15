---
'@o2s/framework': minor
---

fix(framework): merge SDK method groups instead of replacing them

`extendSdk` spread the groups it was given over the SDK, so naming a group that was already there dropped everything it held. The frontend application hits this today: it passes a `notifications` group of its own, which leaves `sdk.notifications` with that one method and without `getNotifications`, `getNotification` and `markAs`. The returned type never showed it, being an intersection of both sides, so the compiler kept promising methods that were no longer there at runtime.

A group the SDK already has is now merged one level deep: the methods that were there stay, the new ones land next to them, and a method of the same name replaces the one below it. Anything that is not a group of methods, `makeRequest` for instance, is replaced as before.

The return type says all of this now, instead of intersecting both sides and hoping they agree. `extendSdk` keeps the type of the SDK it extends rather than narrowing it to `Sdk`, so extending an already extended SDK no longer hides what the first extension added, and a method the extension replaces is typed as the replacement alone rather than as both signatures at once, which used to let a call written against the old signature compile against a value that no longer had it. The type itself is exported as `ExtendedSdk`.

`getSdk` and `extendSdk` now say in their doc comments what they build and how the merge behaves.
