import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display, Poppins } from "next/font/google";
import AOSInit from "@/components/AOSInit";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AK & Partners | Kantor Hukum",
  description: "Kantor Hukum Ahmad Kawakiby, S.H., M.H. & Partners",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable} font-sans`}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
