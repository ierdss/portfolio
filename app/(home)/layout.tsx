import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import { Poppins, PT_Serif } from "next/font/google";
import "./globals.css";

const font = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const pt_serif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt-serif",
});

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} ${pt_serif.variable}`}>
        <ThemeProvider
          enableSystem={true}
          disableTransitionOnChange
          defaultTheme="dark"
          themes={["dark", "light"]}
        >
          <div className="flex w-full flex-col justify-center">
            <Navbar />
            <main className="w-full">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
