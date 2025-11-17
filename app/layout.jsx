import "./globals.css";
import Navbar from "./components/Navbar";
import LenisScroll from "./components/LenisScroll";
import ThemeToggle from "./components/ThemeToggle";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
import SocialSidebar from "./components/SocialSidebar";

export const metadata = {
  title: "Munazza Begam — Developer & Engineer",
  description:
    "Portfolio of Munazza Begam — Web Developer, Electronics Engineer, and AI Enthusiast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <CustomCursor />
        <LenisScroll>
          <ScrollProgress />
          <Navbar />
          <SocialSidebar />
          {children}

          {/* Floating Utility Buttons (Dark Mode + Scroll to Top) */}
          <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 flex flex-col gap-3 z-[999]">
            <ThemeToggle />
            <ScrollToTop />
          </div>
        </LenisScroll>
      </body>
    </html>
  );
}
