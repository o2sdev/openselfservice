---
sidebar_position: 400
---

# Authentication

This document covers authentication in the frontend app, which uses NextAuth.js for session management. For an overview of authentication across the entire O2S framework, see the [authentication overview](../../overview/authentication.md). For information about authentication and authorization in the API Harmonization server, see the [API Harmonization authentication documentation](../harmonization-app/authentication.md).

## Overview

The frontend app uses [NextAuth.js](https://next-auth.js.org/) to handle authentication, providing a secure and flexible solution with multiple authentication providers. The implementation supports:

- Credential-based authentication (username/password)
- OAuth providers (GitHub)
- JWT-based sessions
- Role-based access control
- Customer context switching for B2B scenarios

## Architecture

The authentication flow follows these steps:

1. User initiates sign-in through a provider configured in your IAM integration
2. NextAuth validates credentials or processes OAuth flow (integration-specific)
3. Upon successful authentication, the IAM system issues JWT tokens
4. The app reuses these tokens - O2S does not generate or modify them
5. Session data is maintained using the JWT strategy with the token from your IAM system
6. User roles and customer context are retrieved from the IAM token (if provided) or fetched asynchronously from another API, then stored in the session

## Configuration

### Core Setup

The main authentication configuration is defined in `auth.ts`. The callbacks shown here are integration-specific - each IAM integration implements its own token handling logic:

```typescript title="example authentication configuration (integration-specific)"
export const nextAuthResult = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: providers,  // Configured by your IAM integration
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    jwt: async (params) => {
      // Integration-specific: handles token from your IAM system
      return jwtCallback(params);
    },
    session: async ({ session, token }) => {
      // Integration-specific: extracts data from IAM token
      if (session.user) {
        session.user.role = token?.role;
        session.user.id = token?.id as string;
        session.user.customer = token?.customer;
        session.accessToken = token.accessToken;  // Token from IAM system
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/error',
  }
});
```

The actual implementation of these callbacks depends on your IAM integration. The integration handles how tokens from your IAM system are processed and stored in the session.

### Authentication Providers

Providers are configured in `auth.providers.ts`. The example below shows Credentials and GitHub providers, but you can use any authentication provider supported by auth.js:

```typescript title="example provider configuration"
export const providers: Provider[] = [
  Credentials({
    credentials: {
      username: { label: 'Username', placeholder: 'admin', type: 'text' },
      password: { label: 'Password', placeholder: 'admin', type: 'password' },
    },
    authorize: async (credentials) => {
      // Validate and authenticate user
    }
  }),
  GitHub({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    profile(profile) {
      return {
        id: profile.id.toString(),
        email: profile.email,
        role: 'selfservice_user',
        name: profile.name ?? profile.login,
      };
    },
  }),
  // You can add other providers like Google, Facebook, etc.
  // Google({ ... }),
  // Facebook({ ... }),
];
```

Any authentication method or provider available in auth.js can be integrated into O2S. Simply add the provider configuration to the `providers` array.

## Authentication Methods

O2S supports all authentication methods offered by the auth.js library. The two methods shown below (Credentials and GitHub OAuth) are just examples - you can integrate any auth.js provider or authentication method that fits your needs.

For example, besides GitHub, you can include other social authentication providers like Google, Facebook, or any other provider supported by auth.js. The Credentials method shown here might not be production-ready and is provided as an example - you should implement proper credential validation and security measures for production use.

### Credential Authentication

The following example shows how credential-based authentication can be implemented. Note that this is a simplified example and may not be production-ready:

Users can authenticate with email and password. Passwords are hashed using bcrypt for security:

```typescript
authorize: async (credentials) => {
  try {
    const { username, password } = await signInSchema.parseAsync(credentials);

    const user = await prisma.user.findUnique({
      where: { email: username },
    });
    if (!user || !user.password) {
      throw new Error('Invalid credentials');
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    return user as User;
  } catch (error) {
    if (error instanceof ZodError) {
      throw new Error('Validation error');
    } else {
      throw new Error('Authentication error');
    }
  }
}
```

### OAuth Authentication

The following example shows GitHub OAuth authentication, but you can use any OAuth provider supported by auth.js (Google, Facebook, etc.). Each provider can be configured with custom profile mapping:

```typescript
GitHub({
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  profile(profile) {
    return {
      id: profile.id.toString(),
      email: profile.email,
      role: 'selfservice_user',
      name: profile.name ?? profile.login,
    };
  },
})
```

## API Harmonization server integration

The frontend communicates with the API Harmonization server using JWT tokens. When making API requests, the frontend includes the access token in the `Authorization` header:

```typescript
const data = await sdk.blocks.getPaymentsSummary(
  { id },
  { 'x-locale': locale },
  accessToken  // Bearer token sent in Authorization header
);
```

The API Harmonization server uses this token to verify the user's identity and check their roles and permissions. The token structure includes roles and permissions that are used by the API Harmonization server for access control decisions.

For details on how the API Harmonization server processes these tokens and enforces access control, see the [API Harmonization authentication documentation](../harmonization-app/authentication.md).

## Session Management

O2S does not introduce or modify JWT tokens itself. Instead, the app reuses tokens issued by the IAM system that is currently plugged in. The frontend app uses NextAuth.js to manage sessions, and the token handling logic is integration-specific.

The following example shows how the mocked integration handles tokens in the `auth.js` integration, but keep in mind this is just a simple example and the actual implementation depends on your IAM integration:

```typescript title="example session callback (integration-specific)"
session: async ({ session, token }) => {
  if (session.user) {
    session.user.role = token?.role;
    session.user.id = token?.id as string;
    session.user.customer = token?.customer;
    session.accessToken = token.accessToken;  // Token from IAM system
  }
  return session;
}
```

The JWT token structure depends on what your IAM system provides. Typically, it includes:

- `accessToken`: The token issued by your IAM system
- `accessTokenExpires`: Token expiration timestamp
- User roles and permissions (structure depends on your IAM)
- Customer context for multi-tenant scenarios (if applicable)

The exact structure and how tokens are processed depends on your specific IAM integration. Each integration implements its own token handling logic in the `auth.js` callbacks.

## User Roles and Permissions

The application implements role-based access control. For an overview of how roles and permissions work across O2S, see the [authentication overview](../../overview/authentication.md).

Roles and permissions are kept at the organization/customer level, not per user. This allows for more granular access control since one user can belong to different organizations and their access level can vary (e.g., they can be an admin in one organization and a regular user in another).

Roles and permissions can be retrieved in two ways:

1. **From the JWT token** - If your IAM system includes roles and permissions in the access token, they can be extracted directly from the token.

2. **Asynchronously from another API** - If roles and permissions are not present in the access token, they can be fetched asynchronously from your IAM system or another API endpoint.

The following example from the mocked integration shows how roles and permissions can be fetched asynchronously when they're not in the access token:

```typescript title="fetching roles and permissions asynchronously (example from mocked integration)"
async function updateCustomerToken(
    getCustomer: (id: string | undefined, accessToken: string) => Promise<Models.Customer.Customer>,
    token: JWT,
    customerId?: string,
) {
    try {
        const accessToken = signUserToken(token);
        // Fetch customer data including roles and permissions from API
        const customer = await getCustomer(customerId, accessToken);

        if (customer) {
            // Permissions come directly from the organization
            const permissions = customer.permissions ?? {};
            const roles = customer?.roles ?? [];

            token.customer = {
                id: customer.id,
                name: customer?.name ?? '',
                roles,
                permissions,
            };
            token.permissions = permissions;
            token.roles = roles;
        }
    } catch (_error) {
        throw new Error('Error fetching customer data');
    }
}
```

The API Harmonization server uses these organization-level roles and permissions to control access to pages and blocks. For information on how roles and permissions are enforced in the API Harmonization server, see the [API Harmonization authentication documentation](../harmonization-app/authentication.md).

## Customer Context

For B2B scenarios, users can be associated with customer accounts (organizations) and switch between them. Since roles and permissions are kept at the organization/customer level, switching organizations changes the user's access level:

```typescript title="example customer context update (from mocked integration)"
async function updateCustomerToken(
    getCustomer: (id: string | undefined, accessToken: string) => Promise<Models.Customer.Customer>,
    token: JWT,
    customerId?: string,
) {
    try {
        const accessToken = signUserToken(token);
        // Fetch customer data including roles and permissions from API
        const customer = await getCustomer(customerId, accessToken);

        if (customer) {
            // Permissions come directly from the organization
            const permissions = customer.permissions ?? {};
            const roles = customer?.roles ?? [];

            token.customer = {
                id: customer.id,
                name: customer?.name ?? '',
                roles,
                permissions,
            };
            token.permissions = permissions;
            token.roles = roles;
        }
    } catch (_error) {
        throw new Error('Error fetching customer data');
    }
}
```

This allows users to:
- Have a default customer/organization context
- Switch between multiple customer accounts they have access to
- Have different roles and permissions for different organizations (e.g., admin in one, regular user in another)

When a user switches organizations, the token is updated with the roles and permissions for that organization, and all subsequent API calls use those organization-specific access levels.

## API Routes

NextAuth.js API routes are configured in `app/api/auth/[...nextauth]/route.ts`:

```typescript
import { handlers } from '@/auth';

export const { GET, POST } = handlers;
```

## Implementation Guidelines

### Securing Routes

Use the `auth()` function to protect routes:

```typescript
import { auth } from '@/auth';

export default async function ProtectedPage() {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  // Render protected content
}
```

### Role-Based Access Control

Check user roles to control access to features:

```typescript
if (session?.user?.role === 'selfservice_admin') {
  // Show admin features
}
```

### Permission-based access control in blocks

Blocks can include permission flags in their responses that indicate what actions the user can perform. The frontend uses these flags to conditionally render features.

#### Checking block-level permissions

Before rendering a block, check if the user has the required view permission:

```typescript title="checking permissions before rendering a block"
export const PaymentsSummary: React.FC<PaymentsSummaryProps> = async ({ id, accessToken, locale }) => {
    let data: Model.PaymentsSummaryBlock;
    try {
        data = await sdk.blocks.getPaymentsSummary(
            { id },
            { 'x-locale': locale },
            accessToken
        );
    } catch (_error) {
        return null;
    }

    // Check view permission - if not allowed, don't render the block
    if (!data.permissions?.view) {
        return null;
    }

    return <PaymentsSummaryDynamic {...data} />;
};
```

#### Feature-level permission checks

Within blocks, you can use permission flags to conditionally show or hide specific features:

```typescript title="conditional feature rendering based on permissions"
export const PaymentsSummaryPure: React.FC<PaymentsSummaryPureProps> = ({ permissions, ...component }) => {
    // Check if user has pay permission
    const canPay = permissions?.pay ?? false;

    return (
        <div>
            {/* Pay button only shown if user has pay permission */}
            {overdue.link && canPay && (
                <Button onClick={handlePay}>
                    {overdue.link.label}
                </Button>
            )}

            {/* Chart only shown if user has view permission */}
            {chart && permissions?.view && (
                <Card>
                    <StackedBarChart chartData={chart.chartData} />
                </Card>
            )}
        </div>
    );
};
```

This pattern allows you to:
- Hide entire blocks if the user doesn't have view permission
- Show or hide specific features (like buttons or charts) based on action permissions
- Provide a better user experience by only showing options the user can actually use

The permission flags come from the API Harmonization server, which checks the user's permissions from their JWT token. For more details on how permissions are checked and enforced, see the [API Harmonization authentication documentation](../harmonization-app/authentication.md).

### Customer Context Switching

To implement customer switching:

```typescript
// Update session with new customer context
await update({
  customerId: selectedCustomerId,
});
```

## Extending Authentication

### Adding New Providers

To add a new authentication provider:

1. Install the required package
2. Add provider configuration to `auth.providers.ts`
3. Update UI to include the new sign-in option

### Custom User Data

To store additional user data:

1. Extend the Prisma User model
2. Update the JWT and Session type definitions
3. Modify the JWT callback to include the additional data

## References

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Prisma Adapter Documentation](https://authjs.dev/reference/adapter/prisma)
- [JWT Documentation](https://jwt.io/)
- [OAuth 2.0 Documentation](https://oauth.net/2/)
