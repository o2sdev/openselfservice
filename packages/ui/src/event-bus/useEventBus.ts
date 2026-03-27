import { useEffect } from 'react';

import { O2SEventMap, eventBus } from './event-bus';

export function useEventBus<K extends keyof O2SEventMap>(event: K, handler: (payload: O2SEventMap[K]) => void) {
    useEffect(() => {
        eventBus.on(event, handler);
        return () => {
            eventBus.off(event, handler);
        };
    }, [event, handler]);
}
