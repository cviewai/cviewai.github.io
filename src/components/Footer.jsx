import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <h2 className="text-2xl font-bold text-white mb-2">CrystalView</h2>
          <p className="text-sm">Clarity in a Complex World.</p>
        </div>
        <div className="col-span-1">
          <h4 className="text-white font-semibold text-lg mb-4">Navigate</h4>
          <ul className="space-y-2">
            <li><HashLink to="/#solutions" className="hover:text-white transition">Solutions</HashLink></li>
            <li><HashLink to="/#services" className="hover:text-white transition">Services</HashLink></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-2">
            <li><a href="mailto:contact@crystalview.ai" className="hover:text-white transition">contact@crystalview.ai</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Facebook</a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} CrystalView. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="/eula" className="hover:text-white transition">EULA</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;