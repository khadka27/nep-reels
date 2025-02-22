// Assuming this is in a file like src/pages/_app.tsx or a specific layout component file

import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./components/Providers";
import Header from "./components/Header";

// Utilize the Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] });

// Updated metadata to reflect the new app name and focus
export const metadata = {
  title: "नेपReels",
  description:
    "Explore the integration of ImageKit with Next.js in the NepReels platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
