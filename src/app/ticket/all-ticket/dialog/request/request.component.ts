import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { RequestModel } from 'src/app/core/request.model';
import { BaseService } from 'src/app/services/base.service';
import { VariantComponent } from '../variant/variant.component';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit, OnDestroy {

  subproductList: RequestModel[];
  legacyList: RequestModel[];
  sosyList: RequestModel[];
  modchanList: RequestModel[];
  onefiveList: RequestModel[];
  events: string;
  eventsRevise: string;
  isShown: boolean = false;
  selectedRequestDetail: string;
  typelegacy: string;
  years: any[];
  requestDetailOptions: Array<any> = [];

  constructor(
    private baseService: BaseService,
    private dialog: MatDialog,
    private router: Router,
    private dialogRef: MatDialogRef<RequestComponent>,
  ) { }

  ngOnInit(): void {
    this.getSubProduct();
    this.getLegacy();
    this.getSosy();
    this.getModchan();
    this.getOnefive();
  }

  private getSubProduct() {
    this.baseService.getData(null, 'AXIS').subscribe(resp => {
      if (resp) this.subproductList = resp;
    })
  }

  private getLegacy() {
    this.baseService.getData('legacy', RequestModel).subscribe(resp => {
      if (resp) this.legacyList = resp;
    })
  }

  private getSosy() {
    this.baseService.getData('sosy', RequestModel).subscribe(resp => {
      if (resp) this.sosyList = resp;
    })
  }

  private getModchan() {
    this.baseService.getData('modchan', RequestModel).subscribe(resp => {
      if (resp) this.modchanList = resp;
    })
  }

  private getOnefive() {
    this.baseService.getData('onefive', RequestModel).subscribe(resp => {
      if (resp) this.onefiveList = resp;
    })
  }

  private getRequestDetailOptions(type) {
    if (type === 'REVISE') {
      this.baseService.getData('request', null, null).subscribe(resp => {
        if (resp) this.requestDetailOptions = resp;
      });
    } else {
      this.baseService.getData('request2', null, null).subscribe(resp => {
        if (resp) this.requestDetailOptions = resp;
      });
    }
	}

  onChangeCategory(event) {
    this.events = event.value;
    this.eventsRevise = null;
    this.isShown = true;
    this.selectedRequestDetail = '';
  }

  onChangeRevise(event) {
    this.eventsRevise = event.value;
    localStorage.setItem('typeLegacy', this.eventsRevise);
    this.typelegacy = localStorage.getItem('typeLegacy');
    this.getRequestDetailOptions(this.typelegacy);
  }

  productList() {
    this.router.navigate(['/axiata/add-ticket']);
		this.dialogRef.close();
  }

  openDialogVariant() {
    this.dialog.open(VariantComponent);
		this.dialogRef.close();
  }

  onReqDetailChange(event) {}

  selectAll(checkAll, select: NgModel, values) {}

  public onRequestDetailChange(event: MatSelectChange) {}

  get showRequestDetail():boolean {
     return this.events && this.eventsRevise ? true : false;
  }

  ngOnDestroy(): void {
    localStorage.removeItem('typeLegacy');
		localStorage.removeItem('typeBenefit');
		localStorage.removeItem('requestDetail');
  }
}
