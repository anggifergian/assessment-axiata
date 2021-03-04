import { Component, OnInit } from '@angular/core';
import { TicketFilterModel } from 'src/app/core/ticket-filter.model';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-all-ticket',
  templateUrl: './all-ticket.component.html',
  styleUrls: ['./all-ticket.component.scss']
})
export class AllTicketComponent implements OnInit {

  public filterOption: TicketFilterModel[];

  constructor(
    private baseService: BaseService
  ) { }

  ngOnInit(): void {
    this.getTicketFilter();
  }

  private getTicketFilter() {
    const subs = this.baseService.getData('http://www.google.com', TicketFilterModel, null, true).subscribe(resp => {
      if (resp) this.filterOption = resp;
    });
  }

}
