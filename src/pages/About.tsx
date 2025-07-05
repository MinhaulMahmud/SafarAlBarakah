import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Compass, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-pilgrims bg-cover bg-center bg-no-repeat opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
      <div className="relative z-10 max-w-3xl sm:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-nusuk-gold leading-tight">
              Safar Al Barakah — Your Trusted Companion for Umrah from Bangladesh
            </h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-300 leading-relaxed">
              Safar Al Barakah is a dedicated and emerging Umrah agency in Bangladesh, committed to guiding pilgrims on their sacred journey with care, compassion, and convenience. Our mission is rooted in excellence and sincerity—ensuring every traveler experiences a peaceful, spiritually fulfilling Umrah from the moment they plan until their safe return.
            </p>
            <ul className="mb-6 text-base text-gray-300 leading-relaxed list-disc pl-5 space-y-1 sm:space-y-2">
              <li><b>🕋 Spiritual Guidance:</b> Religious orientation, Dua booklets, and support to help pilgrims perform rituals correctly and confidently.</li>
              <li><b>✈ Seamless Travel:</b> Visa, air ticketing, hotel booking, and airport transfers—all logistics handled.</li>
              <li><b>🏨 Comfortable Stay:</b> Clean, comfortable stays close to the Haramain—within your budget.</li>
              <li><b>🇧🇩 Local Support:</b> Bangladeshi team, speaking your language and understanding your needs.</li>
              <li><b>🌍 Flexible Packages:</b> For individuals, families, and groups.</li>
              <li><b>🤝 Honesty & Barakah:</b> Trust and blessings at the heart of everything we do.</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-nusuk-gold text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-base"
              >
                Begin Your Sacred Journey
              </motion.button>
            </div>
          </motion.div>

          {/* Stats/Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            <motion.div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-nusuk-gold mb-2 flex justify-center"><Heart className="w-7 h-7 sm:w-8 sm:h-8" /></div>
              <div className="text-lg sm:text-2xl font-bold text-white mb-1">Spiritual Guidance</div>
              <div className="text-gray-300 text-xs sm:text-sm">Religious orientation and support</div>
            </motion.div>
            <motion.div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-nusuk-gold mb-2 flex justify-center"><Users className="w-7 h-7 sm:w-8 sm:h-8" /></div>
              <div className="text-lg sm:text-2xl font-bold text-white mb-1">Bangladeshi Team</div>
              <div className="text-gray-300 text-xs sm:text-sm">Local support, always by your side</div>
            </motion.div>
            <motion.div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-nusuk-gold mb-2 flex justify-center"><Globe className="w-7 h-7 sm:w-8 sm:h-8" /></div>
              <div className="text-lg sm:text-2xl font-bold text-white mb-1">Personalized Packages</div>
              <div className="text-gray-300 text-xs sm:text-sm">For individuals, families, and groups</div>
            </motion.div>
            <motion.div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-nusuk-gold mb-2 flex justify-center"><Award className="w-7 h-7 sm:w-8 sm:h-8" /></div>
              <div className="text-lg sm:text-2xl font-bold text-white mb-1">Honesty & Barakah</div>
              <div className="text-gray-300 text-xs sm:text-sm">Trust and blessings in every step</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;