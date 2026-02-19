# @o2s/telemetry

Optional telemetry package for O2S CLI tools to collect anonymous usage data.

## Installation

```bash
npm install @o2s/telemetry
```

## Usage

### In CLI Tools

```typescript
import { Telemetry } from '@o2s/telemetry';

const telemetry = new Telemetry({
    name: 'my-cli-tool',
    version: '1.0.0',
});

// Track events
telemetry.track('command_executed', {
    command: 'create',
    template: 'default',
});

// Track errors
telemetry.track('error', {
    error: error.message,
});
```

### Opting Out

Users can opt out of telemetry by setting:

```bash
export O2S_TELEMETRY_DISABLED=1
```

Or by answering "No" when prompted during CLI tool execution.

## What Data Is Collected

- Command executed
- Command options/flags
- Error messages (anonymized)
- Execution time
- System information (OS, Node version)

## Privacy

- All data is anonymous
- No personal information is collected
- Data helps improve O2S tools
- Users can opt out at any time

## Related Packages

- `create-o2s-app` - Uses telemetry for usage tracking
