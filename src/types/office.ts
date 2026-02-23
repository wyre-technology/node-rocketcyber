export interface OfficeStatus {
  accountId: number;
  accountName?: string;
  totalUsers?: number;
  protectedUsers?: number;
  unprotectedUsers?: number;
  licenses?: OfficeLicense[];
}

export interface OfficeLicense {
  name?: string;
  status?: string;
  assignedTo?: string;
  createdAt?: string;
}

export interface OfficeParams {
  accountId?: number;
}
