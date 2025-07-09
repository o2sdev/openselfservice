---
'@o2s/framework': minor
---

Organizations module:

- Extending the Organization model with taxId
- Adding taxId to OrganizationsListQuery and adding CheckMembershipParams class for membership validation
- Adding GET /membership/:orgId/:userId endpoint to check user membership and implementing checkMembership method in OrganizationController
- Adding abstract checkMembership method to OrganizationService to support membership verification operations with boolean return type.

Users module:

- Extending the User model with username and adding an export of User type
- Adding GetUsersQuery class to support optional username filtering
- Adding getUsers method to UserService
