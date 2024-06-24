import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/shared/layout/sidebar";
import Footer from "@/components/shared/layout/footer";
import Header from "@/components/shared/layout/header";
import { METADATA } from "@/constants/metadata";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="relative flex h-screen w-screen flex-col font-sans md:flex-row">
          <Sidebar />
          <div className="relative flex h-full max-w-full flex-1 overflow-auto">
            <div className="flex h-full w-full flex-col">
              <Header />
              <div className="w-full h-auto">
                <div className="w-full dark:bg-gray-950 bg-slate-50 p-3 md:px-6 md:py-4">
                  {children}
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
