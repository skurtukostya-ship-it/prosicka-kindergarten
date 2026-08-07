import type { Metadata, Viewport } from "next";
import { MotionConfig } from "framer-motion";
import "@fontsource-variable/nunito";
import "@fontsource-variable/inter";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { LoadingScreen } from "@/components/loading-screen";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { FloatingContact } from "@/components/floating-contact";
import { site } from "@/lib/content";

export const viewport: Viewport = {
  themeColor: "#f7b733",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — ${site.name}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "дитячий садочок",
    "заклад дошкільної освіти",
    "Просіка",
    "Чернівецька область",
    "ЗДО",
    "дошкільна освіта",
  ],
  openGraph: {
    title: `${site.fullName} — ${site.name}`,
    description: site.description,
    type: "website",
    locale: "uk_UA",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} — ${site.name}`,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <a href="#main" className="skip-link">
          Перейти до основного контенту
        </a>
        <MotionConfig reducedMotion="user">
          <LoadingScreen />
          <ScrollProgress />
          <SmoothScroll>{children}</SmoothScroll>
          <ScrollToTop />
          <FloatingContact />
        </MotionConfig>
      </body>
    </html>
  );
}
