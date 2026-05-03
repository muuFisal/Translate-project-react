import { Calculator, UploadCloud } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/config/site';

export function QuoteCalculatorSection() {
  const { t } = useTranslation();
  const docOptions = t('quoteCalculator.docOptions', { returnObjects: true }) as Array<{ label: string; value: string; base: number }>;
  const speedOptions = t('quoteCalculator.speedOptions', { returnObjects: true }) as Array<{ label: string; value: string; multiplier: number }>;
  const deliveryOptions = t('quoteCalculator.deliveryOptions', { returnObjects: true }) as Array<{ label: string; value: string; fee: number }>;

  const [docType, setDocType] = useState(docOptions[0]?.value ?? 'id');
  const [pages, setPages] = useState(1);
  const [speed, setSpeed] = useState(speedOptions[0]?.value ?? 'standard');
  const [delivery, setDelivery] = useState(deliveryOptions[0]?.value ?? 'email');
  const [certified, setCertified] = useState(true);
  const [files, setFiles] = useState<string[]>([]);

  const selectedDoc = docOptions.find((item) => item.value === docType) ?? docOptions[0];
  const selectedSpeed = speedOptions.find((item) => item.value === speed) ?? speedOptions[0];
  const selectedDelivery = deliveryOptions.find((item) => item.value === delivery) ?? deliveryOptions[0];

  const total = useMemo(() => {
    const certificationFee = certified ? 35 : 0;
    return Math.round(((selectedDoc?.base ?? 50) * Math.max(1, pages) * (selectedSpeed?.multiplier ?? 1)) + (selectedDelivery?.fee ?? 0) + certificationFee);
  }, [certified, pages, selectedDelivery?.fee, selectedDoc?.base, selectedSpeed?.multiplier]);

  const handleWhatsAppRequest = () => {
    const yesNo = certified ? 'Yes' : 'No';
    const message = [
      t('quoteCalculator.whatsappIntro'),
      `${t('quoteCalculator.documentType')}: ${selectedDoc?.label ?? docType}`,
      `${t('quoteCalculator.pages')}: ${pages}`,
      `${t('quoteCalculator.turnaround')}: ${selectedSpeed?.label ?? speed}`,
      `${t('quoteCalculator.delivery')}: ${selectedDelivery?.label ?? delivery}`,
      `${t('quoteCalculator.certifiedCopy')}: ${yesNo}`,
      `${t('quoteCalculator.estimatedPrice')}: ${total} SAR`,
      files.length ? `${t('contact.form.upload')}: ${files.join(', ')}` : null,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${siteConfig.brand.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatedSection className="section-space" animation="right">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow={t('quoteCalculator.eyebrow')} title={t('quoteCalculator.title')} description={t('quoteCalculator.description')} />
          <div className="surface-card p-6">
            <div className="flex items-center gap-3 text-brand-700 dark:text-brand-500">
              <Calculator className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.24em]">{t('quoteCalculator.smartPricing')}</span>
            </div>
            <div className="mt-5 space-y-3 text-sm leading-7 text-ink-500">
              {(t('quoteCalculator.highlights', { returnObjects: true }) as string[]).map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="surface-card p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-ink-700 dark:text-ink-300">
              {t('quoteCalculator.documentType')}
              <select value={docType} onChange={(event) => setDocType(event.target.value)} className="field-input">
                {docOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink-700 dark:text-ink-300">
              {t('quoteCalculator.pages')}
              <input type="number" min={1} value={pages} onChange={(event) => setPages(Number(event.target.value) || 1)} className="field-input" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink-700 dark:text-ink-300">
              {t('quoteCalculator.turnaround')}
              <select value={speed} onChange={(event) => setSpeed(event.target.value)} className="field-input">
                {speedOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink-700 dark:text-ink-300">
              {t('quoteCalculator.delivery')}
              <select value={delivery} onChange={(event) => setDelivery(event.target.value)} className="field-input">
                {deliveryOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
              </select>
            </label>
          </div>

          <label className="mt-4 flex items-center gap-3 rounded-2xl border border-dashed border-black/10 bg-surface-muted/70 px-4 py-4 text-sm text-ink-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-300">
            <input type="checkbox" checked={certified} onChange={(event) => setCertified(event.target.checked)} className="h-4 w-4 rounded border-black/10 text-brand-700 focus:ring-brand-400" />
            {t('quoteCalculator.certifiedCopy')}
          </label>

          <label className="mt-4 grid gap-3 rounded-[24px] border border-dashed border-black/10 bg-surface-muted/50 p-5 text-center dark:border-white/10 dark:bg-white/5">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-white/5 dark:text-brand-500">
              <UploadCloud className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-900 dark:text-white">{t('quoteCalculator.uploadTitle')}</p>
              <p className="mt-2 text-xs leading-6 text-ink-500">{t('quoteCalculator.uploadDescription')}</p>
            </div>
            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              className="field-input cursor-pointer"
              onChange={(event) => setFiles(Array.from(event.target.files ?? []).map((file) => file.name))}
            />
            {files.length ? <p className="text-xs text-ink-500">{files.join(', ')}</p> : null}
          </label>

          <div className="mt-5 rounded-[28px] bg-brand-900 p-6 text-white dark:bg-surface-strong">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65 dark:text-white/55">{t('quoteCalculator.estimatedPrice')}</p>
                <p className="mt-3 font-display text-5xl font-semibold">{total} SAR</p>
                <p className="mt-3 text-sm leading-7 text-white/75 dark:text-white/65">{t('quoteCalculator.note')}</p>
              </div>
              <Button type="button" onClick={handleWhatsAppRequest}>{t('quoteCalculator.requestQuote')}</Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
