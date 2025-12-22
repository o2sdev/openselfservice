---
sidebar_position: 200
---

# Features

This document provides an overview of features supported by the SurveyJS integration.

## Overview

| Feature                                                 | Status | Notes                                                      |
| ------------------------------------------------------- | ------ | ---------------------------------------------------------- |
| [Dynamic Form Creation](#dynamic-form-creation)         | ✅     | Forms created from JSON schemas stored in SurveyJS service |
| [Form Validation](#form-validation)                     | ✅     | Client-side and server-side validation                     |
| [Conditional Logic](#conditional-logic)                 | ✅     | Questions can be shown/hidden based on conditions          |
| [Multi-page Surveys](#multi-page-surveys)               | ✅     | Support for surveys with multiple pages                    |
| [Question Types](#question-types)                       | ✅     | Multiple question types supported                          |
| [Form Submission](#form-submission)                     | ✅     | Flexible submission handling with multiple destinations    |
| [Role-based Authorization](#role-based-authorization)   | ✅     | Access control based on user roles                         |
| [CMS Integration](#cms-integration)                     | ✅     | Integration with CMS (Strapi) for survey metadata          |
| [Localization](#localization)                           | ✅     | Multi-language support via locale prop                     |
| [Custom UI Components](#custom-ui-components)           | ✅     | Custom React components for question types                 |
| [Block Integration](#block-integration)                 | ✅     | Integration with `@o2s/blocks.surveyjs-form` block         |
| [Ticket System Integration](#ticket-system-integration) | 📋     | Planned feature for ticket submission forms                |

## Feature details

### Dynamic Form Creation {#dynamic-form-creation}

Forms are created dynamically based on JSON schemas retrieved from the SurveyJS service. The schema defines:

- Survey structure (pages, questions, panels)
- Question types and configurations
- Validation rules
- Conditional logic
- Styling and layout

The schema is fetched from the SurveyJS service using the `surveyId` stored in your CMS.

### Form Validation {#form-validation}

The integration provides comprehensive validation:

- **Client-side validation**: Real-time validation as users fill out the form
- **Server-side validation**: Validation on submission using SurveyJS validation engine
- **Custom validators**: Support for numeric, text, email, regex, and expression validators
- **Required field validation**: Automatic validation of required fields
- **Error messages**: Detailed error messages for validation failures

### Conditional Logic {#conditional-logic}

Questions and pages can be conditionally shown or hidden based on:

- Answers to previous questions
- Expression-based conditions
- Visibility rules (`visibleIf`, `enableIf`)
- Dynamic question ordering

### Multi-page Surveys {#multi-page-surveys}

Support for surveys with multiple pages:

- Page navigation controls
- Progress indicators
- Page-specific validation
- Conditional page navigation

### Question Types {#question-types}

The integration supports the following question types:

- **Text** - Single-line and multi-line text input
- **Comment** - Multi-line text area
- **Dropdown** - Single selection dropdown
- **Radio Group** - Single selection from radio buttons
- **Checkbox** - Multiple selection checkboxes
- **Boolean** - Yes/No or True/False questions
- **Rating** - Star or numeric rating
- **Multiple Choice** - Various selection types
- **Matrix** - Grid-based questions
- **File Upload** - File upload support
- **Expression** - Calculated values

Each question type has custom React components for consistent UI styling.

### Form Submission {#form-submission}

Flexible submission handling:

- **Multiple destinations**: Configure where submissions are sent (currently supports SurveyJS backend)
- **Extensible architecture**: Easy to add new submission destinations (email, database, third-party services)
- **Submission validation**: Server-side validation before submission
- **Error handling**: Comprehensive error handling with detailed error messages
- **Partial submissions**: Support for saving partial form data (if configured)

### Role-based Authorization {#role-based-authorization}

Access control based on user roles:

- **Required roles**: Configure which roles can submit a survey
- **JWT token validation**: Automatic validation of user tokens
- **Role extraction**: Automatic extraction of roles from JWT tokens
- **Unauthorized handling**: Proper error responses for unauthorized access

### CMS Integration {#cms-integration}

Integration with CMS for survey metadata:

- **Survey metadata**: Store survey configuration in CMS (code, surveyId, postId, etc.)
- **Content management**: Manage surveys through your CMS interface
- **Localization**: CMS-based localization support
- **Role configuration**: Configure required roles in CMS

Currently supports Strapi CMS. Other CMS integrations can be added.

### Localization {#localization}

Multi-language support:

- **Locale prop**: Pass locale to `Survey` component
- **SurveyJS localization**: Uses SurveyJS built-in localization
- **CMS localization**: Survey metadata can be localized in CMS
- **Error messages**: Localized error messages via labels prop

### Custom UI Components {#custom-ui-components}

Custom React components for consistent styling:

- `CustomSurveyQuestionText` - Text input component
- `CustomSurveyQuestionComment` - Text area component
- `CustomSurveyQuestionDropdown` - Dropdown component
- `CustomSurveyQuestionRadioGroup` - Radio group component
- `CustomSurveyQuestionCheckbox` - Checkbox component
- `CustomSurveyQuestionBoolean` - Boolean/Yes-No component
- `CustomSurveyPanel` - Panel container component
- `CustomSurveyNavigationButton` - Navigation button component

All components use Tailwind CSS for styling and are consistent with the O2S design system.

### Block Integration {#block-integration}

Integration with the `@o2s/blocks.surveyjs-form` block:

- **CMS blocks**: Use survey forms as blocks in CMS pages
- **Block rendering**: Automatic rendering of survey forms in page layouts
- **Block configuration**: Configure surveys through CMS block interface
- **Seamless integration**: Works with existing block system

### Ticket System Integration {#ticket-system-integration}

:::info Planned
This is a planned feature and is not yet implemented.
:::

The SurveyJS module is planned to support ticket submission:

- **Ticket forms**: Create dynamic ticket submission forms
- **Form validation**: Validate ticket data before submission
- **Integration**: Can be integrated with ticket systems (e.g., Zendesk)
- **Custom workflows**: Configure custom submission workflows
