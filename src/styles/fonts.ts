import { Noto_Sans, Raleway, Syncopate } from "next/font/google";

export const noto_sans_init = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
  weight: ["100", "300", "500", "700"],
});

export const raleway_init = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["100", "300", "500", "700"],
});

export const syncopate_init = Syncopate({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syncopate",
  weight: ["400", "700"],
});

export const noto_sans = noto_sans_init.variable;
export const raleway = raleway_init.variable;
export const syncopate = syncopate_init.variable;
