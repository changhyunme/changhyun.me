import "./globals.css";
import Fenster from "../components/Fenster";

export const metadata = {
  title: "changhyun.me",
  description: "changhyun official website",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="relative w-screen min-h-screen p-5
                        flex md:items-center justify-center"
        >
          <Fenster>
            {children}
          </Fenster>
        </div>
      </body>
    </html>
  );
}
