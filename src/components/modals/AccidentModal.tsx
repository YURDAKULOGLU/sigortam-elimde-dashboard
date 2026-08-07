import { Modal } from "../ui/Modal";
import { useToast } from "../../state/ToastContext";

type AccidentModalProps = {
  open: boolean;
  onClose: () => void;
};

const steps = [
  "Güvenli bir alana geç",
  "Fotoğrafları çek",
  "Karşı tarafın bilgilerini al",
  "Kaza tutanağını hazırla",
  "Poliçe bilgilerine ulaş",
];

export function AccidentModal({ open, onClose }: AccidentModalProps) {
  const { showToast } = useToast();

  return (
    <Modal open={open} onClose={onClose} title="Kaza mı yaptın?">
      <p className="text-sm text-[var(--text-secondary)]">
        Öncelikle senin ve çevrendekilerin güvende olduğundan emin ol.
      </p>

      <ol className="mt-5 flex flex-col gap-3.5">
        {steps.map((step, idx) => (
          <li key={step} className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[12px] font-medium text-[var(--text-secondary)]">
              {idx + 1}
            </span>
            <span className="pt-0.5 text-sm text-[var(--text-primary)]">{step}</span>
          </li>
        ))}
      </ol>

      <div className="mt-6 flex flex-col gap-2.5">
        <button
          type="button"
          onClick={() => {
            showToast("Adım adım kaza yardımı demoda hazırlanıyor.", "info");
            onClose();
          }}
          className="w-full rounded-[10px] bg-[var(--brand-primary)] px-4 py-2.5 text-sm font-medium text-white hover:bg-[var(--brand-primary-hover)]"
        >
          Adım adım devam et
        </button>
        <button
          type="button"
          onClick={() => {
            showToast("Poliçe bilgilerin demoda gösteriliyor.", "info");
            onClose();
          }}
          className="w-full rounded-[10px] border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:border-[var(--brand-primary)]/40 hover:text-[var(--text-primary)]"
        >
          Poliçemi görüntüle
        </button>
      </div>
    </Modal>
  );
}
