import { resolve } from "node:path";
import swc from "unplugin-swc";
import { defineConfig } from "vitest/config";

export const config = defineConfig({
    test: {
        name: "api",
        globals: true,
        root: "./",
        include: ["src/api-harmonization/**/*.spec.ts"],
        environment: "node",
        passWithNoTests: true,
        exclude: [
            "**/node_modules/**",
            "**/dist/**",
            "**/.{idea,git,cache,output,temp}/**",
        ],
    },
    plugins: [
        swc.vite({
            module: { type: "es6" },
        }),
    ],
    resolve: {
        alias: {
            src: resolve(process.cwd(), "./src"),
        },
    },
});

