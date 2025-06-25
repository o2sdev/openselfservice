---
sidebar_position: 100
---

# Medusa

This package provides integration with [Medusa](https://medusajs.com/) - the open-source commerce platform.

It is used on **Orders, Assets and Services** screens in the frontend app. The `products` module allows also for rendering product lists and its details page.

The integration  can be further extended to cover more Medusa endpoints and other scenarios in the frontend app.

## Requirements

To use it, you must install it into the API Harmonization server by running:

```shell
npm install @o2s/integrations.medusajs --workspace=@o2s/api
```

This integration relies upon the following environmental variables:

| name                         | type   | description                                                                                                      |
|------------------------------|--------|------------------------------------------------------------------------------------------------------------------|
| MEDUSAJS_BASE_URL            | string | the base URL pointing to the domain hosting your Medusa instance                                                 |
| MEDUSAJS_PUBLISHABLE_API_KEY | string | A string indicating the publishable API key to use in the storefront. You can retrieve it from the Medusa Admin. |
| MEDUSAJS_ADMIN_API_KEY       | string | A string indicating the admin user's API key. If specified, it's used to send authenticated requests.            |

## Supported modules

This integration handles following base modules from the framework:

- orders
- products
- resources (supported with our custom Medusa plugin: [Medusa Assets & Services Plugin](https://github.com/o2sdev/medusa-plugin-assets-services))

## Dependencies

This integration relies on:

- our custom Medusa [plugin](https://github.com/o2sdev/medusa-plugin-assets-services) used for management and retrieval of Assets and ServiceInstances, and setting product relations in Medusa Admin Panel

