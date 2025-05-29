import { compare } from 'bcryptjs';
import { User } from 'next-auth';
import { ZodError, ZodObject, ZodString } from 'zod';

import { prisma } from './prisma';

export const credentialsCallback = async (
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

        return user as User;
    } catch (error) {
        if (error instanceof ZodError) {
            throw new Error('Validation error');
        } else {
            throw new Error('Authentication error');
        }
    }
};
