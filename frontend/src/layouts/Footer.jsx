import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About HomeTeacher</h3>
          <p className="text-sm text-gray-400">
            HomeTeacher is a platform connecting students with professional teachers, offering tailored learning experiences for academic success.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-500">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: support@hometeacher.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 1234 Education St, Knowledge City</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              className="bg-gray-800 p-3 rounded-full hover:bg-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HomeTeacher. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
