import { Component, Input } from "@angular/core";
import { TableModel } from "../core/table.model";

@Component({
    selector: "usm-table",
    templateUrl: "./usm-table.component.html"
})
export class UsmTableComponent {
    @Input() public table: TableModel;

    sort() {
        console.log("Sorting...");
    }
}