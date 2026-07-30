import { BookOpen, FileEdit, FileText, Gift, Sparkles } from 'lucide-react';
import { product } from '../config/product';

const featureLabels = [
  { label: '50 Stories' },
  { label: '10 Categories' },
  { label: 'PDF + DOCX' },
  { label: '5 Bonuses' },
];

const formatBadges = [
  { icon: FileText, label: 'Ready-to-Read PDF', position: '-left-3 top-6 sm:-left-6 sm:top-10' },
  { icon: FileEdit, label: 'Editable DOCX', position: '-right-2 top-0 sm:-right-6 sm:top-2' },
  { icon: Gift, label: 'Bonus Pack', position: '-left-4 bottom-20 sm:-left-8 sm:bottom-24' },
  { icon: Sparkles, label: `Ages ${product.ageRange}`, position: '-right-3 bottom-8 sm:-right-8 sm:bottom-12' },
];

export function ProductMockup() {
  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center sm:h-[480px]">
      <div
        className="absolute inset-0 -z-10 rounded-full bg-brand-orange/25 blur-[90px] animate-pulse-glow"
        aria-hidden="true"
      />

      <div className="absolute h-64 w-48 -translate-x-14 -translate-y-2 rotate-[-14deg] rounded-xl border border-border bg-surface/80 shadow-xl sm:h-72 sm:w-52" aria-hidden="true">
        <div className="space-y-2 p-4">
          <div className="h-2 w-3/4 rounded bg-white/10" />
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-2/3 rounded bg-white/10" />
        </div>
      </div>
      <div className="absolute h-64 w-48 translate-x-14 -translate-y-1 rotate-[13deg] rounded-xl border border-border bg-surface/80 shadow-xl sm:h-72 sm:w-52" aria-hidden="true">
        <div className="space-y-2 p-4">
          <div className="h-2 w-2/3 rounded bg-white/10" />
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-3/4 rounded bg-white/10" />
        </div>
      </div>

      <div className="relative z-10 flex h-72 w-56 flex-col justify-between rounded-2xl border border-border-bright bg-gradient-to-b from-surface-raised to-surface p-5 shadow-orange-glow-lg animate-float sm:h-80 sm:w-64 sm:p-6">
        <div>
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange-light">
            {product.brand}
          </p>
          <h3 className="mt-3 font-display text-xl font-bold leading-tight text-text-primary sm:text-2xl">
            50 Illustrated
            <br />
            Kids Stories
          </h3>
          <p className="mt-1 font-display text-sm font-semibold text-brand-orange-light">Mega Bundle</p>
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          {featureLabels.map((f) => (
            <span
              key={f.label}
              className="rounded-md border border-border bg-black/30 px-2 py-1 text-center text-[10px] font-semibold text-text-secondary"
            >
              {f.label}
            </span>
          ))}
        </div>

        <div className="mx-auto h-1.5 w-16 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-light" aria-hidden="true" />
      </div>

      {formatBadges.map(({ icon: Icon, label, position }) => (
        <div
          key={label}
          className={`absolute ${position} hidden animate-float-slow items-center gap-1.5 rounded-full border border-border-bright bg-surface-raised/95 px-3 py-1.5 shadow-lg backdrop-blur sm:flex`}
        >
          <Icon className="h-3.5 w-3.5 text-brand-orange-light" aria-hidden="true" />
          <span className="text-[11px] font-semibold text-text-primary">{label}</span>
        </div>
      ))}

      <div className="absolute -bottom-4 flex items-center gap-1.5 rounded-full border border-border-bright bg-surface-raised/95 px-3 py-1.5 shadow-lg sm:hidden">
        <BookOpen className="h-3.5 w-3.5 text-brand-orange-light" aria-hidden="true" />
        <span className="text-[11px] font-semibold text-text-primary">50 Stories · PDF + DOCX</span>
      </div>
    </div>
  );
}
