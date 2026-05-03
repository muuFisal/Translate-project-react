import { cn } from '@/utils/cn';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as = 'h2',
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  dark?: boolean;
}) {
  const HeadingTag = as;

  return (
    <div className={cn('mb-10 max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? (
        <p className={cn('mb-4 text-xs font-semibold uppercase tracking-[0.28em]', dark ? 'text-accent-300' : 'text-brand-700 dark:text-brand-500')}>{eyebrow}</p>
      ) : null}
      <HeadingTag className={cn('font-display text-4xl font-semibold text-balance sm:text-5xl', dark ? 'text-white' : 'text-ink-900 dark:text-white')}>{title}</HeadingTag>
      {description ? <p className={cn('mt-4 text-base leading-8', dark ? 'text-white/70' : 'text-ink-500 dark:text-ink-300')}>{description}</p> : null}
    </div>
  );
}
