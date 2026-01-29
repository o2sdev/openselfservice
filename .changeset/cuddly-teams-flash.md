---
'@o2s/integrations.contentful-cms': minor
'@o2s/integrations.strapi-cms': minor
'@o2s/blocks.ticket-details': minor
'@o2s/blocks.ticket-recent': minor
'@o2s/integrations.zendesk': minor
'@o2s/integrations.mocked': minor
'@o2s/blocks.ticket-list': minor
'@o2s/modules.surveyjs': minor
'@o2s/api-harmonization': minor
'@o2s/framework': minor
'@o2s/docs': minor
---

Added ticket creation functionality to the Zendesk integration. Users can now create tickets via POST /tickets with attachments and custom fields. Added custom field mapping from Survey.js format to Zendesk custom fields via new zendesk-field.mapper. Updated table columns on TicketList component to display: ticket type (topic), status, and last updated date. Added display of custom field values from ticket properties on TicketDetails. Updated mapper mocks in cms
