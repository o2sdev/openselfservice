# @o2s/telemetry

Optional telemetry package for O2S CLI tools to collect anonymous usage data.

## Installation

```bash
npm install @o2s/telemetry
```

## Usage

### In CLI Tools

```typescript
import { sendEvent, flushEvents } from '@o2s/telemetry';

// Track events (appName, moduleName, eventName, optionalData)
await sendEvent('o2s', 'create-o2s-app', 'create-project');

// Flush events before process exit
await flushEvents();
```

### Opting Out

Users can opt out of telemetry by setting:

```bash
export TELEMETRY_DISABLED=true
```

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
