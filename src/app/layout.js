import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "rangwali",
  description: "Create Diwali Cards",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/app.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          minHeight: "100dvh", // Use dynamic viewport height for mobile compatibility
          margin: 0, // Remove default margins
          position: "relative", // Ensure body is positioned for absolute children
        }}
      >
        <div
          className="min-h-[100dvh] w-full relative" // Use dynamic viewport height
          style={{
            background:
              "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
            backgroundSize: "cover", // Ensure background covers the entire area
            backgroundAttachment: "fixed", // Prevent scrolling issues on mobile
            backgroundPosition: "center", // Center the gradient
          }}
        >
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
