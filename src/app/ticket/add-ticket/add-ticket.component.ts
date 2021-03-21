import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ProductDetailModel } from "../../core/product-detail.model"

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent implements OnInit {

  productFormGroup: FormGroup;
  packetFormGroup: FormGroup;
  benefitFormGroup: FormGroup;
  notifFormGroup: FormGroup;
  notesFormGroup: FormGroup;
  typebenefit: string;
  typelegacy: string;

  public productDetail: ProductDetailModel;

  public isLoadingTicketInfo: boolean = false;
  public isLoading: boolean = false;

  constructor() { }

  private createForm() {
    this.productFormGroup = new FormGroup({
      MpeNo: new FormControl(null, Validators.required),
      TouchPoint: new FormControl(null, Validators.required),
    });

    this.packetFormGroup = new FormGroup({
      secondCtrl: new FormControl(null),
    });

    this.benefitFormGroup = new FormGroup({
      amount_of_benefit: new FormControl(null, Validators.required),
    });

    this.notifFormGroup = new FormGroup({
      secondCtrl: new FormControl(null),
    });

    this.notesFormGroup = new FormGroup({
      secondCtrl: new FormControl(null),
    });
  }

  getItem(item: string) {
    return localStorage.getItem(item);
  }

  ngOnInit(): void {
    this.createForm();

    this.productDetail = new ProductDetailModel();
  }

  onSubmit() {
    this.isLoading = true;
  }

  checkLegacyType() {
    return this.typelegacy === 'CREATE_NEW_SOCD' ||
      this.typelegacy === 'CREATE_EXIST_SOCD' ||
      this.typelegacy === 'REVISE' ||
      this.typelegacy === 'COMPLIMENT' ?
      'EXIST' : 'NEW';
  }

  nextStepProduct(productForm: FormGroup, stepper: MatStepper) {
    console.log("Product Information:", productForm);
    console.log("Stepper:", stepper);
    stepper.selectedIndex = 1;
  }

  nextStepPacket(stepper: MatStepper) {
    stepper.selectedIndex = 2;
  }

  nextStepBenefit(stepper: MatStepper) {
    stepper.selectedIndex = 3;
  }

  nextStepNotification(stepper: MatStepper) {
    stepper.selectedIndex = 4;
  }

  nextStepNotes(stepper: MatStepper) {
    stepper.selectedIndex = 5;
  }
}
