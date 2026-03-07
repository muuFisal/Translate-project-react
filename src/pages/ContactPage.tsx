import { Mail, MapPin, Phone, UploadCloud } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Seo } from '@/components/ui/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/config/site';

type ContactFormState = {
  name: string;
  phone: string;
  email: string;
  documentType: string;
  message: string;
};

export function ContactPage() {
  const { t } = useTranslation();
  const docOptions = t('quoteCalculator.docOptions', { returnObjects: true }) as Array<{ label: string; value: string }>;
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    phone: '',
    email: '',
    documentType: docOptions[0]?.value ?? 'id',
    message: '',
  });
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    if (!docOptions.length) return;
    setForm((prev) => ({ ...prev, documentType: docOptions.some((item) => item.value === prev.documentType) ? prev.documentType : docOptions[0].value }));
  }, [docOptions]);

  const handleSubmit = () => {
    const selectedDoc = docOptions.find((item) => item.value === form.documentType);
    const message = [
      t('contact.whatsappIntro'),
      form.name ? `${t('contact.form.name')}: ${form.name}` : null,
      form.phone ? `${t('contact.form.phone')}: ${form.phone}` : null,
      form.email ? `${t('contact.form.email')}: ${form.email}` : null,
      `${t('contact.form.documentType')}: ${selectedDoc?.label ?? form.documentType}`,
      form.message ? `${t('contact.form.message')}: ${form.message}` : null,
      files.length ? `${t('contact.form.upload')}: ${files.join(', ')}` : null,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${siteConfig.brand.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Seo title={t('seo.contact.title')} description={t('seo.contact.description')} path="/contact" keywords={t('seo.contact.keywords')} />
      <AnimatedSection className="section-space" animation="up">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading as="h1" eyebrow={t('contact.eyebrow')} title={t('contact.title')} description={t('contact.description')} />
            <div className="grid gap-4">
              {[
                { icon: Phone, title: t('contact.phone'), body: siteConfig.brand.phone },
                { icon: Mail, title: t('contact.email'), body: siteConfig.brand.email },
                { icon: MapPin, title: t('contact.location'), body: siteConfig.brand.locations.join(' / ') },
              ].map((item) => (
                <div key={item.title} className="surface-card flex items-start gap-4 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-white/5 dark:text-brand-500">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-ink-900 dark:text-white">{item.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-ink-500">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="surface-card p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-ink-900 dark:text-white">{t('contact.formTitle')}</h2>
            <p className="mt-3 text-sm leading-7 text-ink-500">{t('contact.formIntro')}</p>
            <form className="mt-6 grid gap-4" onSubmit={(event) => { event.preventDefault(); handleSubmit(); }}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-ink-700 dark:text-ink-300">
                  {t('contact.form.name')}
                  <input type="text" className="field-input" value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} />
                </label>
                <label className="grid gap-2 text-sm font-medium text-ink-700 dark:text-ink-300">
                  {t('contact.form.phone')}
                  <input type="tel" className="field-input" value={form.phone} onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))} />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-ink-700 dark:text-ink-300">
                  {t('contact.form.email')}
                  <input type="email" className="field-input" value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} />
                </label>
                <label className="grid gap-2 text-sm font-medium text-ink-700 dark:text-ink-300">
                  {t('contact.form.documentType')}
                  <select className="field-input" value={form.documentType} onChange={(event) => setForm((prev) => ({ ...prev, documentType: event.target.value }))}>
                    {docOptions.map((item) => (
                      <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium text-ink-700 dark:text-ink-300">
                {t('contact.form.message')}
                <textarea rows={5} className="field-input" value={form.message} onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))} />
              </label>
              <label className="grid gap-3 rounded-[24px] border border-dashed border-black/10 bg-surface-muted/50 p-5 text-center dark:border-white/10 dark:bg-white/5">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-white/5 dark:text-brand-500">
                  <UploadCloud className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900 dark:text-white">{t('contact.form.upload')}</p>
                  <p className="mt-2 text-xs leading-6 text-ink-500">{t('contact.form.uploadHint')}</p>
                </div>
                <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" className="field-input cursor-pointer" onChange={(event) => setFiles(Array.from(event.target.files ?? []).map((file) => file.name))} />
                {files.length ? <p className="text-xs text-ink-500">{files.join(', ')}</p> : null}
              </label>
              <button type="submit" className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800">
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
