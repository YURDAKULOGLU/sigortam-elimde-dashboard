import { useEffect, useState } from "react";
import { AppSidebar } from "./components/AppSidebar";
import { AppHeader } from "./components/AppHeader";
import { BottomNav } from "./components/BottomNav";
import { WelcomeSection } from "./components/WelcomeSection";
import { DashboardStats } from "./components/DashboardStats";
import { QuickActions } from "./components/QuickActions";
import { PoliciesSection } from "./components/PoliciesSection";
import { RenewalsSection } from "./components/RenewalsSection";
import { PolicyInsight } from "./components/PolicyInsight";
import { TrustNote } from "./components/TrustNote";
import { Footer } from "./components/Footer";
import { EmptyState } from "./components/EmptyState";
import { CompareModal } from "./components/modals/CompareModal";
import { HealthReportModal } from "./components/modals/HealthReportModal";
import { AccidentModal } from "./components/modals/AccidentModal";
import { AddPolicyModal } from "./components/modals/AddPolicyModal";
import { ToastProvider } from "./state/ToastContext";

type ModalKind = "compare" | "health" | "accident" | "add" | null;

function DashboardSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-start justify-between">
        <div>
          <div className="skeleton h-8 w-56" />
          <div className="skeleton mt-2 h-4 w-80" />
        </div>
        <div className="skeleton h-10 w-32 rounded-[10px]" />
      </div>
      <div className="skeleton h-20 w-full rounded-[12px]" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="skeleton h-48 rounded-[14px] lg:col-span-6" />
        <div className="skeleton h-48 rounded-[14px] lg:col-span-3" />
        <div className="skeleton h-48 rounded-[14px] lg:col-span-3" />
      </div>
      <div className="skeleton h-56 w-full rounded-[14px]" />
    </div>
  );
}

function DashboardContent({
  hasPolicies,
  onOpenModal,
  onShowSample,
}: {
  hasPolicies: boolean;
  onOpenModal: (kind: ModalKind) => void;
  onShowSample: () => void;
}) {
  if (!hasPolicies) {
    return (
      <div className="flex flex-col gap-6">
        <EmptyState onAddPolicy={() => onOpenModal("add")} onSeeSample={onShowSample} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-7 sm:gap-9">
      <WelcomeSection onAddPolicy={() => onOpenModal("add")} />
      <DashboardStats />
      <QuickActions
        onCompare={() => onOpenModal("compare")}
        onHealthReport={() => onOpenModal("health")}
        onAccident={() => onOpenModal("accident")}
      />
      <PoliciesSection onAddPolicy={() => onOpenModal("add")} />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <RenewalsSection />
        <PolicyInsight />
      </div>
      <TrustNote />
      <Footer />
    </div>
  );
}

function DashboardShell() {
  const [loading, setLoading] = useState(true);
  const [hasPolicies, setHasPolicies] = useState(true);
  const [activeModal, setActiveModal] = useState<ModalKind>(null);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 700);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      <AppSidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <AppHeader />
        <main className="mx-auto w-full max-w-[1180px] flex-1 px-4 py-6 pb-24 sm:px-6 sm:py-8 lg:px-8 lg:pb-10">
          {loading ? (
            <DashboardSkeleton />
          ) : (
            <DashboardContent
              hasPolicies={hasPolicies}
              onOpenModal={setActiveModal}
              onShowSample={() => setHasPolicies(true)}
            />
          )}
        </main>
        <BottomNav onAddPolicy={() => setActiveModal("add")} />
      </div>

      {!loading && (
        <button
          type="button"
          onClick={() => setHasPolicies((v) => !v)}
          className="fixed bottom-20 left-3 z-20 hidden rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 text-[11px] text-[var(--text-muted)] shadow-sm hover:text-[var(--text-primary)] lg:bottom-4 lg:block"
        >
          {hasPolicies ? "İlk kullanım görünümünü gör" : "Örnek Dashboard'u Gör"}
        </button>
      )}

      <CompareModal open={activeModal === "compare"} onClose={() => setActiveModal(null)} />
      <HealthReportModal open={activeModal === "health"} onClose={() => setActiveModal(null)} />
      <AccidentModal open={activeModal === "accident"} onClose={() => setActiveModal(null)} />
      <AddPolicyModal open={activeModal === "add"} onClose={() => setActiveModal(null)} />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <DashboardShell />
    </ToastProvider>
  );
}
