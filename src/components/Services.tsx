import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { 
  MapPin, 
  Plane, 
  Hotel, 
  Users, 
  Calendar, 
  Shield, 
  Heart, 
  Clock
} from 'lucide-react';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoSlideInterval = useRef<number | null>(null);
  const dragX = useMotionValue(0);

  const services = [
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Spiritual Guidance",
      description: "Religious orientation, Dua booklets, and support to help pilgrims perform Umrah rituals correctly and confidently."
    },
    {
      icon: <Plane className="w-5 h-5" />,
      title: "Visa & Air Ticketing",
      description: "Complete visa processing and air ticketing for a seamless start to your journey."
    },
    {
      icon: <Hotel className="w-5 h-5" />,
      title: "Accommodation",
      description: "Clean, comfortable hotels in Makkah and Madinah, close to the Haramain, within your budget."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Personalized Packages",
      description: "Flexible Umrah packages for individuals, families, and groups—tailored to your needs."
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Ziyarah & Guided Tours",
      description: "Full Ziyarah tours in Makkah and Madinah with Bangladeshi guides and historical commentary."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Support & Training",
      description: "Pre-departure training, 24/7 Bangladeshi support, and group leader assistance throughout your journey."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Airport Transfers & Transport",
      description: "Airport pickup/drop-off and comfortable AC transport for all intercity travel."
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Local Team in Bangladesh",
      description: "Our local team speaks your language and understands your needs—always by your side."
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoSlideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 3500); // 3.5 seconds interval
    }

    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [isAutoPlaying, itemsPerSlide]);

  // Update items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(4);
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(services.length / itemsPerSlide);

  // Handle drag/swipe gestures
  const handleDragEnd = (event: MouseEvent | TouchEvent, info: { offset: { x: number }, velocity: { x: number } }) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    if (Math.abs(offset) > 50 || Math.abs(velocity) > 500) {
      if (offset > 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      } else if (offset < 0 && currentSlide < totalSlides - 1) {
        setCurrentSlide(prev => prev + 1);
      }
    }
    
    dragX.set(0);
  };

  const handleDragStart = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const getCurrentServices = () => {
    const start = currentSlide * itemsPerSlide;
    const end = start + itemsPerSlide;
    return services.slice(start, end);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardRef: HTMLDivElement | null) => {
    if (cardRef) {
      const rect = cardRef.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCursorPosition({ x, y });
    }
  };

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-nusuk-teal mb-2 sm:mb-3">Our Services</h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            Everything you need for a peaceful, spiritually fulfilling Umrah from Bangladesh
          </p>
        </motion.div>

        <div className="relative">
          {/* Slideshow Container */}
          <div 
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                dragElastic={0.2}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{ x: dragX }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`grid gap-4 sm:gap-6 ${
                  itemsPerSlide === 1 ? 'grid-cols-1' :
                  itemsPerSlide === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                  itemsPerSlide === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
                  'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}
              >
                {getCurrentServices().map((service, index) => (
                  <motion.div
                    key={`${currentSlide}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-150 cursor-pointer relative overflow-hidden group select-none"
                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.15 }
                    }}
                  >
                    {/* Cursor following glow effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-150"
                      style={{
                        background: `radial-gradient(150px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(20, 184, 166, 0.3), transparent 40%)`
                      }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="text-nusuk-gold mb-2 sm:mb-3 flex justify-center"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: [0, -3, 3, -3, 0],
                          transition: { duration: 0.3 }
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-base font-semibold text-nusuk-teal mb-1 sm:mb-2 text-center">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 text-center leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <motion.div
              className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-nusuk-teal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-400'}`} />
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className="mt-3 flex justify-center">
            <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-nusuk-teal rounded-full"
                animate={{
                  width: `${((currentSlide + 1) / totalSlides) * 100}%`
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Swipe Instructions */}
          <motion.div
            className="text-center mt-3 text-xs text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="hidden sm:block">Drag to navigate • Hover to pause</p>
            <p className="sm:hidden">Swipe to navigate</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;