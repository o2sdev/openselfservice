import { CMS, Users } from '../../models';

import { UserAccountBlock } from './user-account.model';

export const mapUserAccount = (
    cms: CMS.Model.UserAccountBlock.UserAccountBlock,
    _locale: string,
    user?: Users.Model.User,
): UserAccountBlock => {
    return {
        __typename: 'UserAccountBlock',
        id: cms.id,
        title: cms.title,
        basicInformationTitle: cms.basicInformationTitle,
        basicInformationDescription: cms.basicInformationDescription,
        fields: cms.fields,
        user,
        labels: cms.labels,
    };
};
