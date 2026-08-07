import { Plus } from "lucide-react";
import { policies } from "../data/policies";
import { policyIcon, policyLabel, urgencyColor, urgencyTone } from "../lib/policyMeta";
import { useToast } from "../state/ToastContext";

type PoliciesSectionProps = {
  onAddPolicy: () => void;
};

export function PoliciesSection({ onAddPolicy }: PoliciesSectionProps) {
  const { showToast } = useToast();

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between">
        <div>
          <h2 className="text-[20px] font-semibold text-[var(--text-primary)]">Sigortalarım</h2>
          <p className="mt-0.5 text-sm text-[var(--text-secondary)]">Aktif poliçelerini tek ekrandan takip et.</p>
        </div>
        <button type="button" className="text-sm font-medium text-[var(--brand-primary)] hover:underline">
          Tümünü Gör
        </button>
      </div>

      <div className="rounded-[14px] border border-[var(--border)] bg-[var(--surface)]">
        {policies.map((policy, idx) => {
          const Icon = policyIcon[policy.type];
          const tone = urgencyTone(policy.daysRemaining);
          return (
            <button
              key={policy.id}
              type="button"
              onClick={() => showToast(`${policyLabel[policy.type]} poliçenin detayları demoda hazırlanıyor.`, "info")}
              className={
                "flex w-full items-center gap-4 px-4 py-3.5 text-left transition-colors hover:bg-[var(--surface-secondary)] sm:px-5" +
                (idx !== 0 ? " border-t border-[var(--border)]" : "")
              }
            >
              <Icon size={18} className="shrink-0 text-[var(--text-muted)]" aria-hidden />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium text-[var(--text-primary)]">{policyLabel[policy.type]}</span>
                  <span className="truncate text-xs text-[var(--text-muted)]">{policy.provider}</span>
                </div>
                <div className="mt-0.5 text-xs text-[var(--text-muted)]">{policy.title}</div>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-sm text-[var(--text-secondary)]">{policy.endDate}</div>
                <div className="mt-0.5 text-xs font-medium" style={{ color: urgencyColor[tone] }}>
                  {policy.daysRemaining} gün kaldı
                </div>
              </div>
            </button>
          );
        })}

        <button
          type="button"
          onClick={onAddPolicy}
          className="flex w-full items-center gap-3 border-t border-dashed border-[var(--border)] px-4 py-3.5 text-left text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-primary)] sm:px-5"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] border border-dashed border-[var(--border)] text-[var(--text-muted)]">
            <Plus size={15} aria-hidden />
          </span>
          <span className="text-sm font-medium">Yeni Poliçe Ekle</span>
        </button>
      </div>
    </section>
  );
}
