import React from "react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="bg-white py-24" id="solutions">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
        Transform Your Business with AI-Powered Solutions
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
        CrystalView provides cutting-edge data analytics and AI-driven
        automation to help you unlock new opportunities and drive growth.
      </p>
      <Link
        to="/contact"
        className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
      >
        Get Started
      </Link>
    </div>
  </section>
);

export default Hero;