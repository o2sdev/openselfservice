import { Articles } from '@o2s/framework/modules';

export * from './zendesk-article.service';
export { ZendeskArticleService as Service } from './zendesk-article.service';
export { ZendeskArticleModule as Module } from './zendesk-article.module';

export import Request = Articles.Request;
export import Model = Articles.Model;
