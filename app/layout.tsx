import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { SideMenu } from "@/components/side-menu";
import { CallToAction } from "@/components/call-to-action";
import { hostName, ogURL, siteName } from "@/lib/site-config";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Germany Basic Law (Grundgesetz)",
  description: `Establishing the legal and political framework for the federal government and its relationship with the states and citizens.`,
  openGraph: {
    siteName,
    type: "website",
    images: [`${ogURL}${hostName}`],
  },
  other: {
    canonical: `${hostName}`,
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`antialiased notranslate ${geistMono.variable} ${geistSans.variable}`}
      translate="no"
      suppressHydrationWarning
    >
      <body
        className={
          "relative min-h-screen font-mono flex flex-col justify-between"
        }
      >
        <div className={"flex-1"}>
          <Header />
          <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/20 py-4 md:gap-8 md:py-10">
            <div className="container mx-auto space-y-8 lg:space-y-12">
              <div className="mx-auto grid w-full items-start gap-6 lg:grid-cols-[250px_1fr]">
                <nav className="hidden lg:grid gap-2 text-sm sticky top-[100px]">
                  <SideMenu />
                </nav>
                <div className="flex-1 space-y-8 lg:space-y-12">{children}</div>
              </div>
            </div>
          </main>
        </div>
        <CallToAction />
        <Footer />
        <Script
          strategy="lazyOnload"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1170295433759824"
          crossOrigin="anonymous"
        />
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          strategy="lazyOnload"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-92MWSB8BEZ"
        />
        <Script id="" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-92MWSB8BEZ');`}
        </Script>
      </body>
    </html>
  );
}
