import type { Metadata } from "next";
import { Inter, Outfit, IBM_Plex_Mono } from "next/font/google";
import Navigation from "@/components/navigation";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body"
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-display"
});

const ibmPlexMono = IBM_Plex_Mono({ 
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "NebulaQueue - AI-Powered Content Pipeline",
  description: "Manage your content creation pipeline with AI-powered scheduling, optimization, and analytics. Never miss the perfect moment to publish.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${ibmPlexMono.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}