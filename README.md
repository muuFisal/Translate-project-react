# Khaleej Translate Website

A professional **React + TypeScript + Tailwind CSS** website for a certified translation office serving Saudi Arabia and the GCC. The project is structured for reuse across multiple brands while keeping content, theme settings, and brand details centralized.

## Key Features

- Bilingual English and Arabic experience with RTL support
- Home, Services, Pricing, Blog, About, Contact, Terms, and Privacy pages
- Centralized content management through locale files in `public/locales`
- Centralized brand and media configuration in `src/config/site.ts`
- Reusable theme tokens in `src/theme/tokens.ts`
- Floating WhatsApp CTA, AI support chat, and scroll-to-top behavior
- Quick estimate calculator with WhatsApp handoff
- Responsive layout optimized for desktop and mobile
- Page-level SEO metadata for routed pages

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- i18next / react-i18next
- Framer Motion
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Production commands:

```bash
npm run build
npm run preview
```

## Pages and Modules

- `Home`: hero, trust bar, services, document types, process, estimate calculator, testimonials, FAQ, CTA
- `Services`: service categories and supported language pairs
- `Pricing`: pricing plans and optional add-on services
- `Blog`: article listing and article detail pages
- `About`: company positioning, trust message, and service principles
- `Contact`: quotation request form with WhatsApp continuation
- `Legal`: terms and privacy pages
- `Shared UI`: navbar, footer, WhatsApp button, AI support chat, scroll-to-top, SEO helpers

## Customization Notes

Update the main brand configuration here:

```text
src/config/site.ts
```

Update theme tokens here:

```text
src/theme/tokens.ts
```

Update customer-facing content here:

```text
public/locales/en/common.json
public/locales/ar/common.json
```

Update blog content here:

```text
src/data/blogs.ts
```

## Multilingual and Reusable Branding

- English and Arabic content are maintained separately through locale JSON files.
- The active language is stored locally for returning visitors.
- Brand name, contact details, WhatsApp number, locations, and media assets are centralized to make cloning the project for other translation brands straightforward.
- Theme colors, fonts, shadows, and radii are centralized so visual identity changes can be made without scattering edits across the app.

## Developed By

This project was developed by **Mohamed Fisal**, Senior Backend Engineer and Laravel Architect.

Phone: **+20-1140158807**  
Email: **[fisalmhmd56@gmail.com](mailto:fisalmhmd56@gmail.com)**  
Portfolio: **[https://mohamed-fisal.com/](https://mohamed-fisal.com/)**  
LinkedIn: **[https://www.linkedin.com/in/mohamed-fisal-45769421a/](https://www.linkedin.com/in/mohamed-fisal-45769421a/)**  
GitHub: **[https://github.com/muuFisal](https://github.com/muuFisal)**
