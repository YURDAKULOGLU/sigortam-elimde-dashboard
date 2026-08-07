import { useCallback, useRef, useState } from "react";
import { FileText, Check, AlertCircle } from "lucide-react";

type UploadState = "empty" | "uploading" | "success" | "error";

type UploaderProps = {
  label: string;
  onFileReady?: (fileName: string) => void;
  compact?: boolean;
};

const FAKE_NAMES = ["police-sompo-kasko.pdf", "police-allianz-trafik.pdf", "police-ornek.pdf"];

export function Uploader({ label, onFileReady, compact = false }: UploaderProps) {
  const [state, setState] = useState<UploadState>("empty");
  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const runUpload = useCallback(
    (name: string) => {
      if (!name.toLowerCase().endsWith(".pdf")) {
        setState("error");
        return;
      }
      setFileName(name);
      setState("uploading");
      setProgress(0);
      const start = Date.now();
      const tick = () => {
        const elapsed = Date.now() - start;
        const pct = Math.min(100, Math.round((elapsed / 900) * 100));
        setProgress(pct);
        if (pct < 100) {
          requestAnimationFrame(tick);
        } else {
          setState("success");
          onFileReady?.(name);
        }
      };
      requestAnimationFrame(tick);
    },
    [onFileReady],
  );

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    runUpload(files[0].name);
  };

  const useSample = () => {
    const name = FAKE_NAMES[Math.floor(Math.random() * FAKE_NAMES.length)];
    runUpload(name);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        className="sr-only"
        onChange={(e) => handleFiles(e.target.files)}
        aria-label={label}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          handleFiles(e.dataTransfer.files);
        }}
        className={
          "flex w-full flex-col items-center justify-center gap-1.5 rounded-[10px] border border-dashed px-4 text-center transition-colors " +
          (compact ? "py-6" : "py-8") +
          " " +
          (state === "error"
            ? "border-[var(--danger)] bg-[var(--danger-soft)]"
            : dragOver
              ? "border-[var(--brand-primary)] bg-[var(--brand-primary-soft)]"
              : state === "success"
                ? "border-[var(--success)]/40 bg-[var(--success-soft)]"
                : "border-[var(--border)] bg-[var(--surface-secondary)] hover:border-[var(--brand-primary)]")
        }
      >
        {state === "empty" && (
          <>
            <FileText size={18} className="text-[var(--text-muted)]" aria-hidden />
            <span className="text-sm text-[var(--text-primary)]">
              {label} yüklemek için tıkla
              <br />
              <span className="text-[var(--text-muted)]">veya dosyayı buraya sürükle</span>
            </span>
            <span className="text-xs text-[var(--text-muted)]">PDF · Maksimum 20 MB</span>
          </>
        )}
        {state === "uploading" && (
          <>
            <span className="text-sm text-[var(--text-primary)]">{fileName}</span>
            <span className="text-xs text-[var(--text-muted)]">Yükleniyor…</span>
            <div className="mt-1 h-1.5 w-full max-w-[180px] overflow-hidden rounded-full bg-[var(--border)]">
              <div
                className="h-full rounded-full bg-[var(--brand-primary)] transition-[width] duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </>
        )}
        {state === "success" && (
          <>
            <span className="flex items-center gap-1.5 text-sm font-medium text-[var(--success)]">
              <Check size={16} aria-hidden /> {fileName}
            </span>
            <span className="text-xs text-[var(--text-muted)]">Dosya hazır</span>
          </>
        )}
        {state === "error" && (
          <>
            <span className="flex items-center gap-1.5 text-sm font-medium text-[var(--danger)]">
              <AlertCircle size={16} aria-hidden /> Bu dosya yüklenemedi.
            </span>
            <span className="text-xs text-[var(--text-muted)]">Lütfen PDF formatında tekrar dene.</span>
          </>
        )}
      </button>
      {state === "empty" && (
        <button
          type="button"
          onClick={useSample}
          className="mt-2 text-xs font-medium text-[var(--brand-primary)] hover:underline"
        >
          Örnek poliçeyle dene
        </button>
      )}
    </div>
  );
}

export type { UploadState };
