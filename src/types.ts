export type PolicyType =
  | "kasko"
  | "traffic"
  | "health"
  | "home"
  | "dask"
  | "travel"
  | "life";

export type PolicyStatus = "active" | "expiring" | "expired";

export type Policy = {
  id: string;
  type: PolicyType;
  provider: string;
  title: string;
  subtitle?: string;
  startDate: string;
  endDate: string;
  daysRemaining: number;
  status: PolicyStatus;
};

export type Renewal = {
  id: string;
  policyId: string;
  type: PolicyType;
  title: string;
  endDate: string;
  daysRemaining: number;
};

export type ToastKind = "success" | "info" | "error";

export type ToastItem = {
  id: string;
  kind: ToastKind;
  message: string;
};
