import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Mail, Linkedin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Truck size={24} className="text-ice-cold" />
              <span className="text-xl font-bold">XFFS</span>
            </div>
            <p className="text-gray-300">
              Your One-Stop Solution for Trucking Insurance Quotes, Dispatch Services & Lead Generation!
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-ice-cold transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:info@xffs.com" 
                className="text-white hover:text-ice-cold transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+12345678900" 
                className="text-white hover:text-ice-cold transition-colors duration-300"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-ice-cold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-ice-cold transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/insurance" className="text-gray-300 hover:text-ice-cold transition-colors duration-300">
                  Insurance Quotes
                </Link>
              </li>
              <li>
                <Link to="/dispatch" className="text-gray-300 hover:text-ice-cold transition-colors duration-300">
                  Dispatch Services
                </Link>
              </li>
              <li>
                <Link to="/lead-generation" className="text-gray-300 hover:text-ice-cold transition-colors duration-300">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-ice-cold transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-ice-cold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-ice-cold transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-ice-cold transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-ice-cold">Contact Us</h3>
            <address className="not-italic">
              <p className="text-gray-300">123 Trucking Avenue</p>
              <p className="text-gray-300">Logistics City, LC 12345</p>
              <p className="text-gray-300 mt-2">
                <a href="tel:+12345678900" className="hover:text-ice-cold transition-colors duration-300">
                  (234) 567-8900
                </a>
              </p>
              <p className="text-gray-300">
                <a href="mailto:info@xffs.com" className="hover:text-ice-cold transition-colors duration-300">
                  info@xffs.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} X Fleet & Freight Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;