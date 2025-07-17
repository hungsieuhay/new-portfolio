import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Frontend Developer Portfolio",
    template: "%s | Frontend Developer Portfolio",
  },
  description:
    "Experienced frontend developer specializing in Next.js, TypeScript, and modern web applications. Showcasing expertise in customer portal development and SaaS dashboards.",
  keywords: [
    "Frontend Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Customer Portal",
    "Web Development",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio.com",
    title: "Frontend Developer Portfolio",
    description:
      "Experienced frontend developer specializing in Next.js, TypeScript, and modern web applications.",
    siteName: "Frontend Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer Portfolio",
    description:
      "Experienced frontend developer specializing in Next.js, TypeScript, and modern web applications.",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
