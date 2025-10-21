import { v4 as uuid } from 'uuid';

import { getMetadata } from './metadata';

/**
 * Telemetry class that handles configuration and event sending
 */
class Telemetry {
    private metadata!: ReturnType<typeof getMetadata>;
    private machineId!: string;
    private readonly config!: Promise<void>;

    constructor() {
        // Don't initialize metadata and machineId here
        // They will be loaded from configstore in initConfig
        this.config = this.initConfig();
    }

    /**
     * Initialize configuration with dynamic import of configstore
     * @returns Promise that resolves when configuration is loaded
     */
    private async initConfig(): Promise<void> {
        try {
            // Dynamically import configstore
            const { default: Configstore } = await import('configstore');

            // Create configstore instance with empty default values
            const config = new Configstore(`o2s`, {}, { globalConfigPath: true });

            // Get metadata and machineId from config
            this.metadata = config.get('metadata') as ReturnType<typeof getMetadata>;
            this.machineId = config.get('machineId') as string;

            // If values don't exist in configstore, set them with default values and save to configstore
            if (!this.metadata) {
                this.metadata = getMetadata();
                // Only write to configstore if we successfully got metadata
                if (this.metadata) {
                    config.set('metadata', this.metadata);
                }
            }

            if (!this.machineId) {
                this.machineId = uuid();
                config.set('machineId', this.machineId);
            }
        } catch (_error) {
            // If configstore fails, use default values
            this.metadata = getMetadata();
            this.machineId = uuid();

            // Log error in development environment
            if (process.env.NODE_ENV === 'development') {
                console.debug('Telemetry config initialization error:', _error);
            }
        }
    }

    /**
     * Send a telemetry event
     */
    public async sendEvent(appName: string, moduleName: string, eventName: string, data?: unknown) {
        await this.config;

        // Read environment variables at method call time, not class instantiation time
        // This ensures we always have the latest values, as they might not be available when the class is instantiated
        const isDisabled = process.env.TELEMETRY_DISABLED === 'true';
        if (isDisabled) {
            return;
        }

        const event = {
            metadata: this.metadata,
            data,
        };

        try {
            // Read URL at method call time to ensure we have the latest value
            const url = process.env.TELEMETRY_BASE_URL || 'http://telemetry.openselfservice.com';
            fetch(`${url}/event`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    machineId: this.machineId,
                    appName,
                    moduleName,
                    eventName,
                    event,
                }),
            }).catch((error) => {
                // Silent fail, but log in debug environments
                if (process.env.NODE_ENV === 'development') {
                    console.debug('Telemetry event send failed:', error);
                }
            });
        } catch (_error) {
            // Silent fail, but log in debug environments
            if (process.env.NODE_ENV === 'development') {
                console.debug('Telemetry event send error:', _error);
            }
        }
    }

    /**
     * Flush telemetry events
     */
    public async flushEvents() {
        await this.config;

        // Read environment variables at method call time, not class instantiation time
        // This ensures we always have the latest values, as they might not be available when the class is instantiated
        const isDisabled = process.env.TELEMETRY_DISABLED === 'true';
        if (isDisabled) {
            return;
        }

        try {
            // Read URL at method call time to ensure we have the latest value
            const url = process.env.TELEMETRY_BASE_URL || 'http://telemetry.openselfservice.com';
            await fetch(`${url}/flush`, {
                method: 'POST',
            }).catch((error) => {
                // Silent fail, but log in debug environments
                if (process.env.NODE_ENV === 'development') {
                    console.debug('Telemetry flush failed:', error);
                }
            });
        } catch (_error) {
            // Silent fail, but log in debug environments
            if (process.env.NODE_ENV === 'development') {
                console.debug('Telemetry flush error:', _error);
            }
        }
    }
}

// Create a singleton instance
const telemetryInstance = new Telemetry();

/**
 * Send a telemetry event
 * @param appName - The name of the app sending the event
 * @param moduleName - The name of the module sending the event
 * @param eventName - The name of the event
 * @param data - Optional data to include with the event
 * @returns Promise that resolves when the event is sent
 */
export const sendEvent = async (
    appName: string,
    moduleName: string,
    eventName: string,
    data?: unknown,
): Promise<void> => {
    return telemetryInstance.sendEvent(appName, moduleName, eventName, data);
};

/**
 * Flush telemetry events
 * @returns Promise that resolves when events are flushed
 */
export const flushEvents = async (): Promise<void> => {
    return telemetryInstance.flushEvents();
};
