import { strict as assert } from 'assert';
import * as contentfulManagement from 'contentful-management';
import { EnvironmentGetter } from 'contentful-typescript-codegen';

const { CF_MANAGEMENT_TOKEN, CF_SPACE_ID, CF_ENV } = process.env;

assert(CF_MANAGEMENT_TOKEN);
assert(CF_SPACE_ID);
assert(CF_ENV);

const getContentfulEnvironment: EnvironmentGetter = () => {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: CF_MANAGEMENT_TOKEN,
    });

    return contentfulClient.getSpace(CF_SPACE_ID).then((space) => space.getEnvironment(CF_ENV));
};

module.exports = getContentfulEnvironment;
