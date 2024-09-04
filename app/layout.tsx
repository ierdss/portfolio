import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://andreiportfolio.vercel.app"),
  favicon: "favicon.ico",
  title: "Andrei Sager",
  description: "My personal online portfolio as a Software Developer.",
  image: "/Me.png",
  openGraph: {
    image: "/Me.png",
    url: "https://andreiportfolio.vercel.app",
    siteName: "andreiportfolio.vercel.app",
    title: "Andrei Sager",
    description: "My personal online portfolio as a Software Developer.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    image: "/Me.png",
    card: "summary_large_image",
    title: "Andrei Sager",
    description: "My personal online portfolio as a Software Developer.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center w-full">
          <div className="flex flex-col w-full max-w-screen-2xl">
            <Navbar />
            <main className="w-full">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
