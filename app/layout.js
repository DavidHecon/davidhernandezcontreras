import "./globals.css";
import BackgroundAnimated from "./components/BackgroundAnimated";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "David Hernández | Portfolio",
  description: "Frontend Developer especializado en React y Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen bg-black text-white relative overflow-x-hidden`}>
        
        {/* Background animado */}
        <BackgroundAnimated />

        {/* Contenido */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}
