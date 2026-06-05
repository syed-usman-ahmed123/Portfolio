import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/provider";
import Navbar from "@/components/navbar";


const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Syed Usman Ahmed | Full Stack & CMS Developer", 
  description:
    "Explore the portfolio of Syed Usman Ahmed. Full Stack Developer building modern web applications using Next.js, React, Node.js, and MongoDB, alongside custom WordPress and Shopify development.",
  keywords: [
    "Syed Usman Ahmed",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "WordPress Developer", 
    "Shopify Expert",       
    "Web Developer Pakistan",
  ],
  openGraph: {
    title: "Syed Usman Ahmed | Full Stack & CMS Developer",
    description: "Full Stack Developer specializing in Next.js, MERN Stack, WordPress, and Shopify solutions.",
    url: "https://syedusmanahmed.vercel.app",
    siteName: "Syed Usman Ahmed Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Syed Usman Ahmed Portfolio Preview",
      },
    ],
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
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}