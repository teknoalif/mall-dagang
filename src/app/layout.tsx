import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MALL DAGANG - Marketplace Komunitas",
  description: "Wadah jual beli komunitas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 
