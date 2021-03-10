export class SosyModel {
	public category: string;
	public subCategory: string;
	public code: string;
	public value: string;
	public orderNo: number;

	public convert(dto: any): SosyModel {
		this.category = dto.category;
		this.subCategory = dto.subCategory;
		this.code = dto.code;
		this.value = dto.value;
		this.orderNo = dto.orderNo;

		return this;
	}
}
