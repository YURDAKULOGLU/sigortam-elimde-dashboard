import { ArrowRight, TriangleAlert } from "lucide-react";
import { policies } from "../data/policies";

type QuickActionsProps = {
  onCompare: () => void;
  onHealthReport: () => void;
  onAccident: () => void;
};

export function QuickActions({ onCompare, onHealthReport, onAccident }: QuickActionsProps) {
  const [policyA, policyB] = policies;

  return (
    <section aria-label="Ne yapmak istersin?" className="flex flex-col gap-4">
      <h2 className="text-[20px] font-semibold text-[var(--text-primary)]">Ne yapmak istersin?</h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Poliçe Karşılaştır — dominant working area, 6/12 */}
        <div className="flex flex-col justify-between rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-5 transition-[box-shadow,border-color] duration-150 hover:border-[var(--brand-primary)]/30 hover:shadow-[0_4px_16px_rgba(16,24,40,0.06)] lg:col-span-6">
          <div>
            <h3 className="text-[17px] font-semibold text-[var(--text-primary)]">Poliçe Karşılaştır</h3>
            <p className="mt-1.5 text-sm text-[var(--text-secondary)]">
              İki poliçeyi yan yana incele. Teminat, limit ve önemli şartlardaki farkları kolayca gör.
            </p>

            <div className="mt-5 flex items-center justify-center gap-3 rounded-[10px] bg-[var(--surface-secondary)] px-4 py-4 sm:gap-6 sm:px-6">
              <div className="text-center">
                <div className="text-[11px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
                  Poliçe A
                </div>
                <div className="mt-1 text-sm font-medium text-[var(--text-primary)]">{policyA.provider}</div>
              </div>
              <ArrowRight size={16} className="shrink-0 text-[var(--text-muted)]" aria-hidden />
              <div className="text-center">
                <div className="text-[11px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
                  Poliçe B
                </div>
                <div className="mt-1 text-sm font-medium text-[var(--text-primary)]">{policyB.provider}</div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onCompare}
            className="mt-5 inline-flex items-center gap-1.5 self-start rounded-[10px] bg-[var(--brand-primary)] px-4 py-2.5 text-sm font-medium text-white hover:bg-[var(--brand-primary-hover)]"
          >
            Poliçeleri Karşılaştır
            <ArrowRight size={15} aria-hidden />
          </button>
        </div>

        {/* Poliçe Sağlık Raporu — compact informational panel, 3/12 */}
        <button
          type="button"
          onClick={onHealthReport}
          className="flex flex-col justify-between rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-5 text-left transition-[box-shadow,border-color] duration-150 hover:border-[var(--brand-primary)]/30 hover:shadow-[0_4px_16px_rgba(16,24,40,0.06)] lg:col-span-3"
        >
          <div>
            <div className="text-[11px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
              Poliçe Sağlık Raporu
            </div>
            <p className="mt-2.5 text-sm text-[var(--text-secondary)]">
              Poliçendeki güçlü tarafları ve dikkat edilmesi gereken şartları anlaşılır biçimde gör.
            </p>
            <div className="mt-4 border-t border-[var(--border)] pt-3">
              <div className="text-xs text-[var(--text-muted)]">Son analiz</div>
              <div className="mt-0.5 text-sm font-medium text-[var(--text-primary)]">Kasko · Sompo</div>
              <div className="mt-1 text-xs text-[var(--warning)]">3 dikkat noktası bulundu</div>
            </div>
          </div>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--brand-primary)]">
            Poliçemi Analiz Et
            <ArrowRight size={14} aria-hidden />
          </span>
        </button>

        {/* Kaza Yaptım — safety action, distinct warm tone, 3/12 */}
        <button
          type="button"
          onClick={onAccident}
          className="flex flex-col justify-between rounded-[14px] border border-[var(--accident-border)] bg-[var(--accident-bg)] p-5 text-left transition-[box-shadow] duration-150 hover:shadow-[0_4px_16px_rgba(217,119,6,0.08)] lg:col-span-3"
        >
          <div>
            <TriangleAlert size={18} className="text-[var(--warning)]" aria-hidden />
            <h3 className="mt-2.5 text-[17px] font-semibold text-[var(--text-primary)]">Kaza Yaptım</h3>
            <p className="mt-1.5 text-sm text-[var(--text-secondary)]">
              Kaza sonrası yapman gerekenleri adım adım takip et ve poliçe bilgilerine hızla ulaş.
            </p>
          </div>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--text-primary)]">
            Yardımı Başlat
            <ArrowRight size={14} aria-hidden />
          </span>
        </button>
      </div>
    </section>
  );
}
