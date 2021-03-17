import { Component, OnInit } from '@angular/core';
import { TableModel } from '../core/table.model';
import { UsmColumn, UsmLabel } from '../shared/usm-table-config.const';

@Component({
    selector: 'app-usm',
    templateUrl: './usm.component.html'
})
export class UsmComponent implements OnInit {
    public table: TableModel;

    ngOnInit() {
        this.initTable();
    }

    private initTable() {
        this.table = new TableModel();
        this.table.labels = UsmLabel;
        this.table.columns = UsmColumn;
    }

    handleFilterChanges(event) {
        console.log(event);
    }
}
