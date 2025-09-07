import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-gray-800">CrystalView</Link>
      <nav className="hidden md:flex items-center space-x-6">
        <a
          href="https://vision.crystalview.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-indigo-600 transition"
        >
          Vision
        </a>
        <HashLink to="/#solutions" className="text-gray-600 hover:text-indigo-600 transition">
          Solutions
        </HashLink>
        <HashLink to="/#services" className="text-gray-600 hover:text-indigo-600 transition">
          Services
        </HashLink>
        <Link
          to="/contact"
          className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition text-sm"
        >
          Contact
        </Link>
      </nav>
      <div className="md:hidden">
        {/* Mobile menu button can be added here */}
      </div>
    </div>
  </header>
);

export default Header;