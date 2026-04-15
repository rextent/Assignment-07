import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-green-900 text-white pt-12 pb-6 px-4">

      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold">
          KeenKeeper
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm lg:text-base text-gray-300 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        {/* Social */}
        <div className="mt-6">
          <p className="text-sm text-gray-300 mb-3">Social Links</p>

          <div className="flex justify-center gap-4">
            <a className="w-10 h-10 flex items-center justify-center bg-white text-green-900 rounded-full hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a className="w-10 h-10 flex items-center justify-center bg-white text-green-900 rounded-full hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a className="w-10 h-10 flex items-center justify-center bg-white text-green-900 rounded-full hover:scale-110 transition">
              <FaXTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-green-700 pt-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between text-xs text-gray-300 gap-3">

          {/* Left */}
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          {/* Right */}
          <div className="flex gap-4">
            <a className="hover:underline">Privacy Policy</a>
            <a className="hover:underline">Terms of Service</a>
            <a className="hover:underline">Cookies</a>
          </div>

        </div>
      </div>

    </footer>
    );
};

export default Footer;