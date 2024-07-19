import type { Metadata } from "next";
import "./globals.css";
import { Footer, NavBar } from "@/components";


export const metadata: Metadata = {
  title: "GL Motos",
  description: "Descubra a sua moto ideal!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
