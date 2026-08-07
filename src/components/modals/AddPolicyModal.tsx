import { useState } from "react";
import { Modal } from "../ui/Modal";
import { Uploader } from "../ui/Uploader";
import { policyIcon, policyLabel } from "../../lib/policyMeta";
import type { PolicyType } from "../../types";
import { useToast } from "../../state/ToastContext";

type AddPolicyModalProps = {
  open: boolean;
  onClose: () => void;
};

const types: PolicyType[] = ["kasko", "traffic", "health", "home", "dask", "travel", "life"];

const fieldsByType: Record<PolicyType, string[]> = {
  kasko: ["Araç plakası", "Araç modeli"],
  traffic: ["Araç plakası", "Araç modeli"],
  health: ["Sigortalı kişi", "Bitiş tarihi"],
  home: ["Adres", "Bitiş tarihi"],
  dask: ["Adres", "Bitiş tarihi"],
  travel: ["Seyahat tarihi aralığı"],
  life: ["Sigortalı kişi"],
};

export function AddPolicyModal({ open, onClose }: AddPolicyModalProps) {
  const [selectedType, setSelectedType] = useState<PolicyType | null>(null);
  const [file, setFile] = useState<string | null>(null);
  const { showToast } = useToast();

  const handleClose = () => {
    setSelectedType(null);
    setFile(null);
    onClose();
  };

  const submit = () => {
    showToast("Poliçen başarıyla eklendi.", "success");
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose} title="Yeni Poliçe Ekle">
      <p className="text-sm text-[var(--text-secondary)]">
        Poliçeni ekleyerek yenileme tarihlerini ve önemli detaylarını tek yerden takip et.
      </p>

      <div className="mt-5">
        <div className="mb-2 text-[11px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
          Poliçe türü
        </div>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => {
            const Icon = policyIcon[type];
            const active = selectedType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                aria-pressed={active}
                className={
                  "flex items-center gap-1.5 rounded-[8px] border px-3 py-1.5 text-sm transition-colors " +
                  (active
                    ? "border-[var(--brand-primary)] bg-[var(--brand-primary-soft)] font-medium text-[var(--brand-primary)]"
                    : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--brand-primary)]/40")
                }
              >
                <Icon size={14} aria-hidden />
                {policyLabel[type]}
              </button>
            );
          })}
        </div>
      </div>

      {selectedType && (
        <div className="mt-5 flex flex-col gap-3.5">
          {fieldsByType[selectedType].map((field) => (
            <label key={field} className="block">
              <span className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">{field}</span>
              <input
                type="text"
                placeholder={field}
                className="w-full rounded-[8px] border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--brand-primary)]"
              />
            </label>
          ))}
          <div>
            <span className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">Poliçe PDF</span>
            <Uploader label="PDF" onFileReady={setFile} compact />
          </div>

          <button
            type="button"
            disabled={!file}
            onClick={submit}
            className="mt-1 w-full rounded-[10px] bg-[var(--brand-primary)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-primary-hover)] disabled:cursor-not-allowed disabled:bg-[var(--surface-secondary)] disabled:text-[var(--text-muted)]"
          >
            Poliçe Ekle
          </button>
        </div>
      )}
    </Modal>
  );
}
