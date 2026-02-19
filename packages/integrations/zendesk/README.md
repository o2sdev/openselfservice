# @o2s/integrations.zendesk

Zendesk integration for O2S, providing ticket management and support functionality.

The Zendesk integration connects O2S to both Zendesk Support (ticketing) and Zendesk Help Center (articles). For tickets: search by requester email, get single ticket, create tickets with attachments, and map custom fields. For articles: get article, list articles, categories, and full-text search via Help Center API. Ticket and article data are scoped to the logged-in user.

- **Tickets** – Search, create, view, attachments; custom field mapping
- **Articles** – Articles, categories, search (knowledge base)
- **Custom forms** – Contact, complaint, device maintenance forms via env vars
- **OpenAPI-generated clients** – Type-safe Zendesk API usage

Content editors manage tickets and articles in Zendesk. Developers configure `ZENDESK_API_URL`, `ZENDESK_API_TOKEN`, and optional custom field IDs.

## Installation

```bash
npm install @o2s/integrations.zendesk
```

## Configuration

Configure the integration via `@o2s/configs.integrations` in your `AppConfig`:

```typescript
import { Tickets } from '@o2s/configs.integrations';
import { ZendeskConfig } from '@o2s/integrations.zendesk/integration';

export const AppConfig: ApiConfig = {
    integrations: {
        tickets: ZendeskConfig.tickets,
    },
};
```

Or use the pre-configured integration from `@o2s/configs.integrations`:

```typescript
import { Tickets } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        tickets: Tickets.TicketsIntegrationConfig,
    },
};
```

## Environment Variables

### Required

- `ZENDESK_API_URL` - Your Zendesk API URL (e.g., `https://your-domain.zendesk.com`)
- `ZENDESK_API_TOKEN` - Zendesk API token for authentication

### Optional

The following environment variables are optional and used for custom field mapping:

- `ZENDESK_CONTACT_FORM_ID` - Contact form ID
- `ZENDESK_COMPLAINT_FORM_ID` - Complaint form ID
- `ZENDESK_REQUEST_DEVICE_MAINTENANCE_FORM_ID` - Device maintenance form ID
- `ZENDESK_TOPIC_FIELD_ID` - Topic custom field ID
- `ZENDESK_TERMS_ACCEPTANCE_FIELD_ID` - Terms acceptance field ID
- `ZENDESK_NEWSLETTER_CONSENT_FIELD_ID` - Newsletter consent field ID
- `ZENDESK_MARKETING_CONSENT_FIELD_ID` - Marketing consent field ID
- `ZENDESK_EMAIL_FIELD_ID` - Email custom field ID
- `ZENDESK_INVOICE_NUMBER_FIELD_ID` - Invoice number field ID
- `ZENDESK_DEVICE_NAME_FIELD_ID` - Device name field ID
- `ZENDESK_SERIAL_NUMBER_FIELD_ID` - Serial number field ID
- `ZENDESK_MAINTENANCE_TYPE_FIELD_ID` - Maintenance type field ID
- `ZENDESK_MAINTENANCE_PREFERRED_DATE_FIELD_ID` - Preferred maintenance date field ID
- `ZENDESK_ADDITIONAL_NOTES_FIELD_ID` - Additional notes field ID
- `ZENDESK_CONTACT_FIELD_ID` - Contact information field ID
- `ZENDESK_ISSUE_DATE_FIELD_ID` - Issue date field ID
- `ZENDESK_COMPANY_NAME_FIELD_ID` - Company name field ID
- `ZENDESK_FIRST_NAME_FIELD_ID` - First name field ID
- `ZENDESK_LAST_NAME_FIELD_ID` - Last name field ID
- `ZENDESK_PHONE_FIELD_ID` - Phone field ID
- `ZENDESK_ADDRESS_FIELD_ID` - Address field ID
- `ZENDESK_INQUIRY_TYPE_FIELD_ID` - Inquiry type field ID
- `ZENDESK_PRODUCT_CATEGORY_FIELD_ID` - Product category field ID
- `ZENDESK_PREFERRED_CONTACT_METHOD_FIELD_ID` - Preferred contact method field ID

## Example .env

```bash
ZENDESK_API_URL=https://your-domain.zendesk.com
ZENDESK_API_TOKEN=your-api-token-here
ZENDESK_CONTACT_FORM_ID=12345
ZENDESK_TOPIC_FIELD_ID=67890
```

## Features

- Ticket creation and management
- Ticket comments and replies
- User lookup and management
- Custom field mapping
- Support for multiple ticket forms

## Related Packages

- `@o2s/blocks.ticket-list` - Display list of tickets
- `@o2s/blocks.ticket-details` - Display ticket details
- `@o2s/configs.integrations` - Integration configuration

## About Integrations in O2S

Integrations are adapters that connect O2S to external backend services. They handle API communication and normalize data from various backend services into an API-agnostic format. The frontend app communicates only with the API Harmonization server, never directly with backend services, enabling you to swap integrations without breaking the frontend.

**Documentation** - For Zendesk integration, see both areas:
- [Zendesk Tickets](https://www.openselfservice.com/docs/integrations/tickets/zendesk/overview)
- [Zendesk Articles](https://www.openselfservice.com/docs/integrations/articles/zendesk/overview)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
