import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "PdfVerxe",
  description: "Edit and sign PDFs instantly — no downloads, no headaches.",
};
const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={`${inter.className} bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
