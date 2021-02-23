import { Component, OnInit } from "@angular/core";
import { TicketService } from "../services/ticket.service";

interface Filter {
  value: number;
  label: string;
}

@Component({
    selector: 'app-allticket',
    templateUrl: './allticket.component.html',
    styleUrls: ['./allticket.component.scss']
})
export class AllticketComponent implements OnInit {
    selectedFilter: string;
    tickets: any;
    cols: any;

    constructor(
        private ticketService: TicketService
    ) {}

    filters: Filter[] = [
        {value: 0, label: 'Ticket Name'},
        {value: 1, label: 'Reporter'},
        {value: 2, label: 'Create Date'},
        {value: 3, label: 'Status'}
    ];

    ngOnInit() {
        this.ticketService.getTickets().subscribe((data) => {
            this.tickets = data;
            console.log(this.tickets);
        })

        this.cols = [
            { field: 'ticketId', header: 'Ticket ID' },
            { field: 'ticketName', header: 'Ticket Name' },
            { field: 'reporter', header: 'Reporter' },
            { field: 'createdAt', header: 'Create Date' },
            { field: 'status', header: 'Status' },
            { field: 'activity', header: 'Activity' },
            { field: 'productStream', header: 'Product Stream' },
            { field: 'action', header: 'Action' }
        ];
    }
}