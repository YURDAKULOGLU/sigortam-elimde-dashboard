import { insight } from "../data/policies";
import { useToast } from "../state/ToastContext";

export function PolicyInsight() {
  const { showToast } = useToast();

  return (
    <section className="flex flex-col justify-between rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-5 lg:col-span-5">
      <div>
        <h2 className="text-[16px] font-semibold text-[var(--text-primary)]">{insight.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{insight.body}</p>
      </div>
      <button
        type="button"
        onClick={() => showToast("Demo analiz hazırlanıyor.", "info")}
        className="mt-4 self-start text-sm font-medium text-[var(--brand-primary)] hover:underline"
      >
        {insight.cta}
      </button>
    </section>
  );
}
