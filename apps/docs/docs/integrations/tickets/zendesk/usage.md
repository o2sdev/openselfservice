---
sidebar_position: 300
---

# Usage

This page provides examples and API reference for using the Zendesk integration.

## API Endpoints

The Zendesk integration is automatically available when installed in the API Harmonization server. It provides standard ticket endpoints that follow the framework's ticket API specification.

### List Tickets

Retrieve a list of tickets with optional filtering.

**Endpoint:** `GET /tickets`

**Query Parameters:**

| Parameter | Type   | Description                                         | Required |
| --------- | ------ | --------------------------------------------------- | -------- |
| status    | string | Filter by ticket status (OPEN, IN_PROGRESS, CLOSED) | No       |
| type      | string | Filter by ticket type/priority                      | No       |
| topic     | string | Filter by ticket topic                              | No       |
| dateFrom  | string | Filter tickets created from this date (ISO format)  | No       |
| dateTo    | string | Filter tickets created until this date (ISO format) | No       |
| offset    | number | Pagination offset                                   | No       |
| limit     | number | Number of tickets per page (default: 10)            | No       |

**Example Request:**

```bash
GET /tickets?status=OPEN&limit=20&offset=0
```

**Example Response:**

```json
{
    "total": 42,
    "data": [
        {
            "id": "12345",
            "createdAt": "2024-01-15T10:30:00Z",
            "updatedAt": "2024-01-16T14:20:00Z",
            "topic": "BILLING",
            "type": "HIGH",
            "status": "OPEN",
            "properties": [
                {
                    "id": "subject",
                    "value": "Billing question about invoice #1234"
                },
                {
                    "id": "description",
                    "value": "I have a question about my recent invoice..."
                }
            ],
            "comments": [
                {
                    "author": {
                        "name": "John Doe",
                        "email": "john@example.com"
                    },
                    "date": "2024-01-15T10:30:00Z",
                    "content": "Initial ticket description"
                }
            ],
            "attachments": []
        }
    ]
}
```

### Get Single Ticket

Retrieve a specific ticket by ID with full details including comments and attachments.

**Endpoint:** `GET /tickets/:id`

**Path Parameters:**

| Parameter | Type   | Description   | Required |
| --------- | ------ | ------------- | -------- |
| id        | string | The ticket ID | Yes      |

**Example Request:**

```bash
GET /tickets/12345
```

**Example Response:**

```json
{
    "id": "12345",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-16T14:20:00Z",
    "topic": "BILLING",
    "type": "HIGH",
    "status": "OPEN",
    "properties": [
        {
            "id": "subject",
            "value": "Billing question about invoice #1234"
        },
        {
            "id": "description",
            "value": "I have a question about my recent invoice..."
        },
        {
            "id": "custom_field_123456",
            "value": "Some custom field value"
        }
    ],
    "comments": [
        {
            "author": {
                "name": "John Doe",
                "email": "john@example.com"
            },
            "date": "2024-01-15T10:30:00Z",
            "content": "Initial ticket description"
        },
        {
            "author": {
                "name": "Support Agent",
                "email": "support@company.com"
            },
            "date": "2024-01-16T14:20:00Z",
            "content": "Thank you for contacting us. We're looking into this..."
        }
    ],
    "attachments": [
        {
            "name": "invoice.pdf",
            "url": "https://zendesk.com/attachments/invoice.pdf",
            "size": 245760,
            "author": {
                "name": "John Doe",
                "email": "john@example.com"
            },
            "date": "2024-01-15T10:30:00Z",
            "ariaLabel": "invoice.pdf"
        }
    ]
}
```

### Create Ticket

Create a new ticket with attachments and custom fields.

**Endpoint:** `POST /tickets`

**Body Parameters:**

| Parameter   | Type                    | Required | Description                                    |
| ----------- | ----------------------- | -------- | ---------------------------------------------- |
| title       | string                  | No       | Subject of the ticket                          |
| description | string                  | Yes      | Detailed description (first comment body)      |
| type        | number                  | Yes      | Ticket form ID (must match configured form ID) |
| attachments | TicketAttachmentInput[] | No       | Array of file attachments                      |
| fields      | object                  | No       | Custom fields for the ticket                   |

**Example Request:**

```bash
POST /tickets
Authorization: Bearer {token}
Content-Type: application/json

{
    "title": "Device maintenance request",
    "description": "My device needs servicing",
    "type": 789012,
    "fields": {
        "machineName": "Device-001",
        "maintenanceType": "Repair"
    }
}
```

**Example Response:**

```json
{
    "id": "54321",
    "createdAt": "2024-01-20T10:00:00Z",
    "updatedAt": "2024-01-20T10:00:00Z",
    "topic": "CONTACT_US",
    "type": "NORMAL",
    "status": "OPEN",
    "properties": [
        {
            "id": "subject",
            "value": "Device maintenance request"
        },
        {
            "id": "description",
            "value": "My device needs servicing"
        }
    ]
}
```

