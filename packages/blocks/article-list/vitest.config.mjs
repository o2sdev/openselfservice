import { resolve } from "node:path";
import swc from "unplugin-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        name: "api",
        globals: true,
        root: "./",
        include: ["src/api-harmonization/**/*.spec.ts"],
        environment: "node",
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
            src: resolve(__dirname, "./src"),
        },
    },
});
