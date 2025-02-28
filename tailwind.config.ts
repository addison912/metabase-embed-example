import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/app/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-noto_sans)", "sans-serif"],
        secondary: ["var(--font-raleway)", "sans-serif"],
        brand: ["var(--font-syncopate)", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGklEQVQYV2NkQAOMUH4DAwMDCDPABODqMAQAKe4BBZTlhh0AAAAASUVORK5CYII=)",
      },
      backgroundColor: {
        primary: colors.gray[900],
        secondary: colors.slate[800],
        menu: colors.gray[700],
        "menu-contrast": colors.gray[800],
        "menu-secondary": colors.slate[700],
      },
      colors: {
        "text-primary": colors.white,
        "text-secondary": colors.orange[200],
      },
      boxShadow: {
        md: "4px 4px 7px 0px rgb(0, 0, 0, .3)",
        dark: "0px 20px 20px 10px rgb(0, 0, 0, .82)",
      },
      screens: {
        xs: "475px",
      },
      button: {
        primary: {
          borderRadius: "rounded-lg",
          padding: "py-2 px-4",
          color: "white",
          backgroundColor: "cyan-600",
          "&:hover": {
            backgroundColor: "cyan-700",
          },
        },
        secondary: {
          color: "white",
          backgroundColor: "var(--button-secondary)",
          "&:hover": {
            backgroundColor: "var(--button-secondary-hover)",
          },
        },
      },
      maxHeight: {
        main: "calc(100vh - var(--header-height))",
      },
      minHeight: {
        main: "calc(100vh - var(--header-height))",
      },
    },
  },
} satisfies Config;
