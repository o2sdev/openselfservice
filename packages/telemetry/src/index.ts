import Configstore from 'configstore';
import { v4 as uuid } from 'uuid';

import { getMetadata } from './metadata';

const data = {
    metadata: getMetadata(),
    machineId: uuid(),
};

let config: Pick<Configstore, 'get'>;

try {
    config = new Configstore(`o2s`, data, { globalConfigPath: true });
} catch (_error) {
    config = {
        get: (key: string) => data[key as keyof typeof data],
    };
}

const metadata = (config.get('metadata') as ReturnType<typeof getMetadata>) || getMetadata();
const machineId = (config.get('machineId') as string) || uuid();

export const sendEvent = (moduleName: string, eventName: string, data?: unknown) => {
    try {
        const IS_DISABLED = process.env.TELEMETRY_DISABLED === 'true';

        if (IS_DISABLED) {
            return;
        }

        const event = {
            metadata,
            data,
        };

        const url = process.env.TELEMETRY_BASE_URL || 'http://telemetry.openselfservice.com';

        fetch(`${url}/event`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                machineId,
                moduleName,
                eventName,
                event,
            }),
        }).catch(() => {});
    } catch (error) {
        console.log('There was an error', error);
    }
};

export const flushEvents = async () => {
    try {
        const IS_DISABLED = process.env.TELEMETRY_DISABLED === 'true';

        if (IS_DISABLED) {
            return;
        }

        const url = process.env.TELEMETRY_BASE_URL || 'http://telemetry.openselfservice.com/';

        await fetch(`${url}/flush`, {
            method: 'POST',
        }).catch(() => {});
    } catch (error) {
        console.log('There was an error', error);
    }
};
