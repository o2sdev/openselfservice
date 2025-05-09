export type ActionLink = {
    label: string;
    visible: boolean;
    slug: string;
    icon?: string;
};

export type ActionLinksProps = {
    actionLinks: ActionLink[];
    showMoreLabel: string;
    className?: string;
};
