/**
 * Brand color constants
 * Centralized color values to maintain consistency across the application
 */
export const BRAND_COLORS = {
  primary: "#14b8a6",
  secondary: "#8b9cff",
  background: {
    dark: "#0a0e27",
    card: "#1e2a47",
    cardHover: "#243356",
    darker: "#0d1129",
    input: "#2a3556",
  },
  border: {
    default: "#2a3556",
    hover: "#14b8a6",
    accent: "#14b8a6",
  },
  text: {
    primary: "#ffffff",
    secondary: "#e5e5e5",
    muted: "#9ca3af",
    link: "#14b8a6",
  },
} as const;

/**
 * Opacity values for consistent transparency
 */
export const OPACITY = {
  LIGHT: 0.1,
  MEDIUM: 0.3,
  HEAVY: 0.5,
  ALMOST_FULL: 0.8,
} as const;
