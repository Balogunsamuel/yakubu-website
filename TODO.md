# TODO: Client Action Items

This file lists all placeholders and items that need client input before the site goes live.

## Required Before Launch

### 1. Logo

- [ ] Replace `/public/logo.svg` with the actual JL monogram logo (teal J, red L, inside an oval)
- Format: SVG preferred, or high-resolution PNG

### 2. Opening Hours

- [ ] Confirm business hours in `data/siteConfig.ts`:
  ```typescript
  hours: {
    weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
    saturday: 'Saturday: 9:00 AM - 4:00 PM',
    sunday: 'Sunday: Closed',
  }
  ```

### 3. Pricing

- [ ] Fill in actual prices in `data/pricing.ts`
- Currently all items show "Call for price"
- Categories to update:
  - Printing & Copying
  - Typing Services
  - Binding & Laminating
  - Scanning
  - Internet & POS
  - Online Registration Assistance

### 4. Google Maps

- [ ] Add Google Maps embed to Contact page
- Replace the map placeholder in `app/contact/page.tsx`
- Get embed code from [Google Maps](https://www.google.com/maps)

### 5. Domain

- [ ] Update `siteConfig.url` in `data/siteConfig.ts` with actual domain
- Currently set to: `https://yakubujisambo.com`

### 6. Open Graph Image

- [ ] Create and add `/public/og-image.jpg` (1200x630px recommended)
- This image appears when sharing the site on social media

---

## Confirm Before Publishing

### Service Clarifications

1. **"Event Planning"** (Business Management)
   - [x] ~~Clarify what this service means~~ **CONFIRMED: Event Planning**
   - Now added to Business Management services

2. **"Tax Defence Tribunal (TAT)"** (Tax Services)
   - [x] ~~Confirm if this should be "Tax Appeal Tribunal"~~ **CONFIRMED: Correct as written**

3. **FCTI Credential**
   - [x] ~~Verify the explanation is correct~~ **CONFIRMED**
   - "Fellow of the Chartered Institute of Taxation of Nigeria"

---

## Optional Enhancements

### About Page

- [ ] Provide detailed biography for Yakubu M. Jisambo
- [ ] Business history / founding story
- [ ] Mission statement
- [ ] Team photos (if applicable)

### Social Media

- [ ] Add social media links to `data/siteConfig.ts`:
  ```typescript
  social: {
    facebook: 'https://facebook.com/...',
    twitter: 'https://twitter.com/...',
    linkedin: 'https://linkedin.com/...',
  }
  ```

### Photos

- [ ] Office photos
- [ ] Service photos (printing, consulting, etc.)
- [ ] Team/staff photos

---

## Technical Setup

### Email (Resend)

- [ ] Create account at [resend.com](https://resend.com)
- [ ] Verify domain for custom sending address
- [ ] Add `RESEND_API_KEY` to production environment

### Analytics (Optional)

- [ ] Add Google Analytics or similar tracking
- [ ] Add to `app/layout.tsx`

---

## Checklist Summary

| Item                           | Status       | Priority |
| ------------------------------ | ------------ | -------- |
| Logo                           | ⏳ Pending   | High     |
| Opening hours                  | ⏳ Pending   | High     |
| Pricing                        | ⏳ Pending   | Medium   |
| Map embed                      | ⏳ Pending   | Medium   |
| Domain                         | ⏳ Pending   | High     |
| OG Image                       | ⏳ Pending   | Medium   |
| "Event planning" clarification | ✅ Confirmed | High     |
| TAT clarification              | ✅ Confirmed | Medium   |
| FCTI verification              | ✅ Confirmed | Medium   |
| Resend setup                   | ⏳ Pending   | High     |

---

_Last updated: [Date]_
