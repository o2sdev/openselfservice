---
sidebar_position: 200
---

# Features

This page provides an overview of the features and capabilities provided by the Zendesk integration.

## Core functionality

The Zendesk integration implements the framework's `Tickets.Service` interface, providing ticket management functionality that works with the Zendesk Ticketing API.

## Features

The Zendesk integration provides:

- **Viewing individual tickets** - Retrieve full ticket details including comments and attachments
- **Listing tickets** - Get a list of tickets with filtering options (status, type, topic, date range)
- **Access to ticket comments** - View conversation history for each ticket
- **Attachment handling** - Access attachments from ticket comments
- **User-specific ticket access** - Users can only see their own tickets (matched by email)
- **Data normalization** - Automatic conversion of Zendesk data structures to the standard ticket model

## Supported TicketService Methods

The following table shows which methods from the base TicketService are currently supported by the Zendesk integration:

| Method        | Description                                       | Supported   |
| ------------- | ------------------------------------------------- | ----------- |
| getTicket     | Retrieve a single ticket by ID                    | ✓           |
| getTicketList | Retrieve a list of tickets with filtering options | ✓           |
| createTicket  | Create a new ticket                               | ✗ (planned) |

## Module Structure

The Zendesk integration is structured into several components:

### 1. API Client Generation

The integration uses an automated process to generate TypeScript types and API client methods from the Zendesk OpenAPI specification:

- **Source**: Fetches OpenAPI specification from `https://developer.zendesk.com/zendesk/oas.yaml`
- **Tool**: Uses `@hey-api/openapi-ts` to generate TypeScript types
- **Output**: Generated files are placed in `generated/zendesk` directory
- **Automation**: Scripts run automatically during `npm run prepare`

**Available scripts:**

```shell
# Fetch the latest OpenAPI specification
npm run fetch-oas

# Generate TypeScript types and API client
npm run generate-types
```

These scripts are automatically run during the package preparation phase, ensuring that the API client is always up-to-date with the latest Zendesk API.

### 2. Ticket Service

The `ZendeskTicketService` handles:

- **Authentication** - Configures API client with Base64-encoded token
- **User validation** - Verifies user email before ticket access
- **Ticket retrieval** - Fetches tickets, comments, and user information
- **Query building** - Constructs Zendesk Search API queries from filter parameters
- **Error handling** - Gracefully handles 404 errors and access restrictions

### 3. Data Normalization

The integration automatically converts Zendesk-specific data structures to the standard ticket model:

- Maps Zendesk fields to normalized ticket properties
- Converts status values (closed/solved → CLOSED, pending/hold → IN_PROGRESS, new/open → OPEN)
- Extracts custom fields and maps them to ticket properties
- Processes comments and attachments with author information
- Handles missing data with appropriate fallbacks

## Module Configuration

The integration exports the following components:

- **Service** - `ZendeskTicketService` implementing `Tickets.Service`
- **Module** - `ZendeskTicketModule` for NestJS dependency injection
- **Request** - Type definitions for request parameters
- **Model** - Type definitions for ticket models

The integration is configured with:

```typescript
{
  name: 'zendesk',
  service: ZendeskTicketService,
  imports: [HttpModule, Users.Module]
}
```

## Data Normalization

The integration maps Zendesk ticket data to the standard ticket model with the following transformations:

### Field Mapping

| Zendesk Field        | Normalized Field | Notes                                    |
| -------------------- |------------------|------------------------------------------|
| id                   | id               | Converted to string                      |
| created_at           | createdAt        | ISO date string                          |
| updated_at           | updatedAt        | ISO date string                          |
| status               | status           | Mapped according to status mapping       |
| subject              | properties       | Added as property with id 'subject'      |
| description          | properties       | Added as property with id 'description'  |
| custom_fields        | properties       | Mapped using `ZendeskFieldMapper` to readable names (see Custom Fields section below) |
| comments             | comments         | Mapped with author information           |
| comments.attachments | attachments      | Extracted from comments                  |

### Status Mapping

| Zendesk Status | Normalized Status | Notes                         |
| -------------- | ----------------- | ----------------------------- |
| closed, solved | CLOSED            | Ticket is resolved            |
| pending, hold  | IN_PROGRESS       | Ticket is being worked on     |
| new, open      | OPEN              | Default status                |
| (other)        | OPEN              | Fallback for unknown statuses |


### Custom Fields Mapping

Custom fields from Zendesk are mapped to readable names using the `ZendeskFieldMapper`. This provides a consistent, maintainable way to work with custom fields throughout the application.

**How it works:**

1. **Field Mapping Configuration**: Custom fields are defined in `ZendeskFieldMapper` with readable names and environment variable IDs:
   ```typescript
   // In zendesk-field.mapper.ts
   fieldMap = {
       machineName: process.env.ZENDESK_DEVICE_NAME_FIELD_ID,
       serialNumber: process.env.ZENDESK_SERIAL_NUMBER_FIELD_ID,
       maintenanceType: process.env.ZENDESK_MAINTENANCE_TYPE_FIELD_ID,
       // ... more fields
   }
   ```

2. **Reading Tickets**: When a ticket is retrieved from Zendesk, custom fields are automatically mapped to their readable names:
   - Custom field with ID `123456` → `machineName` (if configured in `ZendeskFieldMapper`)
   - Only fields with mappings in `ZendeskFieldMapper` are included
   - Fields without mappings are skipped

