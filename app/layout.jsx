import "./globals.css";
import Navbar from "./components/Navbar";
import LenisScroll from "./components/LenisScroll";

export const metadata = {
  title: "Alex Johnson — Creative Developer",
  description: "Minimal portfolio with GSAP & smooth motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LenisScroll>
          <Navbar />
          {children}
        </LenisScroll>
      </body>
    </html>
  );
}
