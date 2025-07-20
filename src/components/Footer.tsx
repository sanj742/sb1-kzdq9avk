import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">KM</span>
              </div>
              <span className="font-bold text-xl">Kisaan Mitra</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting farmers directly with consumers, enabling fair prices and fresh produce for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/marketplace" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Marketplace
              </Link>
              <Link to="/dashboard" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Dashboard
              </Link>
              <Link to="/weather" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Weather Updates
              </Link>
              <Link to="/schemes" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Government Schemes
              </Link>
              <Link to="/banking" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Banking Services
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Help Center
              </a>
              <a href="#" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                FAQs
              </a>
              <a href="#" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-primary-400 transition-colors text-sm">
                Contact Us
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300 text-sm">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300 text-sm">support@kisaanmitra.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Agricultural Hub,<br />
                  New Delhi, India 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Kisaan Mitra. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made with ❤️ for Indian Farmers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;