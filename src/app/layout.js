import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      >
        <div className="min-h-screen w-full relative">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
            }}
          />
          {children}
        </div>
      </body>
    </html>
  );
}
