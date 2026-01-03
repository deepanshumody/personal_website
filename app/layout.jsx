import "./globals.css";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata = {
  title: "Deepanshu Mody | Data Science",
  description:
    "Personal website for Deepanshu Mody"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
