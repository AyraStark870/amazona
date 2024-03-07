import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Amazona V2",
  description: "Modern ECommerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
        <Header/>  
        {children}
        <footer className="footer footer-center bg-base-300 p-4 text-base-content">
          <p>Copy right 2024 - All right reserved by Next Amazona V2</p>
        </footer>
        </div>

        </body>
    </html>
  );
}
