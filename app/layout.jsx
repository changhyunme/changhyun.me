import "./globals.css";
import Fenster from "../components/Fenster";
import Szene from "@/components/Szene";
import Kopf from "@/components/Kopf";
import { Lato } from 'next/font/google';

// export const metadata = {
//   title: "changhyun.me",
//   description: "changhyun official website",
// };

const lato = Lato({
  weight: ['100', '300', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.className}`}>
      <body>
        <div className="relative w-screen min-h-screen py-5 px-2
                        flex md:items-center justify-center"
        >
          <Szene />
          <Kopf />
          <Fenster>
            {children}
          </Fenster>
        </div>
      </body>
    </html>
  );
}
