import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import BubbleBackground from "@/components/main/bubbleBackground";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col h-screen">
            <Navbar />
            {/* Fondo de burbujas */}
            <BubbleBackground />
            {/* Efecto de iluminación */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-transparent z-10 pointer-events-none" />

            <main className="container mx-auto max-w-full pt-16 px-6 z-10 flex-grow">
              {children}
            </main>
            <Footer />
            </div>
        </Providers>
      </body>
    </html>
  );
}
