import { DatePipe } from '@angular/common/';
import { types } from 'util';

export class HttpBodyReqSearchModel {
    public searchBy: string;
    public searchValue: string;
    private datePipe: DatePipe;

    constructor() {
        this.datePipe = new DatePipe('ID-id');
    }

    public clone(source: any): HttpBodyReqSearchModel {
        if (source.searchBy) { this.searchBy = source.searchBy; }
        if (source.searchValue) {
            this.searchValue =
                types.isDate(source.searchValue)
                ? this.datePipe.transform(source.searchValue, 'yyyy-MM-dd')
                : source.searchValue;
        }
        return this;
    }
}
