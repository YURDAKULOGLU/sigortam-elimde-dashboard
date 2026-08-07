import { Car, ShieldCheck, HeartPulse, Home, Building2, Plane, HeartHandshake } from "lucide-react";
import type { PolicyType } from "../types";

export const policyIcon: Record<PolicyType, typeof Car> = {
  kasko: Car,
  traffic: ShieldCheck,
  health: HeartPulse,
  home: Home,
  dask: Building2,
  travel: Plane,
  life: HeartHandshake,
};

export const policyLabel: Record<PolicyType, string> = {
  kasko: "Kasko",
  traffic: "Zorunlu Trafik",
  health: "Sağlık",
  home: "Konut",
  dask: "DASK",
  travel: "Seyahat",
  life: "Hayat",
};

export function urgencyTone(daysRemaining: number): "neutral" | "soft" | "amber" | "red" {
  if (daysRemaining < 7) return "red";
  if (daysRemaining < 30) return "amber";
  if (daysRemaining < 90) return "soft";
  return "neutral";
}

export const urgencyColor: Record<ReturnType<typeof urgencyTone>, string> = {
  neutral: "var(--text-muted)",
  soft: "var(--info)",
  amber: "var(--warning)",
  red: "var(--danger)",
};
