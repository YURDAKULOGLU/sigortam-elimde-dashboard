import { HelpCircle, Bell } from "lucide-react";
import { user } from "../data/policies";
import { useToast } from "../state/ToastContext";

export function AppHeader() {
  const { showToast } = useToast();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[var(--border)] bg-[var(--surface)]/95 px-4 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[var(--brand-primary)] text-[13px] font-semibold text-white lg:hidden">
          S
        </span>
        <span className="text-sm font-medium text-[var(--text-secondary)]">Genel Bakış</span>
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          aria-label="Yardım"
          onClick={() => showToast("Demo sürümünde örnek veriler gösteriliyor.", "info")}
          className="flex h-9 w-9 items-center justify-center rounded-[8px] text-[var(--text-muted)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-primary)]"
        >
          <HelpCircle size={18} aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Bildirimler, 2 okunmamış"
          onClick={() => showToast("Demo sürümünde örnek veriler gösteriliyor.", "info")}
          className="relative flex h-9 w-9 items-center justify-center rounded-[8px] text-[var(--text-muted)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-primary)]"
        >
          <Bell size={18} aria-hidden />
          <span className="absolute right-1 top-1 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[var(--danger)] px-[3px] text-[10px] font-medium text-white">
            2
          </span>
        </button>
        <span className="ml-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-secondary)] text-[12px] font-medium text-[var(--text-secondary)]">
          {user.initials}
        </span>
      </div>
    </header>
  );
}
