export class ProductDetailModel {
    public ServiceID: string;
    public MpeNo: string;
    public Variant: string;
    public NewSocCd: string;
    public VariantName: string;
    public SubscriptionType: string;
    public ProductOwner: string;
    public TimeBox: string;
    public AO_SOC_CD: string;
    public TOTAL_DATA: string;
    public TOTAL_SMS: string;
    public TOTAL_VOICE: string;
    public UPCC_SOC_CD: string;
    public RMD_MAIN_ID: string;
    public REGISTRATION_FEE: string;
    public ITEMIDDATA1: number;
    public CD_MAIN_ID: string;
    public CD_MAIN_ID_REC: string;
    public CD_MAIN_ID_REG: string;
    public EXPIRATION_DAYS: string;
    public ProductDefinitionSpecifications: string;
    public ContactType: string;
    public Message: string;
    public ProjectName: string;
    public NumberOfBenefit: string;
    public BussinessObjective: string;
    public ProductName: string;
    public WaitingPeriod: string;
    public EXPIRATION_DAYS_REG: string;
    public REGISTRATION_FEE_REG: number;
    public REGISTRATION_FEE_REC: number;
    public SingleActiveTime: string;
    public NameInSingleDb: string;
    public ProgramDescription: string;
    public UPPC_SOC_CD: string;
    public TouchPoint: string;
    public SocLabelSubscription: string;
    public TimebandSubscription: string;
    public SocLabelRec: string;
    public TimebandRec: string;
    public EXPIRATION_DAYS_REC: string;
    public BUCKET_SPEC: string;
    public DATA_BUCKET_SPEC: string;
    public criticalPoint: string;
    public boReceivedAckReport: boolean;
    public brmReceivedAckReport: boolean;
    public itpsReceivedAckReport: boolean;
    public IncludeTax: string;
    public MaxRecCount: string;
    public EnableFlex: string;
    public VoucherCode: string;
    public AppType: string;

    public Benefit: [];
    public Notification: [];
    public File: any[];

    constructor() {
        this.ServiceID = '';
        this.MpeNo = '';
        this.Variant = '';
        this.NewSocCd = '';
        this.VariantName = '';
        this.SubscriptionType = '';
        this.ProductOwner = '';
        this.TimeBox = '';
        this.AO_SOC_CD = '';
        this.TOTAL_DATA = '';
        this.TOTAL_SMS = '';
        this.TOTAL_VOICE = '';
        this.UPCC_SOC_CD = '';
        this.RMD_MAIN_ID = '';
        this.REGISTRATION_FEE = '';
        this.ITEMIDDATA1 = 0;
        this.CD_MAIN_ID = '';
        this.CD_MAIN_ID_REC = '';
        this.CD_MAIN_ID_REG = '';
        this.EXPIRATION_DAYS = '';
        this.ProductDefinitionSpecifications = '';
        this.ContactType = '';
        this.Message = '';
        this.ProjectName = '';
        this.NumberOfBenefit = '';
        this.BussinessObjective = '';
        this.ProductName = '';
        this.WaitingPeriod = '';
        this.EXPIRATION_DAYS_REG = '';
        this.REGISTRATION_FEE_REG = 0;
        this.REGISTRATION_FEE_REC = 0;
        this.SingleActiveTime = '';
        this.NameInSingleDb = '';
        this.ProgramDescription = '';
        this.UPPC_SOC_CD = '';
        this.TouchPoint = '';
        this.SocLabelSubscription = '';
        this.TimebandSubscription = '';
        this.SocLabelRec = '';
        this.TimebandRec = '';
        this.EXPIRATION_DAYS_REC = '';
        this.BUCKET_SPEC = '';
        this.DATA_BUCKET_SPEC = '';
        this.criticalPoint = '';
        this.boReceivedAckReport = null;
        this.brmReceivedAckReport = null;
        this.itpsReceivedAckReport = null;
        this.IncludeTax = '';
        this.MaxRecCount = '';
        this.EnableFlex = '';
        this.VoucherCode = '';
        this.AppType = '';
    }

