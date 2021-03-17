import { MatTableDataSource } from '@angular/material/table';

export class TableModel {
    public columns: string[];
    public dataSource: MatTableDataSource<any>;
    public labels: string[];
    public page: number;
    public pageSize: number;
    public totalData: number;

    constructor() {
        this.columns = [];
        this.dataSource = new MatTableDataSource([]);
        this.labels = [];
        this.page = 1;
        this.pageSize = 10;
        this.totalData = 0;
    }
}
