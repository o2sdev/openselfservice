import { CMS, Users } from '../../models';

import { UserAccountComponent } from './user-account.model';

export const mapUserAccount = (
    cms: CMS.Model.UserAccountComponent.UserAccountComponent,
    _locale: string,
    user?: Users.Model.User,
): UserAccountComponent => {
    return {
        __typename: 'UserAccountComponent',
        id: cms.id,
        title: cms.title,
        basicInformationTitle: cms.basicInformationTitle,
        basicInformationDescription: cms.basicInformationDescription,
        fields: cms.fields,
        user,
        labels: cms.labels,
    };
};
