import { DraftingCompass, Hammer, RefreshCw } from 'lucide-react';

export const services = [
  {
    key: 'design',
    icon: DraftingCompass,
    stats: '120+',
  },
  {
    key: 'build',
    icon: Hammer,
    stats: '85+',
  },
  {
    key: 'renovation',
    icon: RefreshCw,
    stats: '60+',
  },
] as const;
