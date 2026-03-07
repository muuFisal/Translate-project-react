import type { LucideIcon } from 'lucide-react';

export function ServiceCard({
  icon: Icon,
  title,
  body,
  stat,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  stat: string;
}) {
  return (
    <article className="surface-card p-6 lg:p-7">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-white/5 dark:text-brand-500">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mt-6 flex items-start justify-between gap-4">
        <h3 className="font-display text-3xl font-semibold text-ink-900">{title}</h3>
        <span className="rounded-full bg-accent-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-900 dark:bg-accent-300/20 dark:text-accent-500">
          {stat}
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-ink-500">{body}</p>
    </article>
  );
}
