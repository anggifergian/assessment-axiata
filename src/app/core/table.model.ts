import { MatTableDataSource } from '@angular/material/table';

export class TableModel {
    public columns: string[];
    public dataSource: MatTableDataSource<any>;
    public labels: string[];
    public page: number;
    public pageSize: number;
    public totalData: number;

    constructor() {
        this.dataSource = new MatTableDataSource([]);

        this.columns = [
            'ContactType',
            'Description',
            'Message',
            'charCount',
            'Action'
        ];

        this.labels = [
            'Notification Name',
            'Description',
            'Message',
            'Char Count',
            'Action'
        ];

        this.page = 1;
        this.pageSize = 10;
        this.totalData = 0;
    }

    getNumber(index: number, limit: number): number {
        return (this.page - 1) * limit + index;
    }

    getPageIndex(): number {
        return this.page - 1;
    }

    setPage(page: number) {
        this.page = page;
    }

    setPageSize(size: number) {
        this.pageSize = size;
    }
}
