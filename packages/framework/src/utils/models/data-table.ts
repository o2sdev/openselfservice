export class DataTable<T> {
    columns!: DataTableColumn<T>[];
    actions?: DataTableActions;
}

export class DataTableColumn<T> {
    id!: keyof T;
    title!: string;
}

export class DataTableActions {
    title!: string;
    label?: string;
}

export class DataTableMeta {
    __id!: string;
    columns!: {
        __id: string;
        id: string;
        title: string;
    }[];
    actions?: {
        __id: string;
        title: string;
        label: string;
    };
}
