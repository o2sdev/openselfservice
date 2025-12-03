import { resolve } from "node:path";
import swc from "unplugin-swc";
import { defineConfig } from "vitest/config";
export default defineConfig({
    test: {
        globals: true,
        root: "./",
        exclude: [
            "**/node_modules/**",
            "**/dist/**",
            "**/.{idea,git,cache,output,temp}/**",
        ],
        projects: [
            {
                test: {
                    name: "api",
                    include: ["src/api-harmonization/**/*.spec.ts"],
                    environment: "node",
                    globals: true,
                },
                plugins: [
                    swc.vite({
                        module: { type: "es6" },
                    }),
                ],
                resolve: {
                    alias: {
                        src: resolve(__dirname, "./src"),
                    },
                },
            },
            {
                test: {
                    name: "sdk",
                    include: ["src/sdk/**/*.spec.ts"],
                    environment: "node",
                    globals: true,
                },
                resolve: {
                    alias: {
                        src: resolve(__dirname, "./src"),
                    },
                },
            },
        ],
    },
});
