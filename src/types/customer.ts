export interface CustomerProfile {
  id: string;
  mobile: string;
  name: string | null;
  email: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerSession {
  mobile: string;
  customerId: string;
  isAuthenticated: boolean;
}
