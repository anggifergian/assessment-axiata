export class RequestModel {
    public category: string;
    public subCategory: string;
    public code: string;
    public value: string;
    public orderNo: number;

    public convert(dto: any): RequestModel {
        this.category = dto.category;
        this.subCategory = dto.subCategory;
        this.code = dto.code;
        this.value = dto.value;
        this.orderNo = dto.orderNo;

        return this;
    }
}