## Authentication

All ticket endpoints require authentication. The integration uses the `Authorization` header to identify the current user.

**Authorization Header:**

```
Authorization: Bearer {your_auth_token}
```

The integration:

1. Extracts the user from the authorization token
2. Validates that the user has an email address
3. Filters tickets to only show those where the user's email matches the ticket requester's email

## User Access Control

The integration ensures that users can only access their own tickets:

- **Email matching**: Tickets are filtered by matching the authenticated user's email with the ticket requester's email
- **Search query**: The Zendesk Search API query includes `requester:{user_email}` to enforce this at the API level
- **Access denied**: If a user tries to access a ticket that doesn't belong to them, the API returns `undefined` (not an error)

**Example:**

If user `john@example.com` is authenticated:

- ✅ Can see tickets where requester email is `john@example.com`
- ❌ Cannot see tickets where requester email is `jane@example.com`
- ❌ Returns `undefined` (404) if trying to access a ticket by ID that doesn't belong to them

## Filtering Examples

### Filter by Status

Get all open tickets:

```bash
GET /tickets?status=OPEN
```

Get all closed tickets:

```bash
GET /tickets?status=CLOSED
```

### Filter by Type/Priority

Get high priority tickets:

```bash
GET /tickets?type=HIGH
```

### Filter by Topic

Get all billing-related tickets:

```bash
GET /tickets?topic=BILLING
```

### Filter by Date Range

Get tickets created in January 2024:

```bash
GET /tickets?dateFrom=2024-01-01T00:00:00Z&dateTo=2024-01-31T23:59:59Z
```

### Combined Filters

Get open, high-priority billing tickets from the last week:

```bash
GET /tickets?status=OPEN&type=HIGH&topic=BILLING&dateFrom=2024-01-08T00:00:00Z
```

### Pagination

Get the second page of results (10 tickets per page):

```bash
GET /tickets?limit=10&offset=10
```

Get 25 tickets starting from offset 50:

```bash
GET /tickets?limit=25&offset=50
```

## Error Responses

### User Email Not Found

**Status:** `404 Not Found`

**Response:**

```json
{
    "statusCode": 404,
    "message": "User email not found"
}
```

This occurs when:

- The user is not authenticated
- The authenticated user doesn't have an email address

### Ticket Not Found

**Status:** `200 OK` (returns `undefined` in response body)

The integration returns `undefined` (not an error) when:

- The ticket ID doesn't exist
- The ticket exists but doesn't belong to the authenticated user
- The ticket has no requester_id

### API Errors

**Status:** `500 Internal Server Error`

**Response:**

```json
{
    "statusCode": 500,
    "message": "Failed to fetch tickets: {error details}"
}
```

This occurs when:

- Zendesk API is unavailable
- Network errors occur
- Invalid API credentials

## Best Practices

### 1. Handle Undefined Responses

Always check if the response is `undefined` before accessing ticket properties:

```typescript
const ticket = await getTicket(id);
if (!ticket) {
    // Handle ticket not found or access denied
    return;
}
// Use ticket safely
```

### 2. Use Pagination

For large ticket lists, always use pagination:

```typescript
const tickets = await getTicketList({
    limit: 20,
    offset: 0,
});

// Load more tickets
const moreTickets = await getTicketList({
    limit: 20,
    offset: 20,
});
```

### 3. Filter at the API Level

Use query parameters to filter tickets rather than filtering client-side:

```typescript
// ✅ Good: Filter at API level
const openTickets = await getTicketList({ status: 'OPEN' });

// ❌ Bad: Fetch all and filter client-side
const allTickets = await getTicketList();
const openTickets = allTickets.data.filter(t => t.status === 'OPEN');
```

### 4. Handle Missing Data

The integration uses fallbacks for missing data, but always handle edge cases:

```typescript
const ticket = await getTicket(id);
if (ticket) {
    const subject = ticket.properties.find((p) => p.id === 'subject')?.value || 'No subject';
    const comments = ticket.comments || [];
    const attachments = ticket.attachments || [];
}
```

### 5. Cache Ticket Lists

Consider caching ticket lists to reduce API calls:

```typescript
// Cache tickets for 5 minutes
const cacheKey = `tickets:${userEmail}:${status}`;
const cached = await cache.get(cacheKey);
if (cached) {
    return cached;
}

const tickets = await getTicketList({ status });
await cache.set(cacheKey, tickets, 300); // 5 minutes
```

## Integration with Frontend

The Zendesk integration works seamlessly with the O2S frontend SDK:

```typescript
import { sdk } from '@/api/sdk';

// Get ticket list
const tickets = await sdk.tickets.getTicketList({
    status: 'OPEN',
    limit: 20,
});

// Get single ticket
const ticket = await sdk.tickets.getTicket({ id: '12345' });
```

The SDK automatically handles:

- Authentication headers
- Error handling
- Response normalization
- Type safety
