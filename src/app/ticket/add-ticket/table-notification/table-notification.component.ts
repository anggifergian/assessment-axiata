import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { TableModel } from 'src/app/core/table.model';

@Component({
  selector: 'table-notification',
  templateUrl: './table-notification.component.html',
  styleUrls: ['./table-notification.component.scss']
})
export class TableNotificationComponent implements OnInit {

  @Input() public table: TableModel;
  @ViewChild(MatSort, { static: true }) matSort: MatSort;

  constructor() { }

  ngOnInit(): void {
    console.log("Table (table-notification):", this.table)
  }

  onSort() {
    this.table.dataSource.sort = this.matSort;
  }

  pageIndex(event: any) {
    console.log("pageIndex:", event);
  }

}
