/**
 * Maydonify Design System — Brand Tokens
 * Single source of truth for all visual constants.
 * Import from here; never hardcode values in components.
 */

// ─── Colors ──────────────────────────────────────────────────────────────────

export const colors = {
  /** Brand green — primary CTA, active states, highlights */
  primary:   '#00A86B',
  /** Darkest background — base canvas */
  dark:      '#0D1117',
  /** Raised surface — cards, panels */
  surface:   '#111827',
  /** Subdued text / icons */
  muted:     '#6B7280',
  /** Near-white accent — text on dark, borders */
  accent:    '#F9FAFB',
  /** Destructive actions, errors */
  danger:    '#EF4444',
} as const;

export type ColorToken = keyof typeof colors;

// ─── Typography ───────────────────────────────────────────────────────────────

export const typography = {
  /** Display / headings — Syne from Google Fonts */
  fontDisplay: '"Syne", sans-serif',
  /** Body copy — system stack for performance */
  fontBody:    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

  weights: {
    regular:   400,
    medium:    500,
    semibold:  600,
    bold:      700,
    extrabold: 800,
  },
} as const;

// ─── Spacing ─────────────────────────────────────────────────────────────────

export const spacing = {
  1:  '4px',
  2:  '8px',
  3:  '12px',
  4:  '16px',
  6:  '24px',
  8:  '32px',
  12: '48px',
  16: '64px',
} as const;

export type SpacingToken = keyof typeof spacing;

// ─── Border Radius ────────────────────────────────────────────────────────────

export const borderRadius = {
  sm: '6px',
  md: '10px',
  lg: '16px',
  xl: '24px',
} as const;

export type RadiusToken = keyof typeof borderRadius;

// ─── Shadows ─────────────────────────────────────────────────────────────────

export const shadows = {
  /** Subtle lift for standard cards */
  card:     '0 2px 8px rgba(0, 0, 0, 0.45)',
  /** Deeper elevation for modals, dropdowns */
  elevated: '0 8px 32px rgba(0, 0, 0, 0.65)',
  /** Green glow — CTAs, active/focused primary elements */
  glow:     '0 0 20px rgba(0, 168, 107, 0.45), 0 0 48px rgba(0, 168, 107, 0.18)',
} as const;

export type ShadowToken = keyof typeof shadows;

// ─── CSS Variable Map (mirrors :root in globals.css) ─────────────────────────
// Use these string references when building inline-style objects in components.

export const cssVars = {
  colorPrimary:  'var(--color-primary)',
  colorDark:     'var(--color-dark)',
  colorSurface:  'var(--color-surface)',
  colorMuted:    'var(--color-muted)',
  colorAccent:   'var(--color-accent)',
  colorDanger:   'var(--color-danger)',

  fontDisplay:   'var(--font-display)',
  fontBody:      'var(--font-body)',

  shadowCard:     'var(--shadow-card)',
  shadowElevated: 'var(--shadow-elevated)',
  shadowGlow:     'var(--shadow-glow)',
} as const;

// ─── Flat token export (convenience) ─────────────────────────────────────────

const tokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  cssVars,
} as const;

export default tokens;
