import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubProductModel } from 'src/app/core/subproduct.model';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  public subproductList: SubProductModel[];

  constructor(
    private baseService: BaseService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getSubProduct();
  }

  getSubProduct() {

  }

  onChangeCategory(event) {
    console.log(event);
  }
}
