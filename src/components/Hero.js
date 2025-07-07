import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Hero.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// --- Data for our slides (Using your exact image links and titles) ---
const slides = [
    {
        image: 'https://t3.ftcdn.net/jpg/04/86/60/60/360_F_486606014_wCKrJKAS3yKOeIZoqJprhGGlduoxuUCx.jpg',
        title: 'Safar Al Barakah — Your Trusted Companion for Umrah from Bangladesh',
        subtitle: 'Begin your sacred journey with care, compassion, and convenience. Experience a peaceful, spiritually fulfilling Umrah with our dedicated Bangladeshi team.',
        cta: 'See Umrah Packages',
        ctaHref: '/packages',
        bgPosition: 'left',
    },
    {
        image: 'https://www.cuddlynest.com/blog/wp-content/uploads/2024/04/medina_mosque.png',
        title: 'Personalized Umrah Packages for Every Pilgrim',
        subtitle: 'Flexible options for individuals, families, and groups. Honest pricing, local support, and full guidance from visa to return.',
        cta: 'Explore Packages',
        ctaHref: '/packages',
        bgPosition: 'left',
    },
    {
        image: 'https://the-cradle-media.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/08/hajj.jpg',
        title: 'Bangladeshi Support, Every Step of the Way',
        subtitle: 'Our local team ensures you always have someone to guide you, answer your questions, and support your Ibadah.',
        cta: 'Why Choose Us',
        ctaHref: '/why-us',
        bgPosition: 'left',
    },
];
// --- Sophisticated Wavy Pattern SVG Component ---
const WavyPattern = () => (_jsx("div", { className: "absolute bottom-0 left-0 w-full h-32 md:h-48 z-[5]", "aria-hidden": "true", children: _jsxs("svg", { className: "w-full h-full", viewBox: "0 0 1440 150", preserveAspectRatio: "none", children: [_jsx("defs", { children: _jsx("clipPath", { id: "waveClip", children: _jsx("path", { d: "M0,50 C240,10,480,110,720,50 C960,-10,1200,90,1440,50 L1440,150 L0,150 Z" }) }) }), _jsx("rect", { x: "0", y: "0", width: "1440", height: "150", fill: "#0B101B", clipPath: "url(#waveClip)" }), _jsxs("g", { clipPath: "url(#waveClip)", fill: "none", stroke: "#C5A572", strokeWidth: "2.5", children: [_jsx("path", { d: "M-200,80 C200,30,400,130,800,80 C1200,30,1400,130,1640,80" }), _jsx("path", { d: "M-200,95 C250,45,450,145,850,95 C1250,45,1450,145,1690,95", opacity: "0.8" }), _jsx("path", { d: "M-200,110 C300,60,500,160,900,110 C1300,60,1500,160,1740,110", opacity: "0.6" }), _jsx("path", { d: "M-200,125 C350,75,550,175,950,125 C1350,75,1550,175,1790,125", opacity: "0.4" })] })] }) }));
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentSlide = slides[currentIndex];
    useEffect(() => {
        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        };
        const timerId = setTimeout(nextSlide, 8000);
        return () => clearTimeout(timerId);
    }, [currentIndex]);
    return (_jsxs("section", { className: "relative min-h-[70vh] md:min-h-screen flex items-center overflow-hidden bg-black", children: [_jsx(AnimatePresence, { children: _jsx(motion.div, { className: "absolute inset-0 bg-cover bg-center md:bg-left bg-no-repeat", style: {
                        backgroundImage: `url(${currentSlide.image})`,
                        backgroundPosition: currentSlide.bgPosition,
                    }, initial: { opacity: 0 }, animate: { opacity: 1, scale: [1.05, 1.15] }, exit: { opacity: 0 }, transition: {
                        opacity: { duration: 1.5, ease: 'easeInOut' },
                        scale: { duration: 9, ease: 'linear' },
                    }, children: _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" }) }, currentIndex) }), _jsx("div", { className: "relative z-10 w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-24", children: _jsx("div", { className: "max-w-xl text-left text-white", children: _jsx(AnimatePresence, { mode: "wait", children: _jsxs(motion.div, { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 40 }, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }, children: [_jsx("h1", { className: "text-xl sm:text-2xl md:text-4xl font-bold mb-4 leading-tight", children: currentSlide.title }), _jsx("p", { className: "text-sm sm:text-base md:text-lg mb-8 text-gray-200", children: currentSlide.subtitle }), _jsx(motion.a, { href: currentSlide.ctaHref, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "bg-nusuk-gold text-white px-6 py-2 sm:px-10 sm:py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors shadow-lg inline-block text-sm sm:text-base", children: currentSlide.cta })] }, currentIndex) }) }) }), _jsx(WavyPattern, {}), _jsx("div", { className: "absolute bottom-8 w-full mx-auto px-8 sm:px-12 lg:px-24 z-20", children: _jsx("div", { className: "flex space-x-3", children: slides.map((_, index) => (_jsx("button", { onClick: () => setCurrentIndex(index), "aria-label": `Go to slide ${index + 1}`, className: `w-2.5 h-2.5 rounded-full ${currentIndex === index ? 'bg-nusuk-gold' : 'bg-white/40 hover:bg-white/60'} cursor-pointer transition-colors duration-300` }, index))) }) })] }));
};
export default Hero;
