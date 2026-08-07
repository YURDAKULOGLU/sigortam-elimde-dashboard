export function Footer() {
  return (
    <footer className="mt-2 flex flex-col gap-2 border-t border-[var(--border)] pt-4 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
      <span>© 2026 Sigortam Elimde</span>
      <nav className="flex flex-wrap gap-x-4 gap-y-1">
        <a href="#" className="hover:text-[var(--text-secondary)]">
          Gizlilik
        </a>
        <a href="#" className="hover:text-[var(--text-secondary)]">
          KVKK
        </a>
        <a href="#" className="hover:text-[var(--text-secondary)]">
          Kullanım Koşulları
        </a>
        <a href="#" className="hover:text-[var(--text-secondary)]">
          Yardım
        </a>
      </nav>
    </footer>
  );
}
