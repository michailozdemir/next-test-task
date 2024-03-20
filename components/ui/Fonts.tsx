import { Poppins, Nunito_Sans } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});
