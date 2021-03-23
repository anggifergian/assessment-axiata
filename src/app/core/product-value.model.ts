
export class ProductValueModel {
    public ProductOwner: string;
    public AO_SOC_CD: string;
    public RMD_MAIN_ID: string;
    public ProductName: string;
    public VariantName: string;
    public Benefit: [];
    public CD_MAIN_ID: string;
    public EXPIRATION_DAYS: string;
    public Notification: [];
    public ServiceID: string;
    public Variant: string;
    public ITEMDDATA1: string;
    public SubscriptionType: string;
    public ITEMIDDATA3: string;
    public ITEMIDDATA2: string;
    public REGISTRATION_FEE: string;
    public UPCC_SOC_CD: string;
    public TOTAL_SMS: string;
    public TOTAL_DATA: string;
    public productData: any;

    public convert(dto: any): ProductValueModel {
        if (dto.ProductOwner !== null) {
            this.ProductOwner = dto.ProductOwner;
        }
        if (dto.AO_SOC_CD !== null) {
            this.AO_SOC_CD = dto.AO_SOC_CD;
        }

        if (dto.RMD_MAIN_ID !== null) {
            this.RMD_MAIN_ID = dto.RMD_MAIN_ID;
        }

        if (dto.ProductName !== null) {
            this.ProductName = dto.ProductName;
        }

        if (dto.VariantName !== null) {
            this.VariantName = dto.VariantName;
        }

        if (dto.Benefit !== null) {
            this.Benefit = dto.Benefit;
        }

        if (dto.CD_MAIN_ID !== null) {
            this.CD_MAIN_ID = dto.CD_MAIN_ID;
        }

        if (dto.EXPIRATION_DAYS !== null) {
            this.EXPIRATION_DAYS = dto.EXPIRATION_DAYS;
        }


        if (dto.Notification !== null) {
            this.Notification = dto.Notification;
        }

        if (dto.ServiceID !== null) {
            this.ServiceID = dto.ServiceID;
        }

        if (dto.Variant !== null) {
            this.Variant = dto.Variant;
        }

        if (dto.ITEMDDATA1 !== null) {
            this.ITEMDDATA1 = dto.ITEMDDATA1;
        }

        if (dto.SubscriptionType !== null) {
            this.SubscriptionType = dto.SubscriptionType;
        }

        if (dto.ITEMIDDATA3 !== null) {
            this.ITEMIDDATA3 = dto.ITEMIDDATA3;
        }

        if (dto.ITEMIDDATA2 !== null) {
            this.ITEMIDDATA2 = dto.ITEMIDDATA2;
        }

        if (dto.REGISTRATION_FEE !== null) {
            this.REGISTRATION_FEE = dto.REGISTRATION_FEE;
        }

        if (dto.UPCC_SOC_CD !== null) {
            this.UPCC_SOC_CD = dto.UPCC_SOC_CD;
        }

        if (dto.TOTAL_SMS !== null) {
            this.TOTAL_SMS = dto.TOTAL_SMS;
        }

        if (dto.TOTAL_DATA !== null) {
            this.TOTAL_DATA = dto.TOTAL_DATA;
        }

        if (dto.productData !== null) {
            this.productData = dto.productData;
        }

        return this;
    }
}