import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react
import { useSelector } from "react-redux";
import { MdShoppingCart } from "react-icons/md";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const cartLength = useSelector((store) => store.cart.items);

  // Tailwind class for smooth underline animation
  const linkClass =
    "relative font-bold transition-all after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="bg-slate-950 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <h1 className="text-2xl font-bold tracking-wide text-blue-500">
            ⚡ Voltivo
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-300">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={linkClass}>
            Shop
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Cart + Hamburger */}
        <div className="flex items-center gap-4">
          <NavLink to="/Summary">
            <button className="flex items-center gap-2 cursor-pointer bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-800 transition shadow-lg">
              <MdShoppingCart size={20} />
              <span>Cart ({cartLength.length})</span>
            </button>
          </NavLink>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden text-center bg-slate-900 px-6 py-4 space-y-4 text-gray-300">
          <NavLink
            to="/"
            className="block hover:text-blue-400 transition relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="block hover:text-blue-400 transition relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setIsOpen(false)}
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className="block hover:text-blue-400 transition relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block hover:text-blue-400 transition relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}
