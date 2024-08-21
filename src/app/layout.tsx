import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Gallery",
  description:
    "Next.js 14.2.4 Image Gallery showcasing the latest Next functionality and features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="custom-background">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
