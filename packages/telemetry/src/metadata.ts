import ci from 'ci-info';
import isDocker from 'is-docker';
import * as os from 'node:os';

export const getMetadata = () => {
    const cpus = os.cpus();

    return {
        node_version: process.version,
        platform: os.platform(),
        release: os.release(),
        cpus: (cpus && cpus.length > 0 && cpus[0]?.model) || undefined,
        is_ci: ci.isCI,
        ci_name: ci.name,
        arch: os.arch(),
        docker: isDocker(),
    };
};
