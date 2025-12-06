import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface CollapsibleSectionProps {
  label: string;
  badge?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  label,
  badge,
  defaultOpen = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-emerald-100 bg-white/70">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left hover:bg-emerald-50/50 transition-colors rounded-2xl"
      >
        <div className="flex items-center gap-2">
          {isOpen ? (
            <ChevronDown className="h-4 w-4 text-emerald-600" />
          ) : (
            <ChevronRight className="h-4 w-4 text-emerald-600" />
          )}
          <span className="text-sm font-semibold text-emerald-900">
            {label}
          </span>
          {badge && (
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-700">
              {badge}
            </span>
          )}
        </div>
      </button>

      {isOpen && (
        <div className="border-t border-emerald-100 px-4 py-3 text-sm text-slate-800">
          {children}
        </div>
      )}
    </div>
  );
};
