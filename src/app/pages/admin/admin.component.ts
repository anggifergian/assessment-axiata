import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { AxiataState } from "../../store";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private orderService: OrderService,
    private ngRedux: NgRedux<AxiataState>
  ) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(resp => console.log('Getting order...', resp));
  }
}
