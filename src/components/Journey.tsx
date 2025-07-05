import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, MapPin, Camera } from 'lucide-react';

const Journey = () => {
  const journeySteps = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Begin Your Visa Process",
      description: "Guide by a Bangladeshi pilgrim on visa & permission.",
      image: "https://www.kaia.sa/_next/image?url=https%3A%2F%2Fcdn.kaia.sa%2F-%2Fjssmedia%2Fproject%2Fjedco%2Fkaia%2Fhero%2Fhero_photo01.png%3Fh%3D1335%26iar%3D0%26w%3D1994%26hash%3D35E8947325574E664D690FD06C699EA2&w=3840&q=75",
      color: "bg-blue-600",
      link: "https://bangladeshairtravels.com/blog-details/5/A-Step-by-Step-Guide-to-Performing-Umrah-for-First-Time-Pilgrims"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Umrah & Ziyarah",
      description: "Tips & precautions by Bangladeshi pilgrims.",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Kaaba_mirror_edit_jj.jpg",
      color: "bg-green-600",
      link: "https://www.hijazhajjnumrah.com/about-us/blog"
    },
    {
      icon: <Camera className="w-5 h-5" />,
      title: "Explore Makkah",
      description: "Flight options from Bangladesh explained.",
      image: "https://blog.umrahme.com/wp-content/uploads/2023/09/spiritual_gems.jpg",
      color: "bg-purple-600",
      link: "https://www.holyhajjnumrah.com/blog/flight-options-umrah-bangladesh"
    },
    {
      icon: <ArrowRight className="w-5 h-5" />,
      title: "Complete Journey",
      description: "Full FAQs from Bangladeshi Umrah pilgrims.",
      image: "https://www.arabnews.jp/en/wp-content/uploads/sites/2/2020/11/Umrah3.jpg",
      color: "bg-orange-600",
      link: "https://www.itsholidaysltd.com/faqs-on-umrah-for-bangladeshi"
    }
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide for mobile
  useEffect(() => {
    if (!isMobile) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % journeySteps.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isMobile, journeySteps.length]);

  return (
    <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-pilgrims bg-cover bg-center bg-no-repeat opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-nusuk-gold mb-2 sm:mb-3">Your Pilgrimage Journey</h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Click a step to read a Bangladeshi pilgrim’s real-world blog on that topic.
          </p>
        </motion.div>

        <div className="relative">
          {/* Mobile: Slideshow */}
          {isMobile ? (
            <div className="overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-75 select-none"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={journeySteps[currentIndex].image}
                    alt={journeySteps[currentIndex].title}
                    className="w-full h-full object-cover transition-transform duration-75 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className={`absolute top-3 left-3 ${journeySteps[currentIndex].color} text-white p-1.5 rounded-full`}>
                    {journeySteps[currentIndex].icon}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-nusuk-teal mb-1">{journeySteps[currentIndex].title}</h3>
                  <p className="text-xs text-gray-600 mb-2">{journeySteps[currentIndex].description}</p>
                  <a
                    href={journeySteps[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nusuk-gold flex items-center text-xs font-medium mt-2"
                  >
                    Read Blog <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </motion.div>
              {/* Dots navigation */}
              <div className="flex justify-center mt-4 space-x-2">
                {journeySteps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full ${currentIndex === idx ? 'bg-nusuk-gold' : 'bg-white/40 hover:bg-white/60'} transition-colors`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {journeySteps.map((step, i) => (
                <motion.a
                  key={i}
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-75 select-none"
                >
                  <div className="relative h-40 sm:h-36 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-75 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className={`absolute top-3 left-3 ${step.color} text-white p-1.5 rounded-full`}>
                      {step.icon}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base sm:text-lg font-semibold text-nusuk-teal mb-1">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">{step.description}</p>
                    <div className="text-nusuk-gold flex items-center text-xs sm:text-sm font-medium">
                      Read Blog <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Journey;
