import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TicketService {

    constructor(private http: HttpClient) {}

    public getTickets(): Observable<any> {
        return this.http.get('/assets/ticket.json');
    }
}
