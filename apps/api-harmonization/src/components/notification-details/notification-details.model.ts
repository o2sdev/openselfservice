import { Notifications } from '../../models';
import { Component } from '../../utils';

export class NotificationDetailsComponent extends Component.Component {
    __typename!: 'NotificationDetailsComponent';
    data!: Notification;
}

export class Notification {
    id!: {
        value: Notifications.Model.Notification['id'];
        title: string;
        label: string;
    };
    title!: {
        value: Notifications.Model.Notification['title'];
        title: string;
        label: string;
    };
    content!: {
        value: Notifications.Model.Notification['content'];
        title: string;
        label: string;
    };
    type!: {
        value: Notifications.Model.Notification['type'];
        title: string;
        label: string;
    };
    status!: {
        value: Notifications.Model.Notification['status'];
        title: string;
        label: string;
    };
    priority!: {
        value: Notifications.Model.Notification['priority'];
        title: string;
        label: string;
    };
    createdAt!: Notifications.Model.Notification['createdAt'];
    updatedAt!: Notifications.Model.Notification['updatedAt'];
    customField!: Notifications.Model.Notification['someNewField'];
}
