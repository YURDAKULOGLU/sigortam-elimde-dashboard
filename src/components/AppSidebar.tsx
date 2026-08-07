import { useState } from "react";
import { Home, FileStack, Scale, ShieldCheck, LifeBuoy, HelpCircle, Settings, ChevronUp } from "lucide-react";
import { user } from "../data/policies";

const primaryNav = [
  { label: "Ana Sayfa", icon: Home, active: true },
  { label: "Poliçelerim", icon: FileStack, active: false },
  { label: "Karşılaştır", icon: Scale, active: false },
  { label: "Sağlık Raporu", icon: ShieldCheck, active: false },
  { label: "Hasar & Kaza", icon: LifeBuoy, active: false },
];

const secondaryNav = [
  { label: "Yardım", icon: HelpCircle },
  { label: "Ayarlar", icon: Settings },
];

export function AppSidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside className="hidden w-[248px] shrink-0 flex-col border-r border-[var(--border)] bg-[var(--surface)] lg:flex">
      <div className="flex h-16 items-center gap-2 px-5">
        <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[var(--brand-primary)] text-[13px] font-semibold text-white">
          S
        </span>
        <span className="text-[15px] font-semibold text-[var(--text-primary)]">Sigortam Elimde</span>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5 px-3 pt-2">
        {primaryNav.map((item) => (
          <a
            key={item.label}
            href="#"
            aria-current={item.active ? "page" : undefined}
            className={
              "flex items-center gap-2.5 rounded-[8px] px-3 py-2 text-sm transition-colors " +
              (item.active
                ? "bg-[var(--brand-primary-soft)] font-medium text-[var(--brand-primary)]"
                : "text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-primary)]")
            }
          >
            <item.icon size={17} aria-hidden />
            {item.label}
          </a>
        ))}

        <div className="my-3 border-t border-[var(--border)]" />

        {secondaryNav.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center gap-2.5 rounded-[8px] px-3 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-primary)]"
          >
            <item.icon size={17} aria-hidden />
            {item.label}
          </a>
        ))}
      </nav>

      <div className="relative border-t border-[var(--border)] p-3">
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          className="flex w-full items-center gap-2.5 rounded-[8px] px-2 py-2 text-left hover:bg-[var(--surface-secondary)]"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--surface-secondary)] text-[12px] font-medium text-[var(--text-secondary)]">
            {user.initials}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[13px] font-medium text-[var(--text-primary)]">{user.fullName}</span>
            <span className="block truncate text-[12px] text-[var(--text-muted)]">{user.email}</span>
          </span>
          <ChevronUp size={15} className={"shrink-0 text-[var(--text-muted)] transition-transform " + (menuOpen ? "" : "rotate-180")} aria-hidden />
        </button>
        {menuOpen && (
          <div className="absolute bottom-[calc(100%+4px)] left-3 right-3 z-10 overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--surface)] py-1 shadow-[0_4px_16px_rgba(16,24,40,0.12)]">
            {["Profilim", "Ayarlar", "Çıkış yap"].map((label) => (
              <button
                key={label}
                type="button"
                className="block w-full px-3 py-2 text-left text-sm text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-primary)]"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
