import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Curly IT</h3>
            <p className="mb-4">Professional IT solutions for businesses of all sizes.</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:support@curly-it.co.uk" className="hover:text-white">
                  support@curly-it.co.uk
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+441234567890" className="hover:text-white">
                  +44 123 456 7890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white">Support</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Microsoft Support</li>
              <li>Remote Support</li>
              <li>Cloud Support</li>
              <li>Software Support</li>
              <li>Hardware Support</li>
              <li>On-Site Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Curly IT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;