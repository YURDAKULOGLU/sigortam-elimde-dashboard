import { Lock } from "lucide-react";

export function TrustNote() {
  return (
    <p className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
      <Lock size={13} aria-hidden />
      Poliçe bilgileriniz güvenli şekilde saklanır ve yalnızca hizmetin sunulması amacıyla kullanılır.
    </p>
  );
}
