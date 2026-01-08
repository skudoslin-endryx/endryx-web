import type { Metadata } from "next";
import { Orbitron, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({ 
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-noto",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Endryx | Worlds Within",
  description: "Independent Game Studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${notoSansSC.variable}`}>
      <body className="bg-void text-tech font-body antialiased selection:bg-signal selection:text-void">
        {children}
      </body>
    </html>
  );
}