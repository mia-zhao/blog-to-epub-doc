import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Blog to EPUB - Convert Blog Posts to EPUB with Complete Privacy",
  description: "Transform any blog into a beautiful EPUB book. All processing happens locally in your browser - no data sent to servers, ensuring complete privacy.",
  keywords: ["blog", "epub", "converter", "privacy", "chrome extension", "ebook", "reader"],
  authors: [{ name: "Blog to EPUB Team" }],
  creator: "Blog to EPUB",
  publisher: "Blog to EPUB",
  openGraph: {
    title: "Blog to EPUB - Convert Blog Posts to EPUB with Complete Privacy",
    description: "Transform any blog into a beautiful EPUB book. All processing happens locally in your browser - no data sent to servers, ensuring complete privacy.",
    url: "https://blog2epub.vercel.app",
    siteName: "Blog to EPUB",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog to EPUB - Convert Blog Posts to EPUB with Complete Privacy",
    description: "Transform any blog into a beautiful EPUB book. All processing happens locally in your browser - no data sent to servers, ensuring complete privacy.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
