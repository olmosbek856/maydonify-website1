# CLAUDE.md

## Project

Build a modern, high-converting website for:

**Maydonify — football field booking platform**

This is NOT a full web app.
This is a **landing website only**.

---

## Pages

Create 2 main pages:

1. `/` → User landing page
2. `/owners` → Partner (hamkorlar) landing page

Also include:
- footer
- privacy page
- terms page

---

## Main Goals

### 1. User Page
Explain the product and push users to:
- understand quickly
- trust the platform
- click CTA (book / explore)

### 2. Owner Page
Capture leads from football field owners using a **simple form**

---

## UX Rules

- clean and modern design
- mobile-first
- simple, not cluttered
- strong visual hierarchy
- clear CTA buttons
- no unnecessary sections
- fast loading
- consistent spacing and style

---

## Visual Style

- sporty + modern + premium
- not too colorful
- not only green (explore better palette)
- strong CTA contrast
- clean typography

---

## CTA Behavior

Main page CTA buttons should:
- scroll to stadium section OR simulate booking flow

Owner page CTA should:
- scroll to form

---

## Pricing Rule

Always display prices in UZS format.
Do not use dollar ($).
Keep format consistent across all sections.

---

## Components

Use reusable components:
- Navbar
- Hero
- Section wrapper
- Card
- Button
- FAQ accordion
- Form

Avoid duplication.

---

## PAGE 1: USER LANDING (`/`)

### Sections:

1. Navbar
   - logo
   - links
   - “For Owners” button
   - primary CTA

2. Hero
   - strong headline
   - short description
   - 1–2 buttons
   - product visual

3. How it works (3 steps)

4. Stadium preview cards
   - image
   - name
   - location
   - price (UZS format)

5. Benefits

6. App / UI preview

7. FAQ (accordion, must work)

8. Final CTA

9. Footer

---

## PAGE 2: OWNERS (`/owners`)

### Goal:
Get partner requests (leads)

---

### Sections:

1. Hero
   - benefits for owners
   - CTA to form

2. Benefits

3. Simple process (3–4 steps)

4. Lead Form (IMPORTANT)

Fields:
- Full Name
- Phone Number
- Stadium Name
- Location
- Message (optional)

Form must:
- be short
- mobile friendly
- show success state
- validate inputs

5. Small FAQ

6. Footer

---

## Form Handling

Implement a working form.

Options:
- API route
- or send to email / webhook

Must include:
- validation
- loading state
- success message
- error handling

---

## Tech

Use:
- Next.js
- TypeScript
- Tailwind CSS

---

## Code Rules

- reusable components
- clean structure
- responsive design
- no messy code
- no unused parts

---

## Design Goal

The website must feel:
- like a real startup
- clean and modern
- trustworthy
- easy to use
- not like a template

---

## Important

Do NOT:
- overcomplicate
- add random sections
- use fake complex features
- create long forms
- break mobile layout

---

## Instruction

Act as:
- senior UI/UX designer
- senior product builder
- senior frontend developer

Build a clean, high-quality, conversion-focused website.