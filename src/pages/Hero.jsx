import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { ScrollLink } from "../Components/MainLayout/ScrollLink";

export function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* ================= HERO MAIN ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div data-aos="fade-right">
          <span className="text-blue-400 font-medium tracking-wide uppercase text-sm">
            Next Generation Smartphones
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-4 mb-6">
            Power Meets <span className="text-blue-500">Performance</span>
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-lg">
            Discover premium smartphones at unbeatable prices. Experience
            cutting-edge technology, stunning design, and unmatched speed — all
            in one place.
          </p>

          <div className="flex gap-4 flex-wrap">
            <ScrollLink to="/products">
              <button className="bg-blue-600 px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition shadow-lg hover:scale-105">
                Shop Now
              </button>
            </ScrollLink>

            <ScrollLink to="/products">
              <button className="border border-gray-500 px-8 py-3 rounded-xl hover:bg-gray-700 transition hover:scale-105">
                Explore Deals
              </button>
            </ScrollLink>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center relative" data-aos="fade-left">
          <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <img
            src="https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp"
            alt="phone"
            loading="lazy"
            className="relative w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          Why Choose Voltivo?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div
            className="bg-slate-800 p-8 rounded-2xl text-center hover:-translate-y-1.5 transition duration-300 shadow-lg border border-slate-700"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl bg-blue-600/20">
              <img
                src="https://img.icons8.com/ios-filled/100/3b82f6/smartphone.png"
                alt="Smart Devices"
                className="w-8 h-8"
              />
            </div>

            <h3 className="text-xl font-semibold mb-3">Premium Devices</h3>

            <p className="text-gray-400 text-sm">
              Latest flagship smartphones from trusted brands with verified
              quality.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-slate-800 p-8 rounded-2xl text-center hover:-translate-y-1.5 transition duration-300 shadow-lg border border-slate-700"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl bg-purple-600/20">
              <img
                src="https://img.icons8.com/ios-filled/100/a855f7/discount.png"
                alt="Deals"
                className="w-8 h-8"
              />
            </div>

            <h3 className="text-xl font-semibold mb-3">Exclusive Deals</h3>

            <p className="text-gray-400 text-sm">
              Enjoy unbeatable discounts and weekly special offers.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-slate-800 p-8 rounded-2xl text-center hover:-translate-y-1.5 transition duration-300 shadow-lg border border-slate-700"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl bg-green-600/20">
              <img
                src="https://img.icons8.com/ios-filled/100/22c55e/truck.png"
                alt="Shipping"
                className="w-8 h-8"
              />
            </div>

            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>

            <p className="text-gray-400 text-sm">
              Secure and fast shipping with real-time tracking.
            </p>
          </div>
        </div>
      </div>

      {/* ================= EXTENDED CTA SECTION ================= */}
      <div className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade Your Smartphone?
          </h2>
          <p className="text-blue-100 mb-8">
            Join thousands of happy customers and experience seamless shopping
            today.
          </p>
          <NavLink to="/products">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Start Shopping
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
