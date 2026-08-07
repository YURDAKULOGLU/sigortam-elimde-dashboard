import { useState } from "react";
import { Modal } from "../ui/Modal";
import { Uploader } from "../ui/Uploader";
import { useToast } from "../../state/ToastContext";

type CompareModalProps = {
  open: boolean;
  onClose: () => void;
};

export function CompareModal({ open, onClose }: CompareModalProps) {
  const [fileA, setFileA] = useState<string | null>(null);
  const [fileB, setFileB] = useState<string | null>(null);
  const { showToast } = useToast();

  const canCompare = Boolean(fileA && fileB);

  const handleClose = () => {
    setFileA(null);
    setFileB(null);
    onClose();
  };

  const useSamples = () => {
    setFileA("police-sompo-kasko.pdf");
    setFileB("police-allianz-trafik.pdf");
    showToast("Örnek poliçeler yüklendi.", "success");
  };

  return (
    <Modal open={open} onClose={handleClose} title="Poliçelerini Karşılaştır">
      <p className="text-sm text-[var(--text-secondary)]">Karşılaştırmak istediğin iki poliçeyi yükle.</p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <div className="mb-1.5 text-[11px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
            Poliçe A
          </div>
          <Uploader label="PDF" onFileReady={setFileA} />
        </div>
        <div>
          <div className="mb-1.5 text-[11px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
            Poliçe B
          </div>
          <Uploader label="PDF" onFileReady={setFileB} />
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center gap-3">
        <button
          type="button"
          disabled={!canCompare}
          onClick={() => {
            showToast("Karşılaştırma demoda hazırlanıyor.", "info");
            handleClose();
          }}
          className="w-full rounded-[10px] bg-[var(--brand-primary)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-primary-hover)] disabled:cursor-not-allowed disabled:bg-[var(--surface-secondary)] disabled:text-[var(--text-muted)]"
        >
          Karşılaştır
        </button>
        <button
          type="button"
          onClick={useSamples}
          className="text-sm font-medium text-[var(--brand-primary)] hover:underline"
        >
          Örnek poliçelerle dene
        </button>
      </div>
    </Modal>
  );
}
