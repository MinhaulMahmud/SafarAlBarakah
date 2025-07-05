import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Users, Compass } from 'lucide-react';

const AboutNusuk = () => {
  return (
    <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-pilgrims bg-cover bg-center bg-no-repeat opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-nusuk-gold leading-tight">
              Our Story & Values
            </h2>
            <h3 className="text-base font-semibold mb-6 text-white">Safar Al Barakah — Guided by Sincerity & Service</h3>
            <p className="text-sm mb-6 text-gray-300 leading-relaxed">
              Safar Al Barakah was founded to make Umrah accessible, peaceful, and spiritually fulfilling for Bangladeshi pilgrims. We are a startup, but our roots are deep in honesty, compassion, and a sincere desire to serve. Every journey is personal, and we strive to provide guidance, comfort, and support at every step.
            </p>
            <p className="text-sm mb-6 text-gray-300 leading-relaxed">
              Our team is local, our approach is personal, and our mission is to bring barakah (blessings) to every traveler. We believe in building trust, offering transparent packages, and supporting you from planning to your safe return.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-nusuk-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-sm"
            >
              Learn More About Safar Al Barakah
            </motion.button>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
            >
              <div className="text-nusuk-gold mb-3 flex justify-center">
                <Heart className="w-8 h-8" />
              </div>
              <div className="text-base font-semibold text-white mb-2">Compassion</div>
              <div className="text-sm text-gray-300">We care for every pilgrim as family.</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
            >
              <div className="text-nusuk-gold mb-3 flex justify-center">
                <Globe className="w-8 h-8" />
              </div>
              <div className="text-base font-semibold text-white mb-2">Guidance</div>
              <div className="text-sm text-gray-300">Religious and practical support at every step.</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
            >
              <div className="text-nusuk-gold mb-3 flex justify-center">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-base font-semibold text-white mb-2">Community</div>
              <div className="text-sm text-gray-300">Bangladeshi team, local language, local care.</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
            >
              <div className="text-nusuk-gold mb-3 flex justify-center">
                <Compass className="w-8 h-8" />
              </div>
              <div className="text-base font-semibold text-white mb-2">Barakah</div>
              <div className="text-sm text-gray-300">We strive for blessings in every journey.</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutNusuk;