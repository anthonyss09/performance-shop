import "./globals.css";
import StoreProvider from "./StoreProvider";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import { Inter, Kolker_Brush } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const kolker = Kolker_Brush({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kolker",
  weight: "400",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${kolker.variable}`}>
      <StoreProvider>
        <body>
          <Navbar />
          <div className="children">{children}</div>
          {/* <div className="spacer"></div> */}
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
