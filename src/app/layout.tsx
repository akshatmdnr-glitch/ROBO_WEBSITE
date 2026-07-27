import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Akshat Mishra | Robotics Engineer & ROS2 Developer",
    template: "%s | Akshat Mishra",
  },
  description:
    "Personal robotics laboratory & research portfolio of Akshat Mishra. Robotics Engineer, ROS2 Developer, Autonomous Systems Enthusiast & Educator.",
  keywords: [
    "Robotics Engineer",
    "ROS2 Developer",
    "Akshat Mishra",
    "Autonomous Systems",
    "SLAM",
    "Motion Planning",
    "LiDAR Sensor Fusion",
    "Robotics Research",
    "C++ Robotics",
  ],
  authors: [{ name: "Akshat Mishra" }],
  creator: "Akshat Mishra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshatmishra-robotics.dev",
    title: "Akshat Mishra | Robotics Engineer & Autonomous Systems Portfolio",
    description:
      "Modern Robotics Laboratory, Open Source ROS2 Packages, Research Journey & Educational Resources by Akshat Mishra.",
    siteName: "Akshat Mishra Robotics Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Mishra | Robotics Engineer & ROS2 Developer",
    description: "Akshat Mishra — Modern Robotics Laboratory & Research Portfolio.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#FAF7F2] text-[#1E1E1E] antialiased selection:bg-[#F8EAE3] selection:text-[#BC7A61] flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
