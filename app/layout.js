import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TrackIt",
  description: "Manage Your Finance",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* Header can be added here */}
        <Header/>
        <main className="min-h-screen">{children}</main>
        
        {/* Footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600"> {/* Fixed text color */}
            <p>Made by Harsh</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
