import { useTranslation } from 'react-i18next';
import { BlogCard } from '@/components/blog/BlogCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Seo } from '@/components/ui/Seo';
import { blogPosts } from '@/data/blogs';

export function BlogPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';

  return (
    <>
      <Seo title={t('seo.blog.title')} description={t('seo.blog.description')} path="/blog" keywords={t('seo.blog.keywords')} />
      <AnimatedSection className="section-space" animation="up">
        <div className="container-shell">
          <SectionHeading as="h1" eyebrow={t('blogPage.eyebrow')} title={t('blogPage.title')} description={t('blogPage.description')} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => <BlogCard key={post.slug} post={post} locale={locale} />)}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
