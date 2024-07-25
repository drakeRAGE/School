import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Springdale Public School</h2>
            <p className="text-gray-400 mb-4">
              Providing quality education and holistic development for students. Our school focuses on academic excellence, extracurricular activities, and character building.
            </p>
            <p className="text-gray-500 text-sm">© 2024 Springdale Public School. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-gray-300 transition-colors">About Us</a></li>
              <li><a href="/academics" className="hover:text-gray-300 transition-colors">Academics</a></li>
              <li><a href="/faculty" className="hover:text-gray-300 transition-colors">Faculty</a></li>
              <li><a href="/students" className="hover:text-gray-300 transition-colors">Students</a></li>
              <li><a href="/gallery" className="hover:text-gray-300 transition-colors">Gallery</a></li>
              <li><a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Springdale Public School, 123 Education Lane</p>
            <p className="text-gray-400 mb-2">Cityville, State, ZIP Code</p>
            <p className="text-gray-400 mb-2">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-400 mb-4">Email: <a href="mailto:info@springdale.edu" className="text-gray-300 hover:text-white transition-colors">info@springdale.edu</a></p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors"><FaInstagram size={24} /></a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
