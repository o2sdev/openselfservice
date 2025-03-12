import { CMS } from '../../models';
import { Component } from '../../utils';

export class FaqComponent extends Component.Component {
    __typename!: 'FaqComponent';
    title!: CMS.Model.FaqComponent.FaqComponent['title'];
    subtitle!: CMS.Model.FaqComponent.FaqComponent['subtitle'];
    items!: CMS.Model.FaqComponent.FaqComponent['items'];
    banner?: CMS.Model.FaqComponent.FaqBoxWithButtons;
}
