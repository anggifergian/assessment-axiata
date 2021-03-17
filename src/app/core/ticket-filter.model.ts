export class TicketFilterModel {
    public addInfo1: string;
    public category: string;
    public code: string;
    public orderNo: number;
    public subCategory: string;
    public value: string;

    public convert(dto: any): TicketFilterModel {
        if (dto.addInfo1 !== null) { this.addInfo1 = dto.addInfo1; }
        if (dto.category !== null) { this.category = dto.category; }
        if (dto.code !== null) { this.code = dto.code; }
        if (dto.orderNo !== null) { this.orderNo = dto.orderNo; }
        if (dto.subCategory !== null) { this.subCategory = dto.subCategory; }
        if (dto.value !== null) { this.value = dto.value; }

        return this;
    }
}
