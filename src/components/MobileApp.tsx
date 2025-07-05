import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, Star, MapPin, Calendar, Bell } from 'lucide-react';

const MobileApp = () => {
  const features = [
    { icon: <MapPin className="w-6 h-6" />, title: "Real-time Navigation" },
    { icon: <Calendar className="w-6 h-6" />, title: "Prayer Times" },
    { icon: <Bell className="w-6 h-6" />, title: "Smart Notifications" },
    { icon: <Star className="w-6 h-6" />, title: "Personalized Experience" }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="w-full mx-auto px-2 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-nusuk-teal mb-6">
              Make your Umrah unforgettable: Enhance your spiritual experience with Safar Al Barakah App
            </h2>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Download the official Safar Al Barakah mobile app to access exclusive features, 
              real-time updates, and comprehensive guidance for your pilgrimage journey.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="text-nusuk-gold">
                    {feature.icon}
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{feature.title}</span>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors text-sm"
              >
                <Download className="w-5 h-5" />
                <span>Download on App Store</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-700 transition-colors text-sm"
              >
                <Download className="w-5 h-5" />
                <span>Get it on Google Play</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Main Phone */}
              <div className="relative z-10 bg-black rounded-3xl p-2 shadow-2xl">
                <div className="bg-gray-900 rounded-2xl p-3 w-64 h-72 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white text-sm font-semibold">Safar Al Barakah</div>
                    <div className="text-white text-sm">9:41 AM</div>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-nusuk-teal to-nusuk-gold rounded-xl p-3 text-white">
                    <h3 className="text-base font-bold mb-1">Welcome to Safar Al Barakah</h3>
                    <p className="text-xs opacity-90 mb-2">Your spiritual journey starts here</p>
                    <div className="space-y-1">
                      <div className="bg-white/20 rounded-lg p-2">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span className="text-xs">Makkah, Saudi Arabia</span>
                        </div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span className="text-xs">Next Prayer: Maghrib</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Phone */}
              <div className="absolute -right-4 top-8 z-0 bg-black rounded-3xl p-1 shadow-xl transform rotate-12">
                <div className="bg-gray-900 rounded-2xl p-3 w-40 h-48 flex flex-col">
                  <div className="flex-1 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-3 text-white">
                    <h3 className="text-base font-bold mb-1">Ziyarah Guide</h3>
                    <p className="text-xs opacity-90">Discover sacred places</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;