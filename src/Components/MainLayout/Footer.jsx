import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { ScrollLink } from "./ScrollLink";
import { BsLinkedin } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-blue-500 mb-3">
              ⚡ Voltivo
            </h2>
            <p className="text-sm leading-relaxed">
              Powering Your World with premium smartphones and unbeatable deals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <ScrollLink to="/" className="hover:text-blue-500 transition">
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="/products"
                  className="hover:text-blue-500 transition"
                >
                  Products
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="/about"
                  className="hover:text-blue-500 transition"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="/contact"
                  className="hover:text-blue-500 transition"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 text-xl">
              <a
                href="https://www.instagram.com/muhammad.anas_34"
                className="p-2 rounded-full bg-pink-700 hover:bg-pink-800 text-slate-100 hover:text-white transition"
                target="_blank"
              >
                <AiFillInstagram />
              </a>

              <a
                href="#"
                className="p-2 rounded-full bg-blue-600 hover:bg-blue-800 text-slate-100 hover:text-white transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://github.com/anaskhan34"
                className="p-2 rounded-full bg-slate-700 hover:bg-slate-800 text-slate-100 hover:text-white transition"
                target="_blank"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/anaskhan34/"
                className="p-2 rounded-full bg-blue-600 hover:bg-blue-800 text-slate-100 hover:text-white transition"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Voltivo. All rights reserved.</p>
          <p className="text-slate-600 mt-1">
            Design & Developed By{" "}
            <span className="text-blue-500 font-medium">
              Muhammad Anas Khan
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
