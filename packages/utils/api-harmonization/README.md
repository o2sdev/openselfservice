# @o2s/utils.api-harmonization

Utility functions for O2S API Harmonization layer, including JWT and date helpers.

## Installation

```bash
npm install @o2s/utils.api-harmonization
```

## Usage

### JWT Utilities

```typescript
import { Utils } from '@o2s/utils.api-harmonization';

// Decode JWT token (authorization header string)
const decoded = Utils.Auth.decodeToken(authorization);

// Extract user roles from decoded JWT
const roles = Utils.Auth.extractUserRolesFromJwt(decoded);
```

### Date Utilities

```typescript
import { Utils } from '@o2s/utils.api-harmonization';

// Format date relative to today (e.g. "2:30 PM Today", "Yesterday")
const formatted = Utils.Date.formatDateRelative(date, locale, todayLabel, yesterdayLabel, timezone);

// Format time
const time = Utils.Date.formatTime(date, locale, timezone);
```

## Peer Dependencies

- `jsonwebtoken` ^9.0.2
- `dayjs` ^1.11.13

## Related Packages

- `@o2s/framework` - Core framework
- `@o2s/utils.frontend` - Frontend utilities
