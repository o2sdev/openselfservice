import { delay } from 'rxjs';

// fake delay on mocked responses to simulate network delays
export const responseDelay = <T>() => {
    const isEnabled = process.env.MOCKED_INTEGRATION_DELAYS_ENABLED === 'true';
    return delay<T>(isEnabled ? Math.random() * 200 + 100 : 0);
};
