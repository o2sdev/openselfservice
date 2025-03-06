import { Component } from '@/utils/models';

export class ArticleDetailsComponent extends Component.Component {
    properties!: {
        [key: string]: string;
    };
    labels!: {
        today: string;
        yesterday: string;
    };
}
