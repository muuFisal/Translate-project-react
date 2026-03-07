import { useEffect } from 'react';

export function Seo({
  title,
  description,
  path,
  keywords,
  structuredData,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  structuredData?: Record<string, unknown>;
}) {
  useEffect(() => {
    const origin = window.location.origin;
    const canonicalHref = `${origin}${path}`;
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(property ? 'property' : 'name', name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', canonicalHref, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    if (keywords) setMeta('keywords', keywords);

    let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalHref;

    let schema = document.head.querySelector('script[data-seo="structured-data"]') as HTMLScriptElement | null;
    if (structuredData) {
      if (!schema) {
        schema = document.createElement('script');
        schema.type = 'application/ld+json';
        schema.dataset.seo = 'structured-data';
        document.head.appendChild(schema);
      }
      schema.textContent = JSON.stringify(structuredData);
    }

    return () => {
      if (schema && !structuredData) schema.remove();
    };
  }, [description, keywords, path, structuredData, title]);

  return null;
}
