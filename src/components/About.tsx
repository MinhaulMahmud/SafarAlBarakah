import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Award } from 'lucide-react';

const About = () => {
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
              Safar Al Barakah — Your Trusted Umrah Companion
            </h2>
            <p className="text-sm mb-6 text-gray-300 leading-relaxed">
              We are a dedicated Umrah agency in Bangladesh, committed to guiding pilgrims on their sacred journey with care and convenience. Experience a peaceful, spiritually fulfilling Umrah from planning to safe return.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
              <div className="text-nusuk-gold">🔋</div>
              <span className="text-sm text-gray-300">Spiritual Guidance</span>
              </div>
              <div className="flex items-center space-x-3">
              <div className="text-nusuk-gold">✈</div>
              <span className="text-sm text-gray-300">Complete Travel Support</span>
              </div>
              <div className="flex items-center space-x-3">
              <div className="text-nusuk-gold">🏨</div>
              <span className="text-sm text-gray-300">Comfortable Stay</span>
              </div>
              <div className="flex items-center space-x-3">
              <div className="text-nusuk-gold">🇧🇩</div>
              <span className="text-sm text-gray-300">Local Bangladeshi Team</span>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-nusuk-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-sm"
              onClick={() => window.location.href = '/packages'}
            >
              Begin Your Sacred Journey
            </motion.button>
            </motion.div>

          {/* Stats Grid */}
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
              <div className="text-base font-semibold text-white mb-2">Spiritual</div>
              <div className="text-sm text-gray-300">Religious guidance & support</div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
            >
              <div className="text-nusuk-gold mb-3 flex justify-center">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-base font-semibold text-white mb-2">Local Team</div>
              <div className="text-sm text-gray-300">Bangladeshi support & care</div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
            >
              <div className="text-nusuk-gold mb-3 flex justify-center">
                <Globe className="w-8 h-8" />
              </div>
              <div className="text-base font-semibold text-white mb-2">Flexible</div>
              <div className="text-sm text-gray-300">Individual & group packages</div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
            >
              <div className="text-nusuk-gold mb-3 flex justify-center">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-base font-semibold text-white mb-2">Trusted</div>
              <div className="text-sm text-gray-300">Honesty & barakah focused</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;