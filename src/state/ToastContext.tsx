import { createContext, useCallback, useContext, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { ToastItem, ToastKind } from "../types";

type ToastContextValue = {
  showToast: (message: string, kind?: ToastKind) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const counter = useRef(0);

  const showToast = useCallback((message: string, kind: ToastKind = "info") => {
    counter.current += 1;
    const id = `toast-${counter.current}`;
    setToasts((prev) => [...prev, { id, kind, message }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3600);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className="fixed bottom-4 left-1/2 z-[100] flex w-full max-w-sm -translate-x-1/2 flex-col gap-2 px-4 sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0"
        aria-live="polite"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            style={{ animation: "toast-in 180ms ease-out" }}
            className={
              "flex items-start gap-2.5 rounded-[10px] border px-4 py-3 text-sm shadow-[0_4px_16px_rgba(16,24,40,0.12)] " +
              (t.kind === "success"
                ? "border-[var(--success)]/25 bg-white text-[var(--text-primary)]"
                : t.kind === "error"
                  ? "border-[var(--danger)]/25 bg-white text-[var(--text-primary)]"
                  : "border-[var(--border)] bg-white text-[var(--text-primary)]")
            }
          >
            <span
              aria-hidden
              className={
                "mt-1 h-1.5 w-1.5 shrink-0 rounded-full " +
                (t.kind === "success"
                  ? "bg-[var(--success)]"
                  : t.kind === "error"
                    ? "bg-[var(--danger)]"
                    : "bg-[var(--info)]")
              }
            />
            <span>{t.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
