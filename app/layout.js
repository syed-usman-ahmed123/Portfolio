import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/provider";
import Navbar from "@/components/navbar";
import SmoothScroll from "@/components/smooth-scroll";


const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://syedusmanahmed.vercel.app"),
  title: "Syed Usman Ahmed | Full Stack & CMS Developer Karachi",
  description: "Portfolio of Syed Usman Ahmed, a Full Stack & CMS Developer from Karachi, Pakistan specializing in Next.js, MERN, WordPress, and Shopify.",
  keywords: ["Syed Usman Ahmed", "Usman Ahmed Developer", "Full Stack Developer Karachi", "Next.js Developer Pakistan", "Shopify Developer Karachi"],

  openGraph: {
    title: "Syed Usman Ahmed | Full Stack & CMS Developer",
    description: "Full Stack Developer specializing in Next.js, MERN Stack, WordPress, and Shopify solutions.",
    url: "https://syedusmanahmed.vercel.app",
    siteName: "Syed Usman Ahmed Portfolio",
    images: [{ url: "/og-image.png" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >

      <body className={`${geistSans.className} min-h-full flex flex-col text-[var(--primary-text)] bg-[var(--primary-bg)]`}>
        <Providers>
          <Navbar />
          <main className="flex-grow">
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </main>
        </Providers>
      </body>
    </html>
  );
}