# Yakubu Jisambo & Co Website

Professional website for Yakubu Jisambo & Co, a tax consultancy and business services firm in Kaduna, Nigeria. Includes Jango Computer Academy business centre services.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Email:** Resend

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd yakubu-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Configure environment variables in `.env.local`:
   - `RESEND_API_KEY`: Get from [Resend](https://resend.com)
   - `CONTACT_TO_EMAIL`: Email to receive contact form submissions

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Deployment

This site is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Set these in your Vercel dashboard:

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for contact form emails |
| `CONTACT_TO_EMAIL` | Email address for contact form submissions |

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/contact/        # Contact form API route
│   ├── tax-services/       # Tax services page
│   ├── finance-management/ # Finance page
│   ├── business-management/# Business management page
│   ├── business-centre/    # Business centre page
│   ├── online-registrations/# Registrations page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── pricing/            # Pricing page
│   └── layout.tsx          # Root layout
├── components/             # React components
│   ├── layout/             # Header, Footer
│   ├── ui/                 # Reusable UI components
│   ├── sections/           # Page sections
│   ├── services/           # Service-related components
│   └── contact/            # Contact form components
├── data/                   # Data files
│   ├── services.ts         # Service definitions
│   ├── registrations.ts    # Registration portals
│   ├── pricing.ts          # Pricing data
│   ├── navigation.ts       # Navigation links
│   └── siteConfig.ts       # Site configuration
├── lib/                    # Utility functions
├── public/                 # Static assets
└── tailwind.config.ts      # Tailwind configuration
```

## Customization

### Colors

Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  navy: { ... },      // Background colors
  brand: {
    red: { ... },     // Primary accent
    teal: { ... },    // Secondary accent
  },
  grey: { ... },      // Text colors
}
```

### Content

- **Services:** Edit `data/services.ts`
- **Registrations:** Edit `data/registrations.ts`
- **Pricing:** Edit `data/pricing.ts`
- **Site Info:** Edit `data/siteConfig.ts`

### Logo

Replace `public/logo.svg` with the actual JL monogram logo.

## License

Private - All rights reserved.
