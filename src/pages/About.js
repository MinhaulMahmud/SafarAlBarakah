import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Award } from 'lucide-react';
const About = () => {
    return (_jsxs("section", { className: "py-12 sm:py-16 bg-gray-900 text-white relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-pilgrims bg-cover bg-center bg-no-repeat opacity-20" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" }), _jsx("div", { className: "relative z-10 max-w-3xl sm:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 items-center", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, children: [_jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-nusuk-gold leading-tight", children: "Safar Al Barakah \u2014 Your Trusted Companion for Umrah from Bangladesh" }), _jsx("p", { className: "text-base sm:text-lg mb-4 sm:mb-6 text-gray-300 leading-relaxed", children: "Safar Al Barakah is a dedicated and emerging Umrah agency in Bangladesh, committed to guiding pilgrims on their sacred journey with care, compassion, and convenience. Our mission is rooted in excellence and sincerity\u2014ensuring every traveler experiences a peaceful, spiritually fulfilling Umrah from the moment they plan until their safe return." }), _jsxs("ul", { className: "mb-6 text-base text-gray-300 leading-relaxed list-disc pl-5 space-y-1 sm:space-y-2", children: [_jsxs("li", { children: [_jsx("b", { children: "\uD83D\uDD4B Spiritual Guidance:" }), " Religious orientation, Dua booklets, and support to help pilgrims perform rituals correctly and confidently."] }), _jsxs("li", { children: [_jsx("b", { children: "\u2708 Seamless Travel:" }), " Visa, air ticketing, hotel booking, and airport transfers\u2014all logistics handled."] }), _jsxs("li", { children: [_jsx("b", { children: "\uD83C\uDFE8 Comfortable Stay:" }), " Clean, comfortable stays close to the Haramain\u2014within your budget."] }), _jsxs("li", { children: [_jsx("b", { children: "\uD83C\uDDE7\uD83C\uDDE9 Local Support:" }), " Bangladeshi team, speaking your language and understanding your needs."] }), _jsxs("li", { children: [_jsx("b", { children: "\uD83C\uDF0D Flexible Packages:" }), " For individuals, families, and groups."] }), _jsxs("li", { children: [_jsx("b", { children: "\uD83E\uDD1D Honesty & Barakah:" }), " Trust and blessings at the heart of everything we do."] })] }), _jsx("div", { className: "flex flex-col sm:flex-row gap-3", children: _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "bg-nusuk-gold text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-base", children: "Begin Your Sacred Journey" }) })] }), _jsxs(motion.div, { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, className: "grid grid-cols-2 gap-4 sm:gap-6", children: [_jsxs(motion.div, { className: "text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all duration-300", children: [_jsx("div", { className: "text-nusuk-gold mb-2 flex justify-center", children: _jsx(Heart, { className: "w-7 h-7 sm:w-8 sm:h-8" }) }), _jsx("div", { className: "text-lg sm:text-2xl font-bold text-white mb-1", children: "Spiritual Guidance" }), _jsx("div", { className: "text-gray-300 text-xs sm:text-sm", children: "Religious orientation and support" })] }), _jsxs(motion.div, { className: "text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all duration-300", children: [_jsx("div", { className: "text-nusuk-gold mb-2 flex justify-center", children: _jsx(Users, { className: "w-7 h-7 sm:w-8 sm:h-8" }) }), _jsx("div", { className: "text-lg sm:text-2xl font-bold text-white mb-1", children: "Bangladeshi Team" }), _jsx("div", { className: "text-gray-300 text-xs sm:text-sm", children: "Local support, always by your side" })] }), _jsxs(motion.div, { className: "text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all duration-300", children: [_jsx("div", { className: "text-nusuk-gold mb-2 flex justify-center", children: _jsx(Globe, { className: "w-7 h-7 sm:w-8 sm:h-8" }) }), _jsx("div", { className: "text-lg sm:text-2xl font-bold text-white mb-1", children: "Personalized Packages" }), _jsx("div", { className: "text-gray-300 text-xs sm:text-sm", children: "For individuals, families, and groups" })] }), _jsxs(motion.div, { className: "text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all duration-300", children: [_jsx("div", { className: "text-nusuk-gold mb-2 flex justify-center", children: _jsx(Award, { className: "w-7 h-7 sm:w-8 sm:h-8" }) }), _jsx("div", { className: "text-lg sm:text-2xl font-bold text-white mb-1", children: "Honesty & Barakah" }), _jsx("div", { className: "text-gray-300 text-xs sm:text-sm", children: "Trust and blessings in every step" })] })] })] }) })] }));
};
export default About;
