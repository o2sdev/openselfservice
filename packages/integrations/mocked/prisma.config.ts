import { defineConfig, env } from 'prisma/config';

export default defineConfig({
    schema: './prisma/schema.prisma',
    datasource: {
        // Use environment variable if available, otherwise default to SQLite file
        url: env('AUTH_DATABASE_URL', 'file:./dev.db'),
    },
    migrations: {
        path: './prisma/migrations',
    },
});
