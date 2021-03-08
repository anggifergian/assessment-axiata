export class SubProductModel {
	public category: string;
	public subCategory: string;
	public code: string;
	public value: string;
	public orderNo: number;

	public convert(dto: any): SubProductModel {
		if (dto.category !== null) this.category = dto.category;
		if (dto.subCategory !== null) this.subCategory = dto.subCategory;
		if (dto.code !== null) this.code = dto.code;
		if (dto.value !== null) this.value = dto.value;
		if (dto.orderNo !== null) this.orderNo = dto.orderNo;

		return this;
	}
}
