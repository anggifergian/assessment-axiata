import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

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

  constructor() { }

  ngOnInit(): void {
    this.typebenefit = this.getItem('requestDetail');
    this.typelegacy = this.getItem('typeLegacy');

    if (this.checkLegacyType() === 'EXIST') {
      this.getProductDetails();
    }

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

  nexStepProduct(productForm: FormGroup, stepper: MatStepper) {
    console.log(productForm, stepper);
  }

  getProductDetails() {
    console.log('Getting product details...');
  }

  checkLegacyType() {
    return this.typelegacy === 'CREATE_NEW_SOCD' ||
      this.typelegacy === 'CREATE_EXIST_SOCD' ||
      this.typelegacy === 'REVISE' ||
      this.typelegacy === 'COMPLIMENT' ?
      'EXIST' : 'NEW';
  }

  isRevise() {

  }
}
