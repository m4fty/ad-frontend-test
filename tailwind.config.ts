import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cta-stroke-primary': 'var(--CTA-Stroke-cta-stroke-primary, #3B3B3B)',
        'bg-neutral-700': 'var(--bg-neutral-700, #585660)',

      },
      spacing: {
        'Spacing2': '8px',
        'Spacing4': '16px',
        'Spacing6': '24px',
      },
      borderRadius: {
        'rounded-lg': '8px',
        'rounded-2xl': '16px',
      },
    },
  },
  plugins: [],
};

export default config;
