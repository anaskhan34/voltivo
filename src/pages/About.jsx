import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { ReviewsSection } from "./ReviewsSection";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* ================= HERO STYLE HEADER ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        <h2
          className="text-4xl md:text-6xl font-extrabold mb-6"
          data-aos="fade-up"
        >
          About <span className="text-blue-500">Voltivo</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          We are redefining the smartphone shopping experience with premium
          devices, unbeatable pricing, and exceptional customer service.
        </p>
      </div>

      {/* ================= MISSION & VISION ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Mission */}
        <div data-aos="fade-right">
          <h3 className="text-3xl font-bold mb-6 text-blue-400">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed">
            At Voltivo, our mission is to provide cutting-edge smartphones at
            competitive prices while ensuring seamless customer experience.
            Technology should empower lives — and we make it accessible.
          </p>
        </div>

        <div className="flex justify-center" data-aos="fade-left">
          <div className="bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700">
            <img
              src="https://images.pexels.com/photos/11494897/pexels-photo-11494897.jpeg"
              alt="Mission"
              className="rounded-xl w-80"
            />
          </div>
        </div>
      </div>

      {/* ================= CORE VALUES ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <h3 className="text-3xl font-bold text-center mb-14" data-aos="fade-up">
          Our Core Values
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Innovation", color: "bg-blue-600/20" },
            { title: "Quality", color: "bg-green-600/20" },
            { title: "Customer First", color: "bg-purple-600/20" },
            { title: "Integrity", color: "bg-pink-600/20" },
          ].map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-slate-800 border border-slate-700 p-8 rounded-2xl text-center hover:-translate-y-2 transition duration-300"
            >
              <div
                className={`w-14 h-14 mx-auto mb-6 rounded-xl ${item.color}`}
              ></div>
              <h4 className="font-semibold text-lg mb-3">{item.title}</h4>
              <p className="text-gray-400 text-sm">
                We stay committed to excellence and continuous improvement.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= EXTRA SERVICES SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <h3 className="text-3xl font-bold text-center mb-14" data-aos="fade-up">
          What We Offer
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg hover:shadow-blue-500/20 transition">
            <h4 className="text-xl font-semibold mb-4 text-blue-400">
              Free Shipping
            </h4>
            <p className="text-gray-400 text-sm">
              Nationwide fast delivery with secure packaging and tracking.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg hover:shadow-purple-500/20 transition">
            <h4 className="text-xl font-semibold mb-4 text-purple-400">
              Secure Payments
            </h4>
            <p className="text-gray-400 text-sm">
              Encrypted payment gateways ensuring complete transaction safety.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg hover:shadow-green-500/20 transition">
            <h4 className="text-xl font-semibold mb-4 text-green-400">
              24/7 Support
            </h4>
            <p className="text-gray-400 text-sm">
              Dedicated support team ready to assist anytime.
            </p>
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-blue-600 py-20 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Experience Voltivo?
        </h3>
        <p className="text-blue-100 mb-8">
          Upgrade your smartphone journey today.
        </p>
        <NavLink to="/products">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Explore Products
          </button>
        </NavLink>
      </div>

      {/* Reviews Section */}
      <div className="bg-gray-50 text-black py-24">
        <ReviewsSection />
      </div>
    </section>
  );
};
