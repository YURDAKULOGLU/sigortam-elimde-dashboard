import { renewals } from "../data/policies";
import { policyIcon } from "../lib/policyMeta";
import { urgencyColor, urgencyTone } from "../lib/policyMeta";
import { useToast } from "../state/ToastContext";

export function RenewalsSection() {
  const { showToast } = useToast();

  return (
    <section className="flex flex-col gap-3 lg:col-span-7">
      <h2 className="text-[20px] font-semibold text-[var(--text-primary)]">Yaklaşan Yenilemeler</h2>

      <div className="rounded-[14px] border border-[var(--border)] bg-[var(--surface)]">
        {renewals.map((renewal, idx) => {
          const Icon = policyIcon[renewal.type];
          const tone = urgencyTone(renewal.daysRemaining);
          return (
            <div
              key={renewal.id}
              className={
                "flex items-center gap-4 px-4 py-3.5 sm:px-5" + (idx !== 0 ? " border-t border-[var(--border)]" : "")
              }
            >
              <Icon size={18} className="shrink-0 text-[var(--text-muted)]" aria-hidden />
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-[var(--text-primary)]">{renewal.title}</div>
                <div className="mt-0.5 text-xs text-[var(--text-muted)]">{renewal.endDate}</div>
              </div>
              <span className="shrink-0 text-xs font-medium" style={{ color: urgencyColor[tone] }}>
                {renewal.daysRemaining} gün kaldı
              </span>
              <button
                type="button"
                onClick={() => showToast(`${renewal.title} demoda inceleniyor.`, "info")}
                className="shrink-0 rounded-[8px] border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] hover:border-[var(--brand-primary)]/40 hover:text-[var(--brand-primary)]"
              >
                İncele
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
