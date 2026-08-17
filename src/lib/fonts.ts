import { Nunito_Sans } from "next/font/google";

export const appFont = Nunito_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
  variable: "--font-app",
});
