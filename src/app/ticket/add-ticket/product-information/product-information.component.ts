import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductDetailModel } from 'src/app/core/product-detail.model';
import { ProductFieldModel } from 'src/app/core/product-field.model';
import { ProductValueModel } from 'src/app/core/product-value.model';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss']
})
export class ProductInformationComponent implements OnInit {

  public productFormGroup: FormGroup;
  public productField: ProductFieldModel[];
  public productValue: ProductValueModel[];
  public url: string;
  public ticketAppValue: any;
  public submitted: boolean;
  public role: string;
  public requestType: string;
  public productStream: string;

  @Input() productDetail: ProductDetailModel;
  @Input() matStepValid: boolean;

  @Output() nextStep = new EventEmitter();

  constructor(
    private baseService: BaseService
  ) { }

  ngOnInit(): void {
    this.productField = [];
    this.productValue = [];

    this.getTicketField();

    this.productFormGroup = new FormGroup({});
  }

  private getTicketField() {
    this.baseService.getData('productStream', '').subscribe(resp => {
      console.log("Product Stream:", resp);
      this.productField = resp;
    })
  }

  onProductInfoSubmit() {
    this.nextStep.emit(this.productFormGroup);
  }
}
