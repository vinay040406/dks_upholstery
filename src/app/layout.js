import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "DKS Upholstery",
  description: "Upholstery Services Trusted Across Singapore",
  openGraph: {
    title: "DKS Upholstery",
    description: "Upholstery Services Trusted Across Singapore",
    images: ["/meta-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
