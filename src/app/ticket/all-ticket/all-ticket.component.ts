import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketFilterModel } from 'src/app/core/ticket-filter.model';
import { BaseService } from 'src/app/services/base.service';
import { RequestComponent } from "./dialog/request/request.component";

@Component({
  selector: 'app-all-ticket',
  templateUrl: './all-ticket.component.html',
  styleUrls: ['./all-ticket.component.scss']
})
export class AllTicketComponent implements OnInit {

  public filterOption: TicketFilterModel[];

  constructor(
    private baseService: BaseService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getTicketFilter();
  }

  private getTicketFilter() {
    this.baseService.getData('ticket', TicketFilterModel)
      .subscribe(resp => this.filterOption = resp);
  }

  openDialogRequest() {
    this.dialog.open(RequestComponent, { height: '400px', width: '800px'});
  }

}
