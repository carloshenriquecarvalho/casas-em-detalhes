import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="pt-BR" className={`${inter.className} h-full antialiased`}>
      <head>
        {/* Placeholder GTM */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-XXXXXXX');` }} /> */}
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-brand-orange selection:text-white">
        {/* Placeholder GTM (noscript) */}
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript> */}
        {children}
      </body>
    </html>
  );
}
