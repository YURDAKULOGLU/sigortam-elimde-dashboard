import { Home, FileStack, Plus, LifeBuoy, User } from "lucide-react";

type BottomNavProps = {
  onAddPolicy: () => void;
};

export function BottomNav({ onAddPolicy }: BottomNavProps) {
  return (
    <nav
      aria-label="Alt gezinme"
      className="fixed inset-x-0 bottom-0 z-40 flex items-stretch justify-around border-t border-[var(--border)] bg-[var(--surface)] pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <button type="button" className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[var(--brand-primary)]">
        <Home size={19} aria-hidden />
        <span className="text-[11px] font-medium">Ana Sayfa</span>
      </button>
      <button type="button" className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[var(--text-muted)]">
        <FileStack size={19} aria-hidden />
        <span className="text-[11px]">Poliçeler</span>
      </button>
      <button
        type="button"
        onClick={onAddPolicy}
        aria-label="Poliçe Ekle"
        className="flex flex-1 flex-col items-center justify-center py-1.5"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-primary)] text-white">
          <Plus size={20} aria-hidden />
        </span>
      </button>
      <button type="button" className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[var(--text-muted)]">
        <LifeBuoy size={19} aria-hidden />
        <span className="text-[11px]">Destek</span>
      </button>
      <button type="button" className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[var(--text-muted)]">
        <User size={19} aria-hidden />
        <span className="text-[11px]">Profil</span>
      </button>
    </nav>
  );
}