3. **CMS Integration**: To display custom fields in ticket details, add mappings in CMS:
   ```typescript
   // In CMS mapper (e.g., mocked, contentful, strapi)
   properties: {
       // ... standard fields
       machineName: 'Machine Name',
       serialNumber: 'Serial Number',
   }
   ```

**Adding a new custom field:**

To add support for a new custom field:

1. **Add environment variable**:
   ```env
   ZENDESK_NEW_FIELD_ID=789012
   ```

2. **Add to ZendeskFieldMapper** in `zendesk-field.mapper.ts`:
   ```typescript
   fieldMap = {
       // ... existing fields
       newField: process.env.ZENDESK_NEW_FIELD_ID 
           ? Number(process.env.ZENDESK_NEW_FIELD_ID) 
           : undefined,
   }
   ```

3. **Add CMS mappings** for all supported locales (in mocked, contentful, strapi mappers):
   ```typescript
   properties: {
       // ... existing fields
       newField: 'New Field Label',  // Add for each locale
   }
   ```

### Topic Field Mapping

The `topic` field is automatically set during ticket creation based on the `type` field provided in the ticket data. This ensures consistent categorization across different form types.

**How it works:**

When creating a ticket via the Zendesk integration:

1. The system compares the `type` (ticket form ID) with configured environment variables:
   - `ZENDESK_CONTACT_FORM_ID` → topic value: `CONTACT_US`
   - `ZENDESK_COMPLAINT_FORM_ID` → topic value: `COMPLAINT`
   - `ZENDESK_REQUEST_DEVICE_MAINTENANCE_FORM_ID` → topic value: `REQUEST_DEVICE_MAINTENANCE`

2. The matching topic value is automatically added to the ticket's fields

3. The topic is then stored in Zendesk using the `ZENDESK_TOPIC_FIELD_ID` custom field

**Example:**

```typescript
// Survey.js sends type (ticket form ID)
{
  type: 33406700504221,  // Matches ZENDESK_CONTACT_FORM_ID
  fields: { ... }
}

// Service automatically adds topic
{
  type: 33406700504221,
  fields: {
    topic: 'CONTACT_US',  // Automatically set
    ...
  }
}
```

**Important**: If the `type` doesn't match any configured form ID, the ticket creation will fail with a `BadRequestException`. This ensures that all tickets are properly categorized.

**Supported topic values:**
- `CONTACT_US` - General contact inquiries
- `COMPLAINT` - Customer complaints
- `REQUEST_DEVICE_MAINTENANCE` - Device maintenance requests

### Default Values and Fallbacks

The integration handles missing data with the following defaults:

- **Status**: `OPEN` (if status is unknown or missing)
- **Empty strings**: Used for missing string values (subject, description, etc.)
- **Comments**: `undefined` if no comments exist (not an empty array)
- **Attachments**: `undefined` if no attachments exist (not an empty array)
- **Author information**: Falls back to `author_id` as string if author cannot be fetched

### Author Mapping

When processing comments and attachments:

- The integration fetches author information for all unique author IDs
- Creates an `authorMap` to efficiently look up author details
- Falls back to `author_id` as a string if author information cannot be retrieved
- Each comment and attachment includes author name and email when available

### Attachment Extraction

Attachments are extracted from ticket comments (not from the main ticket object):

- Each attachment includes:
    - File name, URL, and size
    - Author information from the parent comment
    - Creation date from the parent comment
    - ARIA label for accessibility

## Query Building and Filtering

The integration converts framework filter parameters to Zendesk Search API queries:

### Parameter Mapping

| Framework Parameter | Zendesk Search Query | Notes                                    |
|---------------------|----------------------|------------------------------------------|
| status              | `status:{value}`     | Converted to lowercase                   |
| topic               | `tag:{value}`        | Maps to Zendesk tags                     |
| dateFrom            | `created>={iso_date}` | Converted to ISO format                  |
| dateTo              | `created<={iso_date}` | Converted to ISO format                  |
| offset              | `page`               | Calculated as `Math.floor(offset / limit) + 1` |
| limit               | `per_page`           | Default: 10                              |

### Base Query

All queries start with: `type:ticket requester:{user_email}`

This ensures that:

- Only tickets are returned (not other Zendesk objects)
- Users can only see tickets where they are the requester

### Pagination

Pagination is handled by converting `offset` and `limit` to Zendesk's `page` and `per_page`:

- **Page calculation**: `page = Math.floor(offset / limit) + 1`
- **Default values**: `page = 1`, `per_page = 10` (if limit not specified)

## Error Handling

The integration handles errors gracefully:

- **404 errors**: Returns `undefined` instead of throwing an error (for both tickets and comments)
- **Missing user email**: Throws `NotFoundException` with message "User email not found"
- **Access denied**: Returns `undefined` if requester email doesn't match user email (not a 403 error)
- **Missing requester_id**: Returns `undefined` if ticket has no requester
- **API errors**: Wraps errors with descriptive messages for debugging

## Security and Authorization

The integration implements the following security measures:

- **User email validation**: All ticket access requires a valid user email
- **Requester matching**: Users can only access tickets where their email matches the requester email
- **No cross-user access**: Tickets are filtered at the API level using Zendesk Search API
- **Token-based authentication**: Uses Base64-encoded API token for Zendesk API access
