---
sidebar_position: 100
---

# SurveyJS

This integration provides a full integration with [SurveyJS](https://surveyjs.io/), a powerful JavaScript library for creating dynamic forms and surveys. Unlike other integrations located in `packages/integrations`, SurveyJS is implemented as a separate module that can be added to the API Harmonization server.

## In this section

- [How to set up](./how-to-setup.md) - Step-by-step guide for setting up the SurveyJS integration
- [Features](./features.md) - Overview of features supported by the SurveyJS integration
- [Usage](./usage.md) - Examples and best practices for using SurveyJS

## Installation

First, install the SurveyJS module package:

```shell
npm install @o2s/modules.surveyjs --workspace=@o2s/api --workspace=@o2s/frontend
```

## Environment variables

Configure the following environment variables in your API Harmonization server:

| name                  | type   | description                                   | required |
| --------------------- | ------ | --------------------------------------------- | -------- |
| API_SURVEYJS_BASE_URL | string | the base URL pointing to the SurveyJS service | yes      |

You can obtain this value from your SurveyJS instance settings - it should be the URL where your SurveyJS server is running (e.g., `https://api.surveyjs.io` for production or `http://localhost:3000` for local development).

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

## Quick start

1. Install the package (see [How to set up](./how-to-setup.md))
2. Configure environment variables
3. Register the module in your API Harmonization server
4. Use the `Survey` component in your frontend application

For detailed instructions, see the [How to set up](./how-to-setup.md) guide.
