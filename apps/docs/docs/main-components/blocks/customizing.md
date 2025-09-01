---
sidebar_position: 300
---

# Customizing

While each block can have some basic configuration (like choosing a UI variant via props, or providing different text labels), that might not be enough for you. For cases where you'd like to perform more deep customizations, like adding new elements or modifying the layout, there is also the possibility to completely take over the ownership of the block - you can easily move its entire source code to your own project.

## Ejecting a block

To _eject_ a block from the version that is published to NPM, you can run a dedicated script:

```shell
npm run eject-block
```

which will then prompt you for to the blocks you want to take over. Once the process is done, the code of these blocks will be copied to your project into the `packages/blocks` folder, and automatically install their dependencies.

Once you restart the app, it will now use the ejected version of these blocks, instead of ones installed earlier via NPM.

## Modifying a block

Since you now control the entire source code of the block, customizing it is easy. You can make any changes you want directly in that block, just like you'd do that when you create a new block from scratch yourself.

These changes may include all parts of the block - the API Harmonization, the Frontend, and SDK areas.

## Upgrades & versioning

This comes with a slight drawback, however - after you eject a block, you can no longer easily upgrade it to a newer version that might be published to the NPM registry. These new versions may include bugfixes or new features that you also might want.

You can still achieve that, by simply running the eject script once more - it will **overwrite your own changes** to the block. However, assuming you are using any kind of code versioning, you can then pick and choose the changes you want to keep.
