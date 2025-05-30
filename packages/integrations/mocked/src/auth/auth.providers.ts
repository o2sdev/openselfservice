import { compare } from 'bcryptjs';
import { User } from 'next-auth';
import { Provider } from 'next-auth/providers';
import Credentials from 'next-auth/providers/credentials';
import { ZodError, ZodObject, ZodString, object, string } from 'zod';

import { prisma } from './prisma';

const credentialsCallback = async (
    credentials: Partial<Record<'username' | 'password', unknown>>,
    signInSchema: ZodObject<{
        username: ZodString;
        password: ZodString;
    }>,
): Promise<User | null> => {
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

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            defaultCustomerId: user.defaultCustomerId || undefined,
            role: user.role,
        };
    } catch (error) {
        if (error instanceof ZodError) {
            throw new Error('Validation error');
        } else {
            throw new Error('Authentication error');
        }
    }
};

export const signInSchema = object({
    username: string().email('Must be a valid email'),
    password: string().min(4, 'Password must be at least 4 characters'),
});

export const Providers: Provider[] = [
    Credentials({
        credentials: {
            username: { label: 'Username', placeholder: 'admin', type: 'text' },
            password: { label: 'Password', placeholder: 'admin', type: 'password' },
        },
        authorize: async (credentials) => {
            return await credentialsCallback(credentials, signInSchema);
        },
    }),
];
