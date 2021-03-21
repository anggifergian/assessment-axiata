import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailModel } from 'src/app/core/product-detail.model';

@Component({
  selector: 'product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss']
})
export class ProductInformationComponent implements OnInit {

  @Input() productDetail: ProductDetailModel;

  constructor() { }

  ngOnInit(): void {
  }

  onProductInfoSubmit() {}
}
