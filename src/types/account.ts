export interface Account {
  id: number;
  accountName: string;
  accountPath?: string;
  status?: string;
  features?: string[];
  createdAt?: string;
  updatedAt?: string;
}
