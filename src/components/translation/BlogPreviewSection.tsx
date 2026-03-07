import { useTranslation } from 'react-i18next';
import { BlogCard } from '@/components/blog/BlogCard';
import { GhostLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { blogPosts } from '@/data/blogs';

export function BlogPreviewSection() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';

  return (
    <AnimatedSection className="section-space bg-surface-muted/50" animation="up">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={t('blogPreview.eyebrow')} title={t('blogPreview.title')} description={t('blogPreview.description')} />
          <GhostLink to="/blog">{t('blogPreview.cta')}</GhostLink>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => <BlogCard key={post.slug} post={post} locale={locale} />)}
        </div>
      </div>
    </AnimatedSection>
  );
}
