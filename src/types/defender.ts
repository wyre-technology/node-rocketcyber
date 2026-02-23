export interface DefenderStatus {
  accountId: number;
  accountName?: string;
  totalEndpoints?: number;
  protectedEndpoints?: number;
  unprotectedEndpoints?: number;
  endpointDetails?: DefenderEndpoint[];
}

export interface DefenderEndpoint {
  agentId?: string;
  hostname?: string;
  status?: string;
  version?: string;
  lastScan?: string;
  definitions?: string;
  realTimeProtection?: boolean;
}

export interface DefenderParams {
  accountId?: number;
}
