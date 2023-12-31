import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RTC Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
        <div className="grid grid-colums-4 min-h-screen bg-gray-100 dark:bg-gradient-to-r from-blue-900 to-pink-900 bg-scroll">
          {/* bg-gray-900 */}
          <header className="col-span-4 h-30">
            <Navbar />
          </header>
          <main className="col-span-4 min-w-screen p-1">{children}</main>
          <footer className="h-40 col-span-4"></footer>
        </div>
      </body>
    </html>
  );
}
