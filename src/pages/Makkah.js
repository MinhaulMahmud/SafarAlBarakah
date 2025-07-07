import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import WeatherWidget from '../components/WeatherWidget';
const infoCards = [
    {
        title: 'Masjid al-Haram',
        desc: 'The largest mosque in the world, surrounds the Kaaba and is the focal point for Hajj and Umrah.',
        img: 'https://images.pexels.com/photos/8181368/pexels-photo-8181368.jpeg?auto=compress&fit=crop&w=600&q=80',
    },
    {
        title: 'Kaaba',
        desc: 'The most sacred site in Islam, Muslims around the world face the Kaaba during prayers.',
        img: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&fit=crop&w=600&q=80',
    },
    {
        title: 'Safa & Marwah',
        desc: 'Pilgrims perform Sa’i between these two small hills as part of the Umrah and Hajj rituals.',
        img: 'https://images.pexels.com/photos/4252827/pexels-photo-4252827.jpeg?auto=compress&fit=crop&w=600&q=80',
    },
    {
        title: 'Zamzam Well',
        desc: 'A miraculously generated source of water from God, located within the Masjid al-Haram.',
        img: 'https://images.pexels.com/photos/12688735/pexels-photo-12688735.jpeg?auto=compress&fit=crop&w=600&q=80',
    },
];
const MakkahPage = () => (_jsxs("div", { className: "bg-white", children: [_jsxs("section", { className: "relative min-h-[340px] sm:min-h-[480px] md:min-h-[520px] flex flex-col md:flex-row items-center justify-center bg-cover bg-center", style: {
                backgroundImage: "url('https://images.pexels.com/photos/12688735/pexels-photo-12688735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=900&dpr=1')",
            }, children: [_jsx("div", { className: "absolute inset-0 bg-black opacity-50" }), _jsxs("div", { className: "relative z-10 flex-1 flex flex-col items-center justify-center py-8 sm:py-12 md:py-0 md:items-start md:pl-8 lg:pl-16 w-full", children: [_jsx(motion.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "text-3xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-2 sm:mb-4 text-center md:text-left", children: "Makkah Al Mukarramah" }), _jsxs(motion.p, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: 0.2 }, className: "text-base sm:text-lg text-white/90 max-w-xl mb-4 sm:mb-6 text-center md:text-left", children: ["The holiest city in Islam, home to the Kaaba and Masjid al-Haram.", _jsx("br", { className: "hidden sm:block" }), " Every year, millions of Muslims visit Makkah for Hajj and Umrah, seeking spiritual fulfillment and closeness to Allah."] })] }), _jsx("div", { className: "relative z-10 flex-1 flex justify-center md:justify-end w-full md:w-auto md:pr-8 lg:pr-16 mt-4 md:mt-0", children: _jsx(WeatherWidget, {}) })] }), _jsx("section", { className: "py-10 sm:py-16 bg-gradient-to-br from-nusuk-cream to-white", children: _jsxs("div", { className: "max-w-6xl mx-auto px-2 sm:px-4", children: [_jsx(motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-xl sm:text-3xl font-bold text-nusuk-teal mb-6 sm:mb-10 text-center", children: "Sacred Sites & Rituals" }), _jsx("div", { className: "grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-4", children: infoCards.map((card, idx) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: idx * 0.1 }, whileHover: { scale: 1.05 }, className: "bg-white rounded-xl shadow-lg overflow-hidden border border-nusuk-gold cursor-pointer transition-all duration-300 group", children: [_jsx("img", { src: card.img, alt: card.title, className: "w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-300" }), _jsxs("div", { className: "p-3 sm:p-4", children: [_jsx("h3", { className: "text-base sm:text-xl font-bold text-nusuk-gold mb-1 sm:mb-2", children: card.title }), _jsx("p", { className: "text-gray-700 text-xs sm:text-sm", children: card.desc })] })] }, card.title))) })] }) }), _jsx("section", { className: "py-12 sm:py-20 bg-white", children: _jsxs("div", { className: "max-w-4xl mx-auto px-2 sm:px-4", children: [_jsx(motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-xl sm:text-3xl font-bold text-nusuk-teal mb-4 sm:mb-6 text-center", children: "About Makkah Al Mukarramah" }), _jsx(motion.p, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, className: "text-base sm:text-lg text-gray-700 leading-relaxed text-center md:text-left", children: "Makkah Al Mukarramah, the most sacred city in Islam, is the birthplace of Prophet Muhammad (peace be upon him) and home to the Kaaba, the most revered site in Islam. Millions of Muslims from around the world visit Makkah annually to perform Hajj and Umrah, fulfilling a fundamental pillar of Islam. The city revolves around the Masjid al-Haram, the Grand Mosque, which houses the Kaaba, the Black Stone, and the Station of Ibrahim. Pilgrims perform Tawaf (circumambulation) around the Kaaba and Sa'i (walking between Safa and Marwah). Makkah is a city of deep spiritual significance, drawing believers seeking closeness to Allah." })] }) })] }));
export default MakkahPage;
