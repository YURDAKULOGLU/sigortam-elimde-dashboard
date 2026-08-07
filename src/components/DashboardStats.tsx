import { user } from "../data/policies";

const stats = [
  { label: "Aktif Poliçeler", value: String(user.activePolicies) },
  { label: "Yaklaşan Yenileme", value: String(user.upcomingRenewals) },
  { label: "Son Analiz", value: user.lastAnalysis },
];

export function DashboardStats() {
  return (
    <section
      aria-label="Poliçe özeti"
      className="grid grid-cols-3 divide-x divide-[var(--border)] rounded-[12px] border border-[var(--border)] bg-[var(--surface)]"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="px-3 py-3.5 text-center sm:px-5 sm:py-4 sm:text-left">
          <div className="text-[20px] font-semibold leading-none text-[var(--text-primary)] sm:text-[22px]">
            {stat.value}
          </div>
          <div className="mt-1.5 text-[12px] text-[var(--text-muted)] sm:text-[13px]">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}
