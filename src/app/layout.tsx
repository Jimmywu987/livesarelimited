import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/Provider";
import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "人生事有限公司",
  description:
    "我們是死亡的百貨公司 - 人生是人生事，讓我們在人生的最後一件事為你延續愛，整理好與逝者的回憶和物品，重新出發。",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          inter.className,
          "relative h-full font-roboto antialiased"
        )}
        suppressHydrationWarning
      >
        <Providers>
          <Navbar />
          <main className="relative flex flex-col min-h-screen">
            <div className="flex-grow flex-1">{children}</div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