    public clone(source: any): ProductDetailModel {
		if (source.TouchPoint !== (null || undefined)) {
			this.TouchPoint = source.TouchPoint;
		}

		if (source.File !== (null || undefined)) {
			this.File = source.File;
		}

		if (source.Benefit !== (null || undefined)) {
			this.Benefit = source.Benefit;
		}

		if (source.REGISTRATION_FEE_REC !== (null || undefined)) {
			this.REGISTRATION_FEE_REC = source.REGISTRATION_FEE_REC;
		}

		if (source.EXPIRATION_DAYS_REC !== (null || undefined)) {
			this.EXPIRATION_DAYS_REC  = source.EXPIRATION_DAYS_REC;
		}

		if (source.Notification !== (null || undefined)) {
			this.Notification = source.Notification;
		}

		if (source.SocLabelSubscription !== (null || undefined)) {
			this.SocLabelSubscription = source.SocLabelSubscription;
		}

		if (source.TimebandSubscription !== (null || undefined)) {
			this.TimebandSubscription = source.TimebandSubscription;
		}

		if (source.SocLabelRec !== (null || undefined)) {
			this.SocLabelRec = source.SocLabelRec;
		}

		if (source.TimebandRec !== (null || undefined)) {
			this.TimebandRec = source.TimebandRec;
		}

		if (source.WaitingPeriod !== (null || undefined)) {
			this.WaitingPeriod = source.WaitingPeriod;
		}

		if (source.EXPIRATION_DAYS_REG !== (null || undefined)) {
			this.EXPIRATION_DAYS_REG = source.EXPIRATION_DAYS_REG;
		}

		if (source.REGISTRATION_FEE_REG !== (null || undefined)) {
			this.REGISTRATION_FEE_REG = source.REGISTRATION_FEE_REG;
		}

		if (source.SingleActiveTime !== (null || undefined)) {
			this.SingleActiveTime = source.SingleActiveTime;
		}

		if (source.NameInSingleDb !== (null || undefined)) {
			this.NameInSingleDb = source.NameInSingleDb;
		}

		if (source.ProgramDescription !== (null || undefined)) {
			this.ProgramDescription = source.ProgramDescription;
		}

		if (source.UPPC_SOC_CD !== (null || undefined)) {
			this.UPPC_SOC_CD = source.UPPC_SOC_CD;
		}

		if (source.ServiceID !== (null || undefined)) {
			this.ServiceID = source.ServiceID;
		}

		if (source.NewSocCd !== (null || undefined)) {
			this.NewSocCd = source.NewSocCd;
		}

		if (source.ProductName !== (null || undefined)) {
			this.ProductName = source.ProductName;
		}

		if (source.BussinessObjective !== (null || undefined)) {
			this.BussinessObjective = source.BussinessObjective;
		}

		if (source.MpeNo !== (null || undefined)) {
			this.MpeNo = source.MpeNo;
		}

		if (source.NumberOfBenefit !== (null || undefined)) {
			this.NumberOfBenefit = source.NumberOfBenefit;
		}

		if (source.ProjectName !== (null || undefined)) {
			this.ProjectName = source.ProjectName;
		}

		if (source.TimeBox !== (null || undefined)) {
			this.TimeBox = source.TimeBox;
		}

		if (source.Variant !== (null || undefined)) {
			this.Variant = source.Variant;
		}

		if (source.VariantName !== (null || undefined)) {
			this.VariantName = source.VariantName;
		}

		if (source.SubscriptionType !== (null || undefined)) {
			this.SubscriptionType = source.SubscriptionType;
		}

		if (source.ProductOwner !== (null || undefined)) {
			this.ProductOwner = source.ProductOwner;
		}

		if (source.AO_SOC_CD !== (null || undefined)) {
			this.AO_SOC_CD = source.AO_SOC_CD;
		}

		if (source.TOTAL_DATA !== (null || undefined)) {
			this.TOTAL_DATA = source.TOTAL_DATA;
		}

		if (source.TOTAL_VOICE !== (null || undefined)) {
			this.TOTAL_VOICE = source.TOTAL_VOICE;
		}

		if (source.UPCC_SOC_CD !== (null || undefined)) {
			this.UPCC_SOC_CD = source.UPCC_SOC_CD ;
		}

		if (source.RMD_MAIN_ID !== (null || undefined)) {
			this.RMD_MAIN_ID = source.RMD_MAIN_ID;
		}

		if (source.REGISTRATION_FEE !== (null || undefined)) {
			this.REGISTRATION_FEE = source.REGISTRATION_FEE;
		}

		if (source.ITEMIDDATA1 !== (null || undefined)) {
			this.ITEMIDDATA1 = source.ITEMIDDATA1;
		}

		if (source.CD_MAIN_ID !== (null || undefined)) {
			this.CD_MAIN_ID = source.CD_MAIN_ID;
		}

		if (source.CD_MAIN_ID_REC !== (null || undefined)) {
			this.CD_MAIN_ID_REC = source.CD_MAIN_ID_REC;
		}

		if (source.CD_MAIN_ID_REG !== (null || undefined)) {
			this.CD_MAIN_ID_REG = source.CD_MAIN_ID_REG;
		}

		if (source.EXPIRATION_DAYS !== (null || undefined)) {
			this.EXPIRATION_DAYS = source.EXPIRATION_DAYS;
		}

		if (source.ProductDefinitionSpecifications !== (null || undefined)) {
			this.ProductDefinitionSpecifications = source.ProductDefinitionSpecifications;
		}

		if (source.ContactType !== (null || undefined)) {
			this.ContactType = source.ContactType;
		}

		if (source.Message !== (null || undefined)) {
			this.Message = source.Message;
		}

		if (source.BUCKET_SPEC !== (null || undefined)) {
			this.BUCKET_SPEC = source.BUCKET_SPEC;
		}

		if (source.DATA_BUCKET_SPEC !== (null || undefined)) {
			this.DATA_BUCKET_SPEC = source.DATA_BUCKET_SPEC;
		}

		if (source.criticalPoint !== (null || undefined)) {
			this.criticalPoint = source.criticalPoint;
		}

		if (source.boReceivedAckReport !== (null || undefined)) {
			this.boReceivedAckReport = source.boReceivedAckReport;
		}

		if (source.brmReceivedAckReport !== (null || undefined)) {
			this.brmReceivedAckReport = source.brmReceivedAckReport;
		}

		if (source.itpsReceivedAckReport !== (null || undefined)) {
			this.itpsReceivedAckReport = source.itpsReceivedAckReport;
		}

		if (source.IncludeTax !== (null || undefined)) {
			this.IncludeTax = source.IncludeTax;
		}

		if (source.MaxRecCount !== (null || undefined)) {
			this.MaxRecCount = source.MaxRecCount;
		}

		if (source.EnableFlex !== (null || undefined)) {
			this.EnableFlex = source.EnableFlex;
		}

		if (source.VoucherCode !== (null || undefined)) {
			this.VoucherCode = source.VoucherCode;
		}
        
		if (source.AppType !== (null || undefined)) {
			this.AppType = source.AppType;
		}

		return this;
	}
}