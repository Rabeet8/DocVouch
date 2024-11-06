import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 text-center">
      {/* Gradient Line */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="h-[2px] bg-gradient-to-r from-blue-700 to-blue-900"></div>
      </div>

      <p className="text-xl md:text-2xl font-serif">
        Made By{" "}
        <span className="font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
          Syed Rabeet
        </span>
      </p>
    </footer>
  );
};

export default Footer;
