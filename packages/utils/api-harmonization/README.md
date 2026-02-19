# @o2s/utils.api-harmonization

Utility functions for O2S API Harmonization layer, including JWT and date helpers.

## Installation

```bash
npm install @o2s/utils.api-harmonization
```

## Usage

### JWT Utilities

```typescript
import { decodeJwt, getUserIdFromToken } from '@o2s/utils.api-harmonization';

// Decode JWT token
const decoded = decodeJwt(token);

// Extract user ID from token
const userId = getUserIdFromToken(token);
```

### Date Utilities

```typescript
import { formatDate, parseDate } from '@o2s/utils.api-harmonization';

// Format date
const formatted = formatDate(date, 'YYYY-MM-DD');

// Parse date string
const parsed = parseDate(dateString);
```

## Peer Dependencies

- `jsonwebtoken` ^9.0.2
- `dayjs` ^1.11.13

## Related Packages

- `@o2s/framework` - Core framework
- `@o2s/utils.frontend` - Frontend utilities
