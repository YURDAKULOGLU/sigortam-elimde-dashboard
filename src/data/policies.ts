import type { Policy, Renewal } from "../types";

export const user = {
  firstName: "Ahmet",
  fullName: "Ahmet Yurdakul",
  email: "ahmet@example.com",
  initials: "AY",
  activePolicies: 3,
  upcomingRenewals: 1,
  lastAnalysis: "2 gün önce",
};

export const policies: Policy[] = [
  {
    id: "pol-kasko-1",
    type: "kasko",
    provider: "Sompo Sigorta",
    title: "BMW 320i",
    subtitle: "Kasko",
    startDate: "14 Kasım 2025",
    endDate: "14 Kasım 2026",
    daysRemaining: 99,
    status: "active",
  },
  {
    id: "pol-traffic-1",
    type: "traffic",
    provider: "Allianz",
    title: "BMW 320i",
    subtitle: "Zorunlu Trafik",
    startDate: "28 Ağustos 2025",
    endDate: "28 Ağustos 2026",
    daysRemaining: 21,
    status: "expiring",
  },
  {
    id: "pol-home-1",
    type: "home",
    provider: "Türkiye Sigorta",
    title: "İstanbul, Kadıköy",
    subtitle: "Konut",
    startDate: "18 Mart 2026",
    endDate: "18 Mart 2027",
    daysRemaining: 223,
    status: "active",
  },
];

export const renewals: Renewal[] = [
  {
    id: "ren-1",
    policyId: "pol-traffic-1",
    type: "traffic",
    title: "Trafik Sigortası",
    endDate: "28 Ağustos 2026",
    daysRemaining: 21,
  },
  {
    id: "ren-2",
    policyId: "pol-home-1",
    type: "home",
    title: "Konut Sigortası",
    endDate: "18 Mart 2027",
    daysRemaining: 223,
  },
];

export const insight = {
  title: "Poliçelerin hakkında",
  body: "Kasko poliçende anlaşmasız yetkili servis kullanımında %30 kesinti uygulanabilir.",
  cta: "Detayı Gör",
};
