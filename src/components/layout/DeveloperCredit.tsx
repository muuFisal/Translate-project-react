export function DeveloperCredit() {
  return (
    <div className="border-t border-black/5 bg-surface-base/85 px-4 py-3 text-center dark:border-white/10">
      <p className="mx-auto max-w-4xl text-xs leading-6 text-ink-500 sm:text-sm">
        Developed by{' '}
        <a
          href="https://mohamed-fisal.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Mohamed Fisal portfolio website"
          className="font-semibold text-ink-700 underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-brand-700 hover:decoration-current dark:text-ink-300 dark:hover:text-brand-500"
        >
          Mohamed Fisal
        </a>{' '}
        <span aria-hidden="true">&mdash;</span> Senior Backend Engineer &amp; Laravel Architect
      </p>
    </div>
  );
}
