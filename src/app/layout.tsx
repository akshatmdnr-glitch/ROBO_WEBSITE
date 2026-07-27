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
    "Gazebo Isaac Sim",
  ],
  authors: [{ name: "Akshat Mishra" }],
  creator: "Akshat Mishra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshatmishra-robotics.dev",
    title: "Akshat Mishra | Robotics Engineer & Autonomous Systems Enthusiast",
    description:
      "Modern Robotics Laboratory, Open Source ROS2 Packages, Research Journey & Educational Resources by Akshat Mishra.",
    siteName: "Akshat Mishra Robotics Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Mishra | Robotics Engineer & ROS2 Developer",
    description: "Personal robotics lab, research, ROS2 tutorials & beginner roadmaps.",
    creator: "@akshat_robotics",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F3EEF9] text-[#1E152A] font-sans antialiased flex flex-col selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
        {/* Subtle Ambient Soft Lavender Radial Lighting */}
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />
        <div className="fixed -top-40 -left-40 w-96 h-96 bg-[#C084FC]/20 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="fixed top-1/3 -right-40 w-96 h-96 bg-[#E8D5C4]/20 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="fixed -bottom-40 left-1/3 w-96 h-96 bg-[#DDD6FE]/30 rounded-full blur-[150px] pointer-events-none z-0" />

        <Navbar />
        <main className="flex-grow z-10 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
