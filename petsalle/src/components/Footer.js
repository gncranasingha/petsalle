import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <footer className="bg-beige pt-8 pb-4 px-2 md:px-4">
      {/* Subscribe Section */}
      <div className="max-w-6xl mx-auto bg-[#003459] rounded-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left-aligned text with 30% width */}
          <h2 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-0 md:basis-3/10">
            Register Now So You Don't Miss Our Programs
          </h2>

          {/* Right-aligned search bar with 70% width */}
          <div className="flex mt-4 md:mt-0 w-full md:basis-7/10">
            <div className="bg-white w-full rounded-lg flex items-center p-2">
              <input
                type="text"
                placeholder="Enter your Email"
                className="border border-gray-300 rounded-lg px-3 py-2 w-4/5"
              />
              <button className="bg-[#003459] text-white rounded-lg px-4 py-2 ml-2 hover:bg-[#002a4a] transition duration-200">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center mb-4 text-gray-700">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-gray-900">Home</a>
          <a href="#" className="hover:text-gray-900">Category</a>
          <a href="#" className="hover:text-gray-900">About</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-gray-900"><FaFacebookF /></a>
          <a href="#" className="text-gray-700 hover:text-gray-900"><FaTwitter /></a>
          <a href="#" className="text-gray-700 hover:text-gray-900"><FaInstagram /></a>
          <a href="#" className="text-gray-700 hover:text-gray-900"><FaYoutube /></a>
        </div>
      </div>

      {/* Logo and Copyright */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600">
        <p className="text-center md:text-left">© 2022 Monito. All rights reserved.</p>
        <img src={logo} alt="Monito Logo" className="h-8 my-2 md:my-0" />
        <div className="flex flex-wrap justify-center md:justify-end space-x-6">
          <a href="#" className="hover:text-gray-900">Terms of Service</a>
          <a href="#" className="hover:text-gray-900">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
