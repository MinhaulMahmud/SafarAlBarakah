import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-10">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-16">
            {/* Company Info */}
            <div className="flex-1 min-w-[220px] mb-8 lg:mb-0">
              <div className="flex items-center mb-4">
                <img src="/logo2.png" alt="Safar Al Barakah" className="h-10 w-auto mr-2" />
                <span className="text-nusuk-gold font-bold text-lg">Safar Al Barakah</span>
              </div>
              {/* <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
                Your trusted companion for Umrah from Bangladesh. We guide you with care, compassion, and convenience—striving for barakah in every journey.
              </p> */}
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-nusuk-gold" />
                  <span className="text-gray-300">+8801810-811400</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-nusuk-gold" />
                  <span className="text-gray-300">+8801994-422701</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-nusuk-gold" />
                  <span className="text-gray-300">info.safaralbarakah@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-nusuk-gold" />
                  <span className="text-gray-300">114, BK Tower, Lalchand Road, Chawkbazar, Chattogram</span>
                </div>
              </div>
            </div>
            {/* Links & Social */}
            <div className="flex-1 flex flex-col sm:flex-row gap-8">
              <div className="flex-1 min-w-[140px]">
                <h3 className="text-base font-semibold mb-3 text-nusuk-gold">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-nusuk-gold transition-colors">Home</a></li>
                  <li><a href="#about" className="text-xs sm:text-sm text-gray-300 hover:text-nusuk-gold transition-colors">About</a></li>
                  <li><a href="#services" className="text-xs sm:text-sm text-gray-300 hover:text-nusuk-gold transition-colors">Services</a></li>
                  <li><a href="#packages" className="text-xs sm:text-sm text-gray-300 hover:text-nusuk-gold transition-colors">Packages</a></li>
                  <li><a href="#contact" className="text-xs sm:text-sm text-gray-300 hover:text-nusuk-gold transition-colors">Contact</a></li>
                </ul>
              </div>
              <div className="flex-1 min-w-[140px]">
                <h3 className="text-base font-semibold mb-3 text-nusuk-gold">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#faq" className="text-xs sm:text-sm text-gray-300 hover:text-nusuk-gold transition-colors">FAQs</a></li>
                  <li><a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-nusuk-gold transition-colors">Travel Insurance</a></li>
                  <li><a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-nusuk-gold transition-colors">Feedback</a></li>
                </ul>
              </div>
              <div className="flex-1 min-w-[140px]">
                <h3 className="text-base font-semibold mb-3 text-nusuk-gold">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-nusuk-gold transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-nusuk-gold transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-nusuk-gold transition-colors">Refund Policy</a></li>
                </ul>
              </div>
              <div className="flex-1 min-w-[140px]">
                <h3 className="text-base font-semibold mb-3 text-nusuk-gold">Follow Us</h3>
                <div className="flex space-x-3 mt-2">
                  <a href="#" className="text-gray-300 hover:text-nusuk-gold transition-colors"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="text-gray-300 hover:text-nusuk-gold transition-colors"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="text-gray-300 hover:text-nusuk-gold transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="text-gray-300 hover:text-nusuk-gold transition-colors"><Youtube className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-xs sm:text-sm text-gray-300 text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start">
                © 2025 Safar Al Barakah. Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for the Ummah
              </p>
            </div>
            <div className="text-xs sm:text-sm text-gray-400 text-center md:text-right">
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;