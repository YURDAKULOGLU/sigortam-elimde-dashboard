type EmptyStateProps = {
  onAddPolicy: () => void;
  onSeeSample: () => void;
};

export function EmptyState({ onAddPolicy, onSeeSample }: EmptyStateProps) {
  return (
    <section className="flex flex-col items-center rounded-[14px] border border-[var(--border)] bg-[var(--surface)] px-6 py-12 text-center sm:py-16">
      <h1 className="max-w-md text-[24px] font-semibold leading-snug text-[var(--text-primary)] sm:text-[28px]">
        Henüz poliçen eklenmedi
      </h1>
      <p className="mt-3 max-w-sm text-sm text-[var(--text-secondary)] sm:text-base">
        İlk poliçeni ekleyerek yenileme tarihlerini ve poliçe detaylarını burada takip edebilirsin.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={onAddPolicy}
          className="inline-flex items-center gap-1.5 rounded-[10px] bg-[var(--brand-primary)] px-4 py-2.5 text-sm font-medium text-white hover:bg-[var(--brand-primary-hover)]"
        >
          Poliçe Ekle
        </button>
        <button
          type="button"
          onClick={onSeeSample}
          className="inline-flex items-center gap-1.5 rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:border-[var(--brand-primary)]/40 hover:text-[var(--text-primary)]"
        >
          Örnek Dashboard'u Gör
        </button>
      </div>

      <p className="mt-8 max-w-sm border-t border-[var(--border)] pt-6 text-xs text-[var(--text-muted)]">
        Poliçe takibi, karşılaştırma ve şart görünürlüğü poliçe eklendikten sonra açılır.
      </p>
    </section>
  );
}
