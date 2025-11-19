import "../globals.css";

import { Lato } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import Fenster from "@/components/Fenster";
import Szene from "@/components/Szene";
import Kopf from "@/components/Kopf";
import TI from "@/components/ui/ThemeInitializer";
import Drawber from "@/components/ui/Drawber";
import DrawberContact from "@/components/DrawberContact";
import VisitorTracker from "@/components/VisitorTracker";
import CookieConsent from "@/components/CookieConsent";


// export const metadata = {
//   title: "changhyun.me",
//   description: "changhyun official website",
// };

const lato = Lato({
  weight: ['100', '300', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const viewport = {
  themeColor: "oklch(0.208 0.042 265.755)",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true, // Allow zooming for accessibility
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.className} dark`}>
      <head>
        <link rel="alternate" type="application/rss+xml" title="CHANGHYUN.me Journal" href="/legacy/rss.xml" />
      </head>
      <body>
        <CookieConsent>
          <TI />
          <VisitorTracker />
          <div className="relative w-screen min-h-screen p-0 md:py-5 md:px-2
                          flex md:items-center justify-center"
          >
            <Drawber>
              <DrawberContact />
            </Drawber>
            <Szene aria-hidden="true" />
            <Kopf />
            <Fenster>
              <main>
                {children}
              </main>
            </Fenster>
          </div>
          <Analytics />
          <SpeedInsights />
        </CookieConsent>
      </body>
    </html>
  );
}
