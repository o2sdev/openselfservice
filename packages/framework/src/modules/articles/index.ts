/**
 * # Articles module
 *
 * Handles articles and categories (e.g. knowledge base, blog). Exports Request/Model types,
 * abstract Service (implementation in API Harmonization), Controller (HTTP), and NestJS Module.
 *
 * ## Endpoints (Controller, prefix `/articles`)
 *
 * | Method | Path | Description |
 * |--------|------|-------------|
 * | GET | `/articles` | Article list (pagination, filters). |
 * | GET | `/articles/:id` | Single article by id (slug), with sections. |
 * | GET | `/articles/search` | Search (query + filters). |
 * | GET | `/articles/categories` | Category list. |
 * | GET | `/articles/categories/:id` | Single category. |
 *
 * ## ApiConfig
 *
 * Under `integrations.articles`: `name`, `service` (ArticlesService implementation), `controller`, `imports`.
 */
export * as Model from './articles.model';
export * as Request from './articles.request';
export { ArticlesService as Service } from './articles.service';
export { ArticleController as Controller } from './articles.controller';
export { ArticlesModule as Module } from './articles.module';
