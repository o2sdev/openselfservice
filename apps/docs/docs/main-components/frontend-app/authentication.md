---
sidebar_position: 400
---

# Authentication

Authentication is a critical security component that verifies user identity before granting access to protected resources. This document outlines the authentication mechanisms implemented in our application.

## Overview

Our application uses [NextAuth.js](https://next-auth.js.org/) to handle authentication, providing a secure and flexible solution with multiple authentication providers. The implementation supports:

- Credential-based authentication (username/password)
- OAuth providers (GitHub)
- JWT-based sessions
- Role-based access control
- Customer context switching for B2B scenarios

## Architecture

The authentication flow follows these steps:

1. User initiates sign-in through a provider
2. NextAuth validates credentials or processes OAuth flow
3. Upon successful authentication, JWT tokens are generated
4. Session data is maintained using the JWT strategy
5. User roles and customer context are attached to the session

## Configuration

### Core Setup

The main authentication configuration is defined in `auth.ts`:

```typescript
export const nextAuthResult = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: providers,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    jwt: async (params) => {
      return mockJwtCallback(params);
    },
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.role = token?.role;
        session.user.id = token?.id as string;
        session.user.customer = token?.customer;
        session.accessToken = token.accessToken;
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

### Authentication Providers

Providers are configured in `auth.providers.ts`:

```typescript
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
];
```

## Authentication Methods

### Credential Authentication

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

The application supports GitHub OAuth authentication with custom profile mapping:

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

## Session Management

Sessions are managed using JWT tokens with a 30-day expiration by default. The JWT contains user information including:

```typescript
// JWT structure from types.d.ts
interface JWT {
  accessToken: string;
  accessTokenExpires: number;
  role?: string;
  customer?: {
    id: string;
    roles: string[];
    name: string;
  };
}
```

The session is then populated with this data:

```typescript
session: async ({ session, token }) => {
  if (session.user) {
    session.user.role = token?.role;
    session.user.id = token?.id as string;
    session.user.customer = token?.customer;
    session.accessToken = token.accessToken;
  }
  return session;
}
```

## User Roles and Permissions

The application implements role-based access control with predefined roles:

```typescript
// From prisma schema
enum Role {
  selfservice_admin
  selfservice_user
}
```

User roles are attached to the JWT during authentication and can be used to control access to protected resources.

## Customer Context

For B2B scenarios, users can be associated with customer accounts and switch between them:

```typescript
async function updateCustomerToken(token: JWT, customerId: string | undefined) {
  try {
    const accessToken = signUserToken(token);
    const customer = customerId
      ? await sdk.users.getCustomerForCurrentUserById({ id: customerId }, accessToken)
      : await sdk.users.getDefaultCustomerForCurrentUser(accessToken);

    if (customer) {
      token.customer = {
        id: customer.id,
        roles: customer?.roles?.map((role) => role.role) ?? [],
        name: customer?.name ?? '',
      };
    }
  } catch (error) {
    throw new Error('Error fetching customer data');
  }
}
```

This allows users to:
- Have a default customer context
- Switch between multiple customer accounts they have access to
- Have different roles for different customers

## API Routes

NextAuth.js API routes are configured in `app/api/auth/[...nextauth]/route.ts`:

```typescript
import { handlers } from '@/auth';

export const { GET, POST } = handlers;
```

## Security Best Practices

### Password Storage

Passwords are hashed using bcrypt before storage:

```typescript
// From seed.ts
{
  id: 'admin-1',
  name: 'Jane Doe',
  email: 'jane@example.com',
  password: await hash('admin', 10), // Hashed with bcrypt
  role: Role.selfservice_admin,
  defaultCustomerId: 'cust-001',
}
```

### JWT Signing

In production, JWTs should be signed with a secure secret:

```typescript
function signUserToken(token: JWT): string {
  return jwt.sign(
    {
      name: token.name,
      email: token.email,
      role: token.role,
      customer: token?.customer
        ? {
            id: token.customer.id,
            roles: token.customer.roles,
            name: token.customer.name,
          }
        : undefined,
    },
    process.env.JWT_SECRET || 'secret',
  );
}
```

### Input Validation

User inputs are validated using Zod schemas:

```typescript
export const signInSchema = object({
  username: string().email('Must be a valid email'),
  password: string().min(4, 'Password must be at least 4 characters'),
});
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
