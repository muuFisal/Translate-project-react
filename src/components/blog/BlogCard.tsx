import { ArrowLeft, ArrowRight, Clock3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import type { BlogPost } from '@/data/blogs';

export function BlogCard({ post, locale = 'en' }: { post: BlogPost; locale?: 'en' | 'ar' }) {
  const { t } = useTranslation();
  const title = post.title[locale];
  const excerpt = post.excerpt[locale];
  const category = post.category[locale];
  const readTime = post.readTime[locale];
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <article className="group overflow-hidden rounded-[30px] border border-black/5 bg-surface-strong shadow-soft transition duration-300 hover:-translate-y-1 dark:border-white/10">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative h-60 overflow-hidden">
          <img src={post.image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <span className="absolute left-5 top-5 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-ink-900 backdrop-blur dark:bg-black/30 dark:text-white">
            {category}
          </span>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-700 dark:text-brand-500">
          <span>{new Date(post.date).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          <span className="inline-flex items-center gap-1">
            <Clock3 className="h-3.5 w-3.5" />
            {readTime}
          </span>
        </div>
        <h3 className="mt-4 line-clamp-2 font-display text-2xl font-semibold text-ink-900 dark:text-white">{title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-ink-500">{excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:gap-3 dark:text-brand-500">
          {t('common.readMore')}
          <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
