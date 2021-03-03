import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import Swal from "sweetalert2";
import { BaseOptionModel } from "../core/base-option.model";
import { UsmFilterEnum } from "../shared/usm-filter-config.const";
import { generateEnumOption } from "../utils/enum-to-option-generator";

@Component({
    selector: "usm-filter",
    templateUrl: "./usm-filter.component.html"
})
export class  UsmFilterComponent implements OnInit {
    filterForm: FormGroup;
    filterOption: BaseOptionModel[];
    @Output() onFilterChanges = new EventEmitter();

    ngOnInit() {
        this.filterForm = new FormGroup({
            searchBy: new FormControl(null),
            searchValue: new FormControl(null)
        });

        this.filterOption = generateEnumOption(UsmFilterEnum);
    }

    resetSearchValue() {
        this.filterForm.get("searchValue").setValue(null);
    }

    resetForm() {
        this.filterForm.reset();
    }

    onSubmit() {
        let typeInput: String;
        const valueInput = this.filterForm.get('searchValue').value;
        typeInput = this.filterForm.get('searchBy').value;

        if (typeInput === 'id' && !(Number(valueInput)))
          Swal.fire("Oopss...", 'Id harus berupa nomor!', 'error');
        else this.onFilterChanges.emit(this.filterForm.value);
    }
}