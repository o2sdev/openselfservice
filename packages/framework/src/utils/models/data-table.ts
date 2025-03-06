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
