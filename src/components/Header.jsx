import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading placeholder
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-50 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full text-center">
        <h1 className="text-5xl md:text-8xl font-poppins font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-900 leading-tight md:leading-snug drop-shadow-xl">
          DocVouch
        </h1>
        <p className="mt-4 font-poppins font-bold text-lg md:text-xl text-black max-w-xl mx-auto leading-relaxed tracking-wide drop-shadow-md">
          Empower your digital presence by effortlessly notarizing documents on
          the blockchain, ensuring undeniable proof of existence.
        </p>
        <br />

        <div className="flex justify-center">
          <Link
            to="/proof"
            className="flex items-center justify-center group rounded-lg border-2 border-blue-700 bg-gradient-to-r from-blue-700 to-blue-900 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 px-6 md:px-8 py-3 text-base md:text-lg font-poppins font-semibold transition duration-300 ease-in-out relative overflow-hidden hover:opacity-90"
          >
            <span className="text-center">Secure Your Documents</span>
            <span className="absolute right-3 md:right-2 top-1/2 transform -translate-y-1/2 text-white transition-all duration-300 ease-in-out group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 opacity-50" />
    </div>
  );
};

export default Header;
