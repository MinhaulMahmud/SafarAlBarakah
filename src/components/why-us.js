import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Award, Shield, MapPin } from 'lucide-react';
const whyUsPoints = [
    {
        icon: _jsx(Heart, { className: "w-7 h-7 text-nusuk-gold" }),
        title: 'Sincere Spiritual Guidance',
        desc: 'We are driven by sincerity and a genuine desire to serve. Our team provides religious orientation, dua booklets, and practical support for every pilgrim.'
    },
    {
        icon: _jsx(Users, { className: "w-7 h-7 text-nusuk-gold" }),
        title: 'Bangladeshi Team, Local Care',
        desc: 'Our team is Bangladeshi, speaks your language, and understands your needs. We offer 24/7 support and group leader assistance throughout your journey.'
    },
    {
        icon: _jsx(Globe, { className: "w-7 h-7 text-nusuk-gold" }),
        title: 'Personalized Packages',
        desc: 'Flexible Umrah packages for individuals, families, and groups—tailored to your needs and budget.'
    },
    {
        icon: _jsx(Award, { className: "w-7 h-7 text-nusuk-gold" }),
        title: 'Honesty & Barakah',
        desc: 'We believe in building trust, offering transparent packages, and striving for blessings (barakah) in every journey.'
    },
    {
        icon: _jsx(Shield, { className: "w-7 h-7 text-nusuk-gold" }),
        title: 'Safety & Support',
        desc: 'Pre-departure training, 24/7 support, and group leader assistance. Your safety and comfort are our top priorities.'
    },
    {
        icon: _jsx(MapPin, { className: "w-7 h-7 text-nusuk-gold" }),
        title: 'Local Presence',
        desc: 'Our office and support team are based in Bangladesh, always ready to help you before, during, and after your Umrah.'
    }
];
const WhyUs = () => (_jsxs("section", { className: "py-14 sm:py-20 bg-gray-900 text-white relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-pilgrims bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" }), _jsxs("div", { className: "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-center mb-10", children: [_jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-nusuk-gold leading-tight", children: "Why Choose Safar Al Barakah?" }), _jsx("p", { className: "text-base sm:text-lg text-gray-200 max-w-2xl mx-auto", children: "Discover what makes us the trusted Umrah companion for Bangladeshi pilgrims. We combine sincerity, local care, and modern convenience to make your sacred journey peaceful and fulfilling." })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8", children: whyUsPoints.map((point, idx) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: idx * 0.08 }, className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 border border-white/10", children: [_jsx("div", { className: "mb-3", children: point.icon }), _jsx("div", { className: "text-lg sm:text-xl font-bold text-white mb-1", children: point.title }), _jsx("div", { className: "text-gray-300 text-xs sm:text-sm", children: point.desc })] }, idx))) }), _jsx("div", { className: "mt-10 text-center", children: _jsx("a", { href: "/contact", className: "inline-block bg-nusuk-gold text-white font-semibold rounded-lg px-6 py-3 text-base shadow hover:bg-opacity-90 transition-colors duration-200", children: "Contact Us for a Free Consultation" }) })] })] }));
export default WhyUs;
