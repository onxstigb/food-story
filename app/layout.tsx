import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ['300', '400', '600'], variable: '--font-serif' });
const sans = Montserrat({ subsets: ["latin"], weight: ['300', '400'], variable: '--font-sans' });
const script = Mrs_Saint_Delafield({ subsets: ["latin"], weight: ['400'], variable: '--font-script' });

export const metadata: Metadata = { title: "The Shared Table" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${script.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-[#FAF9F6] text-[#918868]">{children}</body>
    </html>
  );
}