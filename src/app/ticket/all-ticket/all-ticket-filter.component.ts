import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { HttpBodyReqSearchModel } from 'src/app/core/http-body-req-search.model';
import { TicketFilterModel } from 'src/app/core/ticket-filter.model';

@Component({
  selector: 'app-all-ticket-filter',
  templateUrl: './all-ticket-filter.component.html',
  styleUrls: ['./all-ticket-filter.component.scss']
})
export class AllTicketFilterComponent implements OnInit {
  public filterForm: FormGroup;
  public isStatus: boolean;
  public isDate: boolean;

  @Input() filterOption: EventEmitter<TicketFilterModel>;
  @Output() filterChanges: EventEmitter<HttpBodyReqSearchModel>;

  constructor() {
    this.filterChanges = new EventEmitter(null);
  }

  ngOnInit(): void {
    this.isDate = false;
    this.isStatus = false;

    this.initFilterForm();
  }

  private initFilterForm() {
		this.filterForm = new FormGroup({
			searchBy: new FormControl(null),
			searchValue: new FormControl(null),
		});
	}

  public selectionChange(selected: MatSelectChange) {
    this.resetSearchValue();

    this.isStatus = selected.value === '_status' ? true : false;
    this.isDate = selected.value === '_createdDate' ? true : false;
  }

  public resetSearchValue() {
    this.filterForm.get('searchValue').setValue(null);
    this.filterForm.get('searchValue').updateValueAndValidity();
  }

  public onChooseDate(rangeDate) {
    this.filterForm.get('searchValue').setValue(JSON.stringify(rangeDate));
  }

  public resetForm() {
    this.filterForm.reset();
    this.filterChanges.emit(this.filterForm.value);
  }

  public onSubmit() {
    this.filterChanges.emit(this.filterForm.value);
  }

}
