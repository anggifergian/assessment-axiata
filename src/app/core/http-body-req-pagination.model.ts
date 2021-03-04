export class HttpBodyReqPaginationModel {
	public pageNum: string;
	public pageSize: string;

	constructor() {
		this.pageNum = '1';
		this.pageSize = '10';
	}

	public convert(): any {
		return {
			pageNum: this.pageNum,
			pageSize: this.pageSize,
		};
	}
}
