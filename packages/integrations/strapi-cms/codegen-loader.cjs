/**
 * Custom graphql-codegen schema loader.
 *
 * Strapi's GraphQL introspection reports the built-in `@deprecated` directive with a
 * non-standard `DIRECTIVE_DEFINITION` location. `graphql@16` has no such directive location,
 * so when codegen re-serializes the schema its parser throws
 * `Syntax Error: Unexpected Name "DIRECTIVE_DEFINITION"`. We fetch the introspection ourselves
 * and drop that invalid location before building the schema, which lets code generation run.
 */
const { getIntrospectionQuery, buildClientSchema } = require('graphql');
const { request } = require('graphql-request');

module.exports = async function loader(pointer) {
    const introspection = await request(pointer, getIntrospectionQuery());

    for (const directive of introspection.__schema.directives || []) {
        if (Array.isArray(directive.locations)) {
            directive.locations = directive.locations.filter((location) => location !== 'DIRECTIVE_DEFINITION');
        }
    }

    return buildClientSchema(introspection);
};
