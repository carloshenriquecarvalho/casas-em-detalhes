import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Borges Planejados & Esquadrias - Móveis Sob Medida e Alto Padrão",
  description: "Transforme sua casa com móveis planejados sob medida e esquadrias de alumínio. Soluções inteligentes, design exclusivo e acabamento impecável.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.className} h-full antialiased scroll-smooth`}>
      <head>
        <GoogleTagManager gtmId="GTM-5MXL4X6S" />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-brand-orange selection:text-white">
        
        {children}
      </body>
    </html>
  );
}
