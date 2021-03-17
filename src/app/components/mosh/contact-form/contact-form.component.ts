import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, label: 'Email' },
    { id: 2, label: 'Phone' }
  ];

  genders = [
    { id: 1, label: 'Female' },
    { id: 2, label: 'Male' }
  ];
  onChange(input) {
    console.log(input);
  }

  onSubmit(form) {
    console.log(form);
  }
}
