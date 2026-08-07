import { useState } from "react";
import { Modal } from "../ui/Modal";
import { Uploader } from "../ui/Uploader";
import { useToast } from "../../state/ToastContext";

type HealthReportModalProps = {
  open: boolean;
  onClose: () => void;
};

export function HealthReportModal({ open, onClose }: HealthReportModalProps) {
  const [file, setFile] = useState<string | null>(null);
  const [starting, setStarting] = useState(false);
  const { showToast } = useToast();

  const handleClose = () => {
    setFile(null);
    setStarting(false);
    onClose();
  };

  const startAnalysis = () => {
    setStarting(true);
    window.setTimeout(() => {
      showToast("Demo analiz hazırlanıyor.", "info");
      handleClose();
    }, 900);
  };

  return (
    <Modal open={open} onClose={handleClose} title="Poliçe Sağlık Raporu">
      <p className="text-sm text-[var(--text-secondary)]">
        Poliçeni yükle. Teminatları ve dikkat edilmesi gereken maddeleri listeler.
      </p>

      <div className="mt-5">
        <Uploader label="PDF" onFileReady={setFile} />
      </div>

      <button
        type="button"
        disabled={!file || starting}
        onClick={startAnalysis}
        className="mt-5 w-full rounded-[10px] bg-[var(--brand-primary)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-primary-hover)] disabled:cursor-not-allowed disabled:bg-[var(--surface-secondary)] disabled:text-[var(--text-muted)]"
      >
        {starting ? "Analiz başlatılıyor…" : "Analizi Başlat"}
      </button>
    </Modal>
  );
}
