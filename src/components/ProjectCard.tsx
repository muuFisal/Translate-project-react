import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '@/data/projects';

export function ProjectCard({ project, locale, cta }: { project: Project; locale: 'en' | 'ar'; cta: string }) {
  return (
    <article className="group h-full overflow-hidden rounded-[32px] border border-black/5 bg-surface-strong shadow-soft transition duration-300 hover:-translate-y-1 dark:border-white/10">
      <div className="overflow-hidden">
        <img
          src={project.cover}
          alt={project.title[locale]}
          loading="lazy"
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex h-full flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-500">
          <span>{project.location[locale]}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>
        <h3 className="mt-4 font-display text-3xl font-semibold text-ink-900 dark:text-white">{project.title[locale]}</h3>
        <p className="mt-3 text-sm leading-7 text-ink-500 dark:text-ink-300">{project.excerpt[locale]}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags[locale].map((tag) => (
            <span key={tag} className="rounded-full bg-surface-muted px-3 py-1 text-xs text-ink-500 dark:text-ink-300">
              {tag}
            </span>
          ))}
        </div>
        <Link to={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:gap-3 dark:text-brand-500">
          {cta}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
