import { ArrowLeft, ArrowRight, Clock3 } from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { BlogCard } from '@/components/blog/BlogCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Seo } from '@/components/ui/Seo';
import { blogPosts } from '@/data/blogs';
import { siteConfig } from '@/config/site';

export function BlogDetailsPage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';
  const post = useMemo(() => blogPosts.find((item) => item.slug === slug), [slug]);
  const BackIcon = locale === 'ar' ? ArrowRight : ArrowLeft;

  if (!post) {
    return (
      <AnimatedSection className="section-space" animation="up">
        <div className="container-shell text-center">
          <h1 className="font-display text-4xl font-semibold text-ink-900 dark:text-white">{t('blogDetails.notFoundTitle')}</h1>
          <Link to="/blog" className="mt-6 inline-flex text-brand-700 dark:text-brand-500">{t('common.backToBlog')}</Link>
        </div>
      </AnimatedSection>
    );
  }

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const title = post.title[locale];
  const excerpt = post.excerpt[locale];
  const paragraphs = post.content[locale];
  const category = post.category[locale];
  const readTime = post.readTime[locale];

  return (
    <>
      <Seo
        title={`${title} | ${siteConfig.brand.name}`}
        description={excerpt}
        path={`/blog/${post.slug}`}
        keywords={`${category}, ${siteConfig.brand.name}, certified translation`}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description: excerpt,
          image: post.image,
          datePublished: post.date,
          author: { '@type': 'Organization', name: siteConfig.brand.name },
        }}
      />

      <section className="relative isolate overflow-hidden pt-28">
        <div className="absolute inset-0 -z-10">
          <img src={post.image || siteConfig.assets.articleFallback} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/30" />
        </div>
        <div className="container-shell py-16 text-white lg:py-24">
          <Link to="/blog" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <BackIcon className="h-4 w-4" />
            {t('common.backToBlog')}
          </Link>
          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span>{category}</span>
              <span>{new Date(post.date).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="inline-flex items-center gap-1">
                <Clock3 className="h-4 w-4" />
                {readTime}
              </span>
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/85 lg:text-lg">{excerpt}</p>
          </div>
        </div>
      </section>

      <AnimatedSection className="section-space" animation="up">
        <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="surface-card p-6 sm:p-8 lg:p-10">
            <div className="space-y-6 text-base leading-9 text-ink-700 dark:text-ink-300">
              {paragraphs.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="grid gap-6 self-start">
            <div className="surface-card p-6">
              <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-white">{t('blogDetails.readyTitle')}</h2>
              <p className="mt-3 text-sm leading-7 text-ink-500">{t('blogDetails.readyDescription')}</p>
              <a href={`https://wa.me/${siteConfig.brand.whatsapp}`} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white">
                {t('blogDetails.readyCta')}
              </a>
            </div>
            <div className="surface-card p-6">
              <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-white">{t('blogDetails.relatedTitle')}</h2>
              <div className="mt-5 grid gap-5">
                {related.map((item) => <BlogCard key={item.slug} post={item} locale={locale} />)}
              </div>
            </div>
          </aside>
        </div>
      </AnimatedSection>
    </>
  );
}
