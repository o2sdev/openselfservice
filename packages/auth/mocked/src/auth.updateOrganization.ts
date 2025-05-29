import { useSession } from 'next-auth/react';

import { Models } from '@o2s/framework/modules';

export async function updateOrganization(session: ReturnType<typeof useSession>, customer: Models.Customer.Customer) {
    await session.update({
        customer,
    });

    window.location.reload();
}
