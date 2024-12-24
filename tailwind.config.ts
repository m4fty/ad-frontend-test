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
        "cta-stroke-primary": "var(--CTA-Stroke-cta-stroke-primary, #3B3B3B)",
        "bg-neutral-700": "var(--bg-neutral-700, #585660)",
        "bg-neutral-800": "#383838",
      },
      spacing: {
        Spacing2: "8px",
        Spacing4: "16px",
        Spacing6: "24px",
      },
      borderRadius: {
        "rounded-lg": "8px",
        "rounded-2xl": "16px",
      },
    },
  },
  plugins: [
    function ({ addComponents }: { addComponents: any }) {
      addComponents({
        ".container-base": {
          width: "100%",
          "max-width": "1600px",
          margin: "0 auto",
          padding: "0 1rem",
          "@screen md": {
            padding: "0 2rem",
          },
        },
        ".button-primary": {
          "background-color": "var(--bg-neutral-700, #585660)",
          color: "#ffffff",
          "font-size": "1rem",
          "font-weight": "600",
          "border-radius": "8px",
          padding: "0.75rem 1.5rem",
          "&:hover": {
            "background-color": "var(--bg-neutral-800, #383838)",
          },
          "&:disabled": {
            "background-color": "#9e9e9e",
            cursor: "not-allowed",
          },
        },
        ".title-primary": {
          "font-size": "1.5rem",
          "font-weight": "bold",
          color: "#383838",
          "text-transform": "uppercase",
          "@screen lg": {
            "text-transform": "capitalize",
          },
        },
      });
    },
  ],
};

export default config;
