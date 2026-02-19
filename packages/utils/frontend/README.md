# @o2s/utils.frontend

Utility functions for O2S frontend applications, including JWT and date helpers.

## Installation

```bash
npm install @o2s/utils.frontend
```

## Usage

### JWT Utilities

```typescript
import { decodeJwt, getUserIdFromToken } from '@o2s/utils.frontend';

// Decode JWT token
const decoded = decodeJwt(token);

// Extract user ID from token
const userId = getUserIdFromToken(token);
```

### Date Utilities

```typescript
import { formatDate, parseDate } from '@o2s/utils.frontend';

// Format date
const formatted = formatDate(date, 'YYYY-MM-DD');

// Parse date string
const parsed = parseDate(dateString);
```

### String Utilities

```typescript
import { replaceLinks } from '@o2s/utils.frontend';

// Replace URLs in text with links
const textWithLinks = replaceLinks(text);
```

## Peer Dependencies

- `jsonwebtoken` ^9.0.2
- `dayjs` ^1.11.13

## Related Packages

- `@o2s/framework` - Core framework
- `@o2s/utils.api-harmonization` - API harmonization utilities
