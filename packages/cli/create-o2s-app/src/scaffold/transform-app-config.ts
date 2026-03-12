import kleur from 'kleur';

// Warns about framework modules that have no integration configured.
// When mocked is not selected and a module has no real integration, the build
// will fail because the model file still imports from the deleted mocked package.
// Phase 3 will implement full app.config.ts transformation to remove unconfigured modules.
export const warnUnconfiguredModules = (uncoveredModules: string[]): void => {
    if (uncoveredModules.length === 0) {
        return;
    }

    console.warn();
    console.warn(kleur.yellow().bold('Warning: The following framework modules have no integration configured:'));
    for (const module of uncoveredModules) {
        console.warn(kleur.yellow(`  - ${module}`));
    }
    console.warn();
    console.warn(
        kleur.red('These modules still reference @o2s/integrations.mocked which was not included in your project.'),
    );
    console.warn(kleur.red('The project build will fail until you configure these modules manually.'));
    console.warn('To fix: update packages/configs/integrations/src/models/<module>.ts to use your integration.');
    console.warn();
};
