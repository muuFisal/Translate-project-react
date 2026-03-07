export const themeTokens = {
  brand: {
    50: '238 246 244',
    100: '212 233 228',
    200: '176 214 205',
    300: '125 186 174',
    400: '76 155 143',
    500: '33 122 111',
    600: '22 94 85',
    700: '16 73 67',
    800: '12 56 52',
    900: '8 39 37',
  },
  accent: {
    100: '252 247 236',
    200: '244 231 196',
    300: '229 204 138',
    400: '205 167 84',
    500: '161 126 52',
  },
  surface: {
    light: {
      base: '250 248 243',
      muted: '244 240 233',
      strong: '255 255 255',
    },
    dark: {
      base: '7 16 15',
      muted: '11 24 22',
      strong: '15 30 28',
    },
  },
  ink: {
    light: {
      50: '250 248 243',
      100: '225 220 211',
      300: '150 148 143',
      500: '86 84 79',
      700: '40 44 43',
      900: '20 24 23',
    },
    dark: {
      50: '7 16 15',
      100: '29 47 44',
      300: '138 155 151',
      500: '206 215 213',
      700: '232 237 236',
      900: '248 250 249',
    },
  },
  fonts: {
    display: 'Cairo',
    body: 'Tajawal',
  },
  radii: {
    sm: '14px',
    md: '22px',
    lg: '32px',
    xl: '40px',
    pill: '999px',
  },
  shadows: {
    soft: '0 12px 45px rgba(13, 36, 34, 0.08)',
    card: '0 22px 70px rgba(8, 24, 22, 0.14)',
  },
} as const;

export function applyThemeTokens() {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  root.style.setProperty('--font-display', themeTokens.fonts.display);
  root.style.setProperty('--font-body', themeTokens.fonts.body);
  root.style.setProperty('--radius-sm', themeTokens.radii.sm);
  root.style.setProperty('--radius-md', themeTokens.radii.md);
  root.style.setProperty('--radius-lg', themeTokens.radii.lg);
  root.style.setProperty('--radius-xl', themeTokens.radii.xl);
  root.style.setProperty('--radius-pill', themeTokens.radii.pill);
  root.style.setProperty('--shadow-soft', themeTokens.shadows.soft);
  root.style.setProperty('--shadow-card', themeTokens.shadows.card);

  Object.entries(themeTokens.brand).forEach(([key, value]) => root.style.setProperty(`--color-brand-${key}`, value));
  Object.entries(themeTokens.accent).forEach(([key, value]) => root.style.setProperty(`--color-accent-${key}`, value));

  Object.entries(themeTokens.surface.light).forEach(([key, value]) => root.style.setProperty(`--color-surface-light-${key}`, value));
  Object.entries(themeTokens.surface.dark).forEach(([key, value]) => root.style.setProperty(`--color-surface-dark-${key}`, value));
  Object.entries(themeTokens.ink.light).forEach(([key, value]) => root.style.setProperty(`--color-ink-light-${key}`, value));
  Object.entries(themeTokens.ink.dark).forEach(([key, value]) => root.style.setProperty(`--color-ink-dark-${key}`, value));
}
