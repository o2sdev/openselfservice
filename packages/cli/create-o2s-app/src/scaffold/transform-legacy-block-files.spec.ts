import { transformAppModule } from './transform-app-module';
import { transformPageModel } from './transform-page-model';
import * as fs from 'fs-extra';
import * as os from 'os';
import * as path from 'path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

// Block registration used by templates that predate `blocks.config.ts`.

const APP_MODULE_PATH = 'apps/api-harmonization/src/app.module.ts';
const PAGE_MODEL_PATH = 'apps/api-harmonization/src/modules/page/page.model.ts';

const APP_MODULE = `import * as Faq from '@o2s/blocks.faq/api-harmonization';
import * as TicketList from '@o2s/blocks.ticket-list/api-harmonization';

@Module({
    imports: [
        Faq.Module.register(AppConfig),
        TicketList.Module.register(AppConfig),
    ],
})
export class AppModule {}
`;

const PAGE_MODEL = `import * as Faq from '@o2s/blocks.faq/api-harmonization';
import * as TicketList from '@o2s/blocks.ticket-list/api-harmonization';

export type Blocks =
    | Faq.Model.FaqBlock['__typename']
    | TicketList.Model.TicketListBlock['__typename'];
`;

describe('legacy block registration transforms', () => {
    let projectDir: string;

    beforeEach(async () => {
        projectDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-o2s-app-legacy-'));
    });

    afterEach(async () => {
        await fs.remove(projectDir);
    });

    it('transformAppModule removes the import and module registration of unselected blocks', async () => {
        await fs.outputFile(path.join(projectDir, APP_MODULE_PATH), APP_MODULE, 'utf-8');

        await transformAppModule(projectDir, ['faq']);

        const result = await fs.readFile(path.join(projectDir, APP_MODULE_PATH), 'utf-8');
        expect(result).not.toContain('TicketList');
        expect(result).toContain('Faq.Module.register(AppConfig),');
    });

    it('transformPageModel removes the import and union member of unselected blocks', async () => {
        await fs.outputFile(path.join(projectDir, PAGE_MODEL_PATH), PAGE_MODEL, 'utf-8');

        await transformPageModel(projectDir, ['ticket-list']);

        const result = await fs.readFile(path.join(projectDir, PAGE_MODEL_PATH), 'utf-8');
        expect(result).not.toContain('Faq');
        expect(result).toContain("| TicketList.Model.TicketListBlock['__typename'];");
    });

    it('both transforms skip files that do not exist', async () => {
        await expect(transformAppModule(projectDir, ['faq'])).resolves.toBeUndefined();
        await expect(transformPageModel(projectDir, ['faq'])).resolves.toBeUndefined();
    });
});
