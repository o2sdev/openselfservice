---
'@o2s/integrations.strapi-cms': minor
'@o2s/integrations.mocked': minor
'@o2s/api-harmonization': minor
'@o2s/framework': minor
'@o2s/frontend': minor
'@o2s/ui': minor
---

@o2s/integrations.strapi-cms

- Added new AlertBox component in Content
- LoginPage extended with forgotPassword, resetPasswordMessage, newPasswordMessage
- Added services for ResetPasswordPage and CreatePasswordPage

@o2s/integrations.mocked

- Added mocks for ResetPasswordPage and CreateNewPasswordPage
- Modified mocks for LoginPage

@o2s/api-harmonization

- Added new ResetPasswordPageModule
- Added new CreateNewPasswordPageModule

@o2s/framework

- Added new model in cms model for ResetPasswordPage
- Added new methods in cms service, cms controller for ResetPasswordPage
- Added new class in cms request for ResetPasswordPage
- Added new model in cms model for CreateNewPasswordPage
- Added new methods in cms service, cms controller for CreateNewPasswordPage
- Added new class in cms request for CreateNewPasswordPage
- Extended LoginPage model with forgotPassword, newPasswordMessage, resetPasswordMessage
- Added regexValidations property to FormField model

@o2s/frontend

- Added new pages: reset-password, create-new-password
- Modified login page with new fields
- Added new components: Banner, InputValidations
- Added new Auth components: ResetPasswordForm, CreateNewPasswordForm, FormField
- Added utils for common validation schemas
- Did some UI changes in SignInForm and added new fields

@o2s/ui

- Created InputWithDetails component
- Changed Alert and Link components
