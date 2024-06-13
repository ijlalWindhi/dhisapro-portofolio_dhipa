import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/shared/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Starter",
  description: "Next.js Starter by Dhisa Production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative flex h-screen w-screen flex-col font-sans md:flex-row">
          <Sidebar />
          <div className="relative flex h-full max-w-full flex-1 overflow-auto">
            <div className="flex h-full w-full flex-col">
              {/* <GeneralHeader
          className="h-20 w-full bg-white px-6 py-4"
          :header_name="header_name"
          :header_icon="header_icon"
        /> */}
              <div className="h-full w-full overflow-auto dark:bg-gray-950 bg-slate-50 px-6 py-4">
                {children}
              </div>
              {/* <GeneralFooter className="h-fit w-full bg-white px-6 py-4" /> */}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
