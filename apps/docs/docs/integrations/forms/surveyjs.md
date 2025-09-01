---
sidebar_position: 100
---

# SurveyJS

This integration provides a full integration with [SurveyJS](https://surveyjs.io/), a powerful JavaScript library for creating dynamic forms and surveys. Unlike other integrations located in `packages/integrations`, SurveyJS is implemented as a separate module that can be added to the API Harmonization server.

## Requirements

To use it, you must install it into the API Harmonization server by running:

```shell
npm install @o2s/modules.surveyjs --workspace=@o2s/api --workspace=@o2s/frontend
```

This module provides both server-side and client-side components:

- **Server-side**: Handles form data fetching, processing, and submission
- **Client-side**: Provides React components for rendering and interacting with forms

## Module Structure

The SurveyJS module is structured into three main parts:

1. **API Harmonization**: Server-side integration that provides:

    - Controllers for handling HTTP requests
    - Services for business logic
    - Data models and mappers
    - Form submission and validation

2. **Frontend**: Client-side integration that provides:

    - React components for rendering surveys
    - Form elements and question types
    - Submission handling

3. **SDK**: Software development kit that provides:
    - Helper functions for working with SurveyJS
    - Integration utilities

## Features

The SurveyJS module provides:

- Dynamic form creation based on JSON schemas
- Form validation
- Conditional logic for questions
- Multi-page surveys
- Various question types (text, multiple choice, rating, etc.)
- Form submission handling
- Integration with the ticket system

## Usage

### API Harmonization server

The API Harmonization part of the SurveyJS module provides a comprehensive backend service for managing surveys and handling form submissions.

```typescript
import { SurveyJSModule } from '@o2s/modules.surveyjs/api-harmonization';

@Module({
  imports: [
    SurveyJSModule
  ],
})
export class AppModule {}
````

The service provides a method to retrieve surveys by their code:

```typescript
// Get a survey by its code
surveyjsService.getSurvey({ code: 'contact-form' })
```

This method:
1. Retrieves the survey metadata from the CMS
2. Fetches the survey schema from the SurveyJS service
3. Maps the response to a standardized format

The form submission process is handled by the `submitSurvey` method, which provides:

1. **Authentication and Authorization**:
    - Validates user access based on JWT tokens
    - Checks if the user has the required roles to submit the form

2. **Validation**:
    - Validates the submitted data against the survey schema
    - Ensures all required fields are filled and constraints are met

3. **Flexible Submission Destinations**:
    - Supports multiple submission destinations configured per survey
    - Currently supports submission to SurveyJS backend, but other targets can be easily added
    - Extensible for additional destinations (e.g., email, database, third-party services)

4. **Error Handling**:
    - Provides detailed error messages for validation failures
    - Logs submission errors for troubleshooting

```typescript title="Example usage"
// Submit a survey
surveyjsService.submitSurvey({
  code: 'contact-form',
  surveyPayload: {
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello, world!'
  }
}, 'Bearer token123');
```

The submission process follows these steps:

1. Retrieve the survey configuration from the CMS
2. Check user authorization based on required roles
3. Validate the submitted data against the survey schema
4. Process the submission to configured destinations
5. Return success or detailed error information

### Frontend App

```typescript
import { Survey } from '@o2s/modules.surveyjs/frontend';
import { useGlobalContext } from '@o2s/ui/providers/GlobalProvider';

function MyComponent() {
  const { labels } = useGlobalContext();

  return (
    <Survey
      code="contact-form"
      labels={labels}
      locale="en"
      accessToken="optional-access-token"
    />
  );
}
```

The `Survey` component requires the following props:

- **code** (string, required): The identifier for the survey to be displayed
- **labels** (object, required): Labels for error messages, typically obtained from the global context
- **locale** (string, required): The language/locale setting (e.g., "en", "de")
- **accessToken** (string, optional): Authentication token for API access if required
