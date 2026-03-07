import { MessageCircleMore, SendHorizonal, Sparkles, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '@/config/site';

type ChatMessage = { id: number; sender: 'assistant' | 'user'; text: string };
type ChatReplies = {
  pricing: string;
  turnaround: string;
  documents: string;
  languages: string;
  contact: string;
  fallback: string;
};
type ChatCopy = {
  title: string;
  subtitle: string;
  launch: string;
  placeholder: string;
  send: string;
  note: string;
  intro: string;
  prompts: string[];
  replies: ChatReplies;
};

function includesAny(text: string, keywords: string[]) {
  return keywords.some((keyword) => text.includes(keyword));
}

function getReply(message: string, locale: 'ar' | 'en', replies: ChatReplies) {
  const text = message.toLowerCase();

  if (locale === 'ar') {
    if (includesAny(text, ['\u0633\u0639\u0631', '\u062a\u0643\u0644\u0641\u0629', '\u062a\u0633\u0639\u064a\u0631', '\u0639\u0631\u0636', 'quote'])) return replies.pricing;
    if (includesAny(text, ['\u0645\u062f\u0629', '\u0645\u062a\u0649', '\u0648\u0642\u062a', '\u0639\u0627\u062c\u0644', '\u0645\u0633\u062a\u0639\u062c\u0644', '\u062a\u0633\u0644\u064a\u0645'])) return replies.turnaround;
    if (includesAny(text, ['\u0647\u0648\u064a\u0629', '\u0627\u0642\u0627\u0645\u0629', '\u0625\u0642\u0627\u0645\u0629', '\u062c\u0648\u0627\u0632', '\u0634\u0647\u0627\u062f\u0629', '\u0639\u0642\u062f', '\u062a\u0642\u0631\u064a\u0631', '\u0648\u062b\u064a\u0642\u0629', '\u0645\u0633\u062a\u0646\u062f'])) return replies.documents;
    if (includesAny(text, ['\u0644\u063a\u0629', '\u0644\u063a\u0627\u062a', '\u0625\u0646\u062c\u0644\u064a\u0632\u064a', '\u0627\u0646\u062c\u0644\u064a\u0632\u064a', '\u0641\u0631\u0646\u0633\u064a', '\u0623\u0644\u0645\u0627\u0646\u064a', '\u062a\u0631\u0643\u064a', '\u0623\u0631\u062f\u0648'])) return replies.languages;
    if (includesAny(text, ['\u0648\u0627\u062a\u0633\u0627\u0628', '\u062a\u0648\u0627\u0635\u0644', '\u0625\u0631\u0633\u0627\u0644', '\u0627\u0631\u0633\u0627\u0644', '\u0631\u0641\u0639', '\u0645\u0644\u0641', '\u0628\u0631\u064a\u062f'])) return replies.contact;
    return replies.fallback;
  }

  if (includesAny(text, ['price', 'cost', 'quote', 'rate'])) return replies.pricing;
  if (includesAny(text, ['time', 'turnaround', 'urgent', 'delivery', 'same day'])) return replies.turnaround;
  if (includesAny(text, ['passport', 'id', 'iqama', 'certificate', 'contract', 'medical', 'report', 'document'])) return replies.documents;
  if (includesAny(text, ['language', 'arabic', 'english', 'french', 'german', 'turkish', 'urdu'])) return replies.languages;
  if (includesAny(text, ['whatsapp', 'email', 'contact', 'send', 'upload', 'file'])) return replies.contact;
  return replies.fallback;
}

export function AiSupportChat() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';
  const chatCopy = t('supportChat', { returnObjects: true }) as ChatCopy;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([{ id: 1, sender: 'assistant', text: chatCopy.intro }]);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const panelId = useMemo(() => 'support-chat-panel', []);

  useEffect(() => {
    setMessages([{ id: 1, sender: 'assistant', text: chatCopy.intro }]);
    setInput('');
  }, [chatCopy.intro]);

  useEffect(() => {
    if (!open || !messagesRef.current) return;
    messagesRef.current.scrollTo({ top: messagesRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
  }, [open]);

  const sendMessage = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    const nextId = Date.now();
    setMessages((prev) => [
      ...prev,
      { id: nextId, sender: 'user', text: trimmed },
      { id: nextId + 1, sender: 'assistant', text: getReply(trimmed, locale, chatCopy.replies) },
    ]);
    setInput('');
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="fab-chat-trigger fixed z-40 inline-flex items-center gap-3 rounded-full bg-ink-900 px-4 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800 dark:bg-surface-strong dark:text-white"
        aria-controls={panelId}
        aria-expanded={open}
        aria-label={chatCopy.launch}
      >
        {open ? <X className="h-4 w-4" /> : <MessageCircleMore className="h-4 w-4" />}
        <span>{chatCopy.launch}</span>
      </button>

      {open ? (
        <div id={panelId} className="fab-chat-panel fixed z-50 w-[min(92vw,380px)] overflow-hidden rounded-[28px] border border-black/5 bg-surface-strong shadow-card dark:border-white/10">
          <div className="flex items-center gap-3 bg-brand-900 px-5 py-4 text-white">
            <img src={siteConfig.assets.supportAgent} alt={chatCopy.title} className="h-11 w-11 rounded-2xl object-cover" />
            <div className="min-w-0">
              <div className="flex items-center gap-2 font-semibold">
                <span>{chatCopy.title}</span>
                <Sparkles className="h-4 w-4 text-accent-300" />
              </div>
              <p className="text-xs text-white/80">{chatCopy.subtitle}</p>
            </div>
          </div>

          <div ref={messagesRef} className="max-h-[360px] space-y-3 overflow-y-auto bg-surface-base p-4">
            <div className="flex flex-wrap gap-2">
              {chatCopy.prompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-black/5 bg-white px-3 py-2 text-xs font-medium text-ink-700 transition hover:border-brand-300 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-ink-300"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {messages.map((message) => (
              <div key={message.id} className={message.sender === 'assistant' ? 'flex justify-start' : 'flex justify-end'}>
                <div className={message.sender === 'assistant' ? 'max-w-[85%] rounded-[20px] rounded-tl-md bg-brand-50 px-4 py-3 text-sm leading-7 text-ink-700 dark:bg-white/5 dark:text-ink-300' : 'max-w-[85%] rounded-[20px] rounded-tr-md bg-brand-700 px-4 py-3 text-sm leading-7 text-white'}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-black/5 bg-surface-strong p-4 dark:border-white/10">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') sendMessage(input);
                }}
                className="field-input h-12 flex-1"
                placeholder={chatCopy.placeholder}
              />
              <button type="button" onClick={() => sendMessage(input)} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white transition hover:bg-brand-800" aria-label={chatCopy.send}>
                <SendHorizonal className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-xs leading-6 text-ink-500">{chatCopy.note}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
