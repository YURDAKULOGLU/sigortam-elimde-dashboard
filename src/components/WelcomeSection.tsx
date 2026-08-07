import { Plus } from "lucide-react";
import { user, renewals } from "../data/policies";

type WelcomeSectionProps = {
  onAddPolicy: () => void;
};

function greeting() {
  const hour = new Date().getHours();
  if (hour < 6) return "İyi geceler";
  if (hour < 11) return "Günaydın";
  if (hour < 18) return "İyi günler";
  return "İyi akşamlar";
}

function statusLine() {
  const nearest = [...renewals].sort((a, b) => a.daysRemaining - b.daysRemaining)[0];
  const policyCount = `${user.activePolicies} aktif poliçen var.`;
  if (!nearest) return policyCount;
  return `${policyCount} ${nearest.title} yenilenmesine ${nearest.daysRemaining} gün kaldı.`;
}

export function WelcomeSection({ onAddPolicy }: WelcomeSectionProps) {
  return (
    <section className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-[26px] font-semibold leading-tight text-[var(--text-primary)] sm:text-[32px]">
          {greeting()}, {user.firstName}
        </h1>
        <p className="mt-1.5 text-sm text-[var(--text-secondary)] sm:text-base">{statusLine()}</p>
      </div>
      <button
        type="button"
        onClick={onAddPolicy}
        className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-[10px] bg-[var(--brand-primary)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-primary-hover)]"
      >
        <Plus size={16} aria-hidden />
        Poliçe Ekle
      </button>
    </section>
  );
}
