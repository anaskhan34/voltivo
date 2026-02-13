import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollToTop } from "./ScrollToTop";

export function MainLayout() {
  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
