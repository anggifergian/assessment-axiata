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

  constructor() { }

  ngOnInit(): void {
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

  nexStepProduct(productForm: FormGroup, stepper: MatStepper) {
    console.log(productForm, stepper)
  }

}
