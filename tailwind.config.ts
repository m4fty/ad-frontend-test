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
        ".footer-container": {
          backgroundColor: "#404040",
          height: "172px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".header-cart-span": {
          position: "absolute",
          top: "-8px",
          right: "-8px",
          backgroundColor: "#ef4444",
          color: "#ffffff",
          fontSize: "0.75rem",
          fontWeight: "700",
          width: "1.25rem",
          height: "1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "9999px",
        },
        ".div_image_shrink": {
          position: "relative",
          flexShrink: "0",
          marginBottom: "1rem",
          display: "flex",
          width: "100%",
          height: "200px",
          "@screen md": {
            width: "120px",
            height: "80px",
            marginBottom: "0",
            flexDirection: "row",
          },
        },
        ".game_element_container": {
          width: "100%",
          height: "436px",
          borderWidth: "1px",
          borderColor: "#d1d5db",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
          padding: "1.5rem",
          "@screen sm": {
            width: "327px",
          },
          "@screen md": {
            width: "360px",
          },
          "@screen lg": {
            width: "380px",
          },
        },
        ".chip_container": {
          position: "absolute",
          top: "0.5rem",
          left: "0.5rem",
          backgroundColor: "#f5f5f4",
          color: "#6b7280",
          fontSize: "16px",
          fontWeight: "400",
          padding: "0 1rem",
          borderRadius: "0.375rem",
          zIndex: "10",
        },
      });
    },
  ],
};

export default config;
