import { TicketFilterModel } from "./ticket-filter.model";

export class ProductFieldModel {
    public subProduct: string;
    public name: string;
    public type: string;
    public title: string;
    public display: string;
    public orderNo: number;
    public valueCategory: string;
    public priceField: boolean;
    public editable: boolean;;
    public mandatory: boolean;
    public options: TicketFilterModel;
    public showInputText: boolean;
    public visible: boolean;

    constructor() {
        this.showInputText = false;
    }

    public convert(dto: any): ProductFieldModel {
        if (dto.subProduct !== null) {
            this.subProduct = dto.subProduct;
        }
        if (dto.name !== null) {
            this.name = dto.name;
        }
        if (dto.type !== null) {
            this.type = dto.type ? dto.type.toLowerCase() : dto.type;
        }
        if (dto.title !== null) {
            this.title = dto.title;
        }
        if (dto.display !== null) {
            this.display = dto.display;
        }
        if (dto.orderNo !== null) {
            this.orderNo = dto.orderNo;
        }
        if (dto.valueCategory !== null) {
            this.valueCategory = dto.valueCategory;
        }
        if (dto.priceField !== null) {
            this.priceField = dto.priceField;
        }
        if (dto.editable !== null) {
            this.editable = dto.editable;
        }
        if (dto.mandatory !== null) {
            this.mandatory = dto.mandatory;
        }
        if (dto.options !== null) {
            this.options = dto.options.reduce((result, each) => {
                result.push(new TicketFilterModel().convert(each));
                return result;
            }, []);
        }

        return this;
    }
}