---
'@o2s/integrations.mocked': minor
---

Organizations module:

- Adding taxId to organization's mock data and adding filtering by taxId in mapOrganizations method.
- Adding checkMembership mapper function that validates membership by checking if both organization and user exist in mock data.
- Implement checkMembership method in mocked organizations service using the mapper function with simulated response delay.

Users module:

- Adding username to users mock data, exporting MOCK_USERS and adding mapUsers mapper function that filter existing users by username
- Adding mapUsers function to users mapper with GetUsersQuery support that implements username-based filtering for mock user data
- Add abstract getUsers method to UserService to support filtered user list retrieval with pagination and authorization support.
