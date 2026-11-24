import { transformRenderBlocks } from './transform-render-blocks';
import * as fs from 'fs-extra';
import * as os from 'os';
import * as path from 'path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

const FILE_PATH = 'apps/frontend/src/blocks/renderBlocks.tsx';

const RENDER_BLOCKS = `import * as Faq from '@o2s/blocks.faq/frontend';
import * as TicketList from '@o2s/blocks.ticket-list/frontend';
import * as UserAccount from '@o2s/blocks.user-account/frontend';
// BLOCK IMPORT
import { CMS, Models } from '@o2s/framework/modules';

import { auth } from '@/auth';

import { routing } from '@/i18n';

import { onSignOut } from '../actions/signOut';

type BlockProps = Models.BlockProps.FullBlockProps<typeof routing>;

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    const session = await auth();
    return blocks.map((block) => BLOCK_REGISTRY[block.__typename]({ ...block, session }));
};

const BLOCK_REGISTRY = {
    FaqBlock: (blockProps) => <Faq.Renderer {...blockProps} />,
    TicketListBlock: (blockProps) => <TicketList.Renderer {...blockProps} />,
    UserAccountBlock: (blockProps) => <UserAccount.Renderer {...blockProps} onSignOut={onSignOut} />,
    // BLOCK REGISTER
};
`;

describe('transformRenderBlocks', () => {
    let projectDir: string;

    const writeFile = async (content: string) => {
        await fs.outputFile(path.join(projectDir, FILE_PATH), content, 'utf-8');
    };

    const readFile = () => fs.readFile(path.join(projectDir, FILE_PATH), 'utf-8');

    beforeEach(async () => {
        projectDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-o2s-app-render-blocks-'));
    });

    afterEach(async () => {
        await fs.remove(projectDir);
    });

    it('removes the import and registry entry of unselected blocks', async () => {
        await writeFile(RENDER_BLOCKS);

        await transformRenderBlocks(projectDir, ['faq', 'user-account']);

        const result = await readFile();
        expect(result).not.toContain('@o2s/blocks.ticket-list/frontend');
        expect(result).not.toContain('TicketListBlock');
        expect(result).toContain("import * as Faq from '@o2s/blocks.faq/frontend';");
        expect(result).toContain('UserAccountBlock');
    });

    it('keeps onSignOut while the user-account block is selected', async () => {
        await writeFile(RENDER_BLOCKS);

        await transformRenderBlocks(projectDir, ['faq', 'user-account']);

        expect(await readFile()).toContain("import { onSignOut } from '../actions/signOut';");
    });

    it('removes onSignOut together with the user-account block without leaving a double blank line', async () => {
        await writeFile(RENDER_BLOCKS);

        await transformRenderBlocks(projectDir, ['faq', 'ticket-list']);

        const result = await readFile();
        expect(result).not.toContain('onSignOut');
        expect(result).not.toContain('UserAccount');
        expect(result).toContain("import { routing } from '@/i18n';\n\ntype BlockProps");
        expect(result).not.toMatch(/\n\n\n/);
    });

    it('does not remove imports that are still used elsewhere in the file', async () => {
        await writeFile(
            RENDER_BLOCKS.replace(
                'const session = await auth();',
                'const session = await auth();\n    void onSignOut;',
            ),
        );

        await transformRenderBlocks(projectDir, ['faq']);

        expect(await readFile()).toContain("import { onSignOut } from '../actions/signOut';");
    });

    it('removes only the orphaned specifier from a multi-specifier import', async () => {
        await writeFile(
            RENDER_BLOCKS.replace(
                "import { onSignOut } from '../actions/signOut';",
                "import { onSignOut, signOutLabel } from '../actions/signOut';",
            ).replace('const session = await auth();', 'const session = await auth();\n    void signOutLabel;'),
        );

        await transformRenderBlocks(projectDir, ['faq']);

        expect(await readFile()).toContain("import { signOutLabel } from '../actions/signOut';");
    });

    it('does not touch unrelated imports', async () => {
        await writeFile(RENDER_BLOCKS);

        await transformRenderBlocks(projectDir, ['faq', 'ticket-list']);

        const result = await readFile();
        expect(result).toContain("import { CMS, Models } from '@o2s/framework/modules';");
        expect(result).toContain("import { auth } from '@/auth';");
        expect(result).toContain("import { routing } from '@/i18n';");
    });

    it('leaves the file untouched when every block is selected', async () => {
        await writeFile(RENDER_BLOCKS);

        await transformRenderBlocks(projectDir, ['faq', 'ticket-list', 'user-account']);

        expect(await readFile()).toBe(RENDER_BLOCKS);
    });
});
