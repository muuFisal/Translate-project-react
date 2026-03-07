import { cn } from '@/utils/cn';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as = 'h2',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
}) {
  const HeadingTag = as;

  return (
    <div className={cn('mb-10 max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brand-700 dark:text-brand-500">{eyebrow}</p>
      ) : null}
      <HeadingTag className="font-display text-4xl font-semibold text-balance text-ink-900 sm:text-5xl">{title}</HeadingTag>
      {description ? <p className="mt-4 text-base leading-8 text-ink-500">{description}</p> : null}
    </div>
  );
}
