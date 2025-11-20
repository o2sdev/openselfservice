---
sidebar_position: 100
---

# Zendesk

This integration provides the integration with [Zendesk Ticketing module](https://developer.zendesk.com/api-reference/ticketing/introduction/), allowing users to view and manage their support tickets within your application.

## Requirements

To use the Zendesk integration, you need to set up the following environment variables:

```shell
# Required
ZENDESK_API_URL=https://your-subdomain.zendesk.com/api/v2
ZENDESK_API_TOKEN=base64_encoded_token

# Optional
ZENDESK_TOPIC_FIELD_ID=123456  # ID of the custom field that contains the ticket topic
```

The `ZENDESK_API_TOKEN` should be a Base64-encoded string of `email/token:api_token` where:

- `email/token` is the email address of the Zendesk admin account or "token"
- `api_token` is the API token generated in the Zendesk admin interface

## Module Structure

The Zendesk integration is structured into several components:

1. API client generation:
    - Automatically fetches the Zendesk OpenAPI specification
    - Generates TypeScript types and API client methods
    - Provides strongly-typed access to the Zendesk API

2. Ticket Service:
    - Handles authentication with Zendesk
    - Provides methods for retrieving tickets and ticket lists

3. Data Normalization:
    - Converts Zendesk-specific data structures to the standard ticket model
    - Maps status values, properties, comments, and attachments

## Features

The Zendesk integration provides:

- Viewing individual tickets with full details
- Listing tickets with filtering options (status, type, topic, date range)
- Access to ticket comments and conversation history
- Attachment handling
- User-specific ticket access (users can only see their own tickets)

### Supported TicketService Methods

The following table shows which methods from the base TicketService are currently supported by the Zendesk integration:

| Method        | Description                                       | Supported   |
| ------------- | ------------------------------------------------- |-------------|
| getTicket     | Retrieve a single ticket by ID                    | ✓           |
| getTicketList | Retrieve a list of tickets with filtering options | ✓           |
| createTicket  | Create a new ticket                               | ✗ (planned) |

## API Model Generation

The integration uses an automated process to generate TypeScript types and API client methods from the Zendesk OpenAPI specification:

Fetching the OpenAPI Specification:

```shell
npm run fetch-oas
```

Generating TypeScript Types:

```shell
npm run generate-types
```

These scripts are automatically run during the package preparation phase, ensuring that the API client is always up-to-date with the latest Zendesk API.

## Data Normalization

The integration maps Zendesk ticket data to the standard ticket model:

### Field Mapping

| Zendesk Field        | Normalized Field |
| -------------------- |------------------|
| id                   | id               |
| created_at           | createdAt        |
| updated_at           | updatedAt        |
| priority             | type             |
| status               | status           |
| subject              | properties       |
| description          | properties       |
| custom_fields        | properties       |
| comments             | comments         |
| comments.attachments | attachments      |

### Status Mapping

| Zendesk Status | Normalized Status |
| -------------- | ----------------- |
| closed, solved | CLOSED            |
| pending, hold  | IN_PROGRESS       |
| new, open      | OPEN              |

### Topic Handling

The integration can map a custom field to the ticket topic:

1. Set the `ZENDESK_TOPIC_FIELD_ID` environment variable to the ID of the custom field
2. The value of this field will be used as the ticket topic
3. If not set, the default topic is "GENERAL"

## Usage

The Zendesk integration is automatically available when installed in the API Harmonization server. It provides standard ticket endpoints:

- `GET /tickets` - List tickets with filtering options
- `GET /tickets/:id` - Get a specific ticket by ID

The integration handles authentication and ensures that users can only access their own tickets by matching the user's email with the ticket requester's email.
