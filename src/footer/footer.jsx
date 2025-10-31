import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-xl font-semibold ">SAE NITK</h2>
          <p className="text-sm text-gray-200 ">
            Empowering innovation through engineering excellence.
          </p>
        </div>

        <div className="text-center mr-1 mb-4 sm:mb-0">
          <p className="text-sm ">© 2025 SAE NITK. All rights reserved.</p>
        </div>

        
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300 text-sm">
            About
          </a>
          <a href="#" className="hover:text-gray-300 text-sm">
            Events
          </a>
          <a href="#" className="hover:text-gray-300 text-sm">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
