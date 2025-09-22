import { useSession } from 'next-auth/react';

import { Models } from '@o2s/framework/modules';

import { updateOrganization as updateOrganizationAuth } from '@o2s/integrations.mocked/auth.updateOrganization';

export async function updateOrganization(session: ReturnType<typeof useSession>, customer: Models.Customer.Customer) {
    return updateOrganizationAuth(session, customer);
}
