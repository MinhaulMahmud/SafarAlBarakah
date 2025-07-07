import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
// import Support from '../pages/Support';
const FAQ = () => {
    const [openItem, setOpenItem] = useState(null);
    const faqItems = [
        {
            question: "What is the best time to apply for Hajj packages?",
            answer: "It is recommended to apply for Hajj packages as early as possible, preferably 6-12 months before the intended travel date. This allows for proper planning, visa processing, and better accommodation options."
        },
        {
            question: "What documents are required for Umrah visa?",
            answer: "For Umrah visa, you typically need a valid passport (with at least 6 months validity), passport-sized photographs, vaccination certificates, and proof of relationship for accompanying family members."
        },
        {
            question: "Are there any age restrictions for Hajj and Umrah?",
            answer: "There are no specific age restrictions, but children under 18 must be accompanied by their parents or guardians. Elderly pilgrims should consult with healthcare providers before travel."
        },
        {
            question: "What vaccinations are required for pilgrimage?",
            answer: "Meningitis vaccination is mandatory for all pilgrims. Additionally, COVID-19 vaccination and other routine vaccines may be required depending on current health regulations."
        },
        {
            question: "Can I extend my stay in Saudi Arabia after Hajj/Umrah?",
            answer: "Extensions are possible but must be applied for through proper channels. Tourist visas may allow for additional exploration of Saudi Arabia beyond the pilgrimage cities."
        },
        {
            question: "What is included in the Nusuk packages?",
            answer: "Our packages typically include visa processing, round-trip flights, accommodation near the Holy Mosques, ground transportation, meals, and guided tours with experienced Islamic scholars."
        },
        // {
        //   question: "Is travel insurance necessary for pilgrimage?",
        //   answer: "While not always mandatory, travel insurance is highly recommended to cover medical emergencies, trip cancellations, and other unforeseen circumstances during your journey."
        // },
        // {
        //   question: "How can I prepare spiritually for Hajj and Umrah?",
        //   answer: "Spiritual preparation includes learning the rituals, increasing prayers and dhikr, seeking forgiveness, paying off debts, and making sincere intentions for your pilgrimage."
        // },
        // {
        //   question: "What should I pack for my pilgrimage?",
        //   answer: "Essential items include ihram clothing, comfortable walking shoes, prayer mat, Quran, medications, sun protection, and modest clothing for non-ritual times."
        // },
        // {
        //   question: "Are there separate packages for men and women?",
        //   answer: "Accommodation is provided separately for men and women when traveling without mahram. Family packages are available for those traveling with proper male guardians."
        // },
        // {
        //   question: "How do I book a Nusuk package?",
        //   answer: "You can book directly through our website, mobile app, or by contacting our customer service team. We offer various payment options and flexible booking terms."
        // },
        // {
        //   question: "What support is available during the pilgrimage?",
        //   answer: "We provide 24/7 customer support, local guides, emergency assistance, and help with any issues that may arise during your stay in Saudi Arabia."
        // },
        // {
        //   question: "Can I customize my pilgrimage package?",
        //   answer: "Yes, we offer customizable packages to meet your specific needs, including different accommodation levels, additional services, and flexible itineraries."
        // }
    ];
    const toggleItem = (index) => {
        setOpenItem(openItem === index ? null : index);
    };
    return (_jsxs("section", { className: "py-8 sm:py-12 bg-gray-50 text-gray-900 relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-madinah bg-cover bg-center bg-no-repeat opacity-5 pointer-events-none" }), _jsxs("div", { className: "relative z-10 w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-center mb-8 sm:mb-10", children: [_jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-nusuk-teal", children: "F.A.Q" }), _jsx("p", { className: "text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto", children: "Answers to common questions about our Umrah and Hajj services, packages, and support." })] }), _jsxs("div", { className: "flex flex-col md:flex-row md:gap-8", children: [_jsx("div", { className: "flex-1 space-y-4", children: faqItems.filter((_, i) => i % 2 === 0).map((item, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay: index * 0.05 }, className: "bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-150", children: [_jsxs("button", { onClick: () => toggleItem(index * 2), className: "w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-100 transition-colors", children: [_jsx("span", { className: "font-medium text-base text-nusuk-teal", children: faqItems[index * 2].question }), openItem === index * 2 ? (_jsx(ChevronUp, { className: "w-5 h-5 text-nusuk-gold" })) : (_jsx(ChevronDown, { className: "w-5 h-5 text-nusuk-gold" }))] }), _jsx(AnimatePresence, { children: openItem === index * 2 && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.3 }, className: "overflow-hidden", children: _jsx("div", { className: "px-4 pb-3", children: _jsx("p", { className: "text-xs sm:text-sm text-gray-700 leading-relaxed", children: faqItems[index * 2].answer }) }) })) })] }, index))) }), _jsx("div", { className: "flex-1 space-y-4 mt-4 md:mt-0", children: faqItems.filter((_, i) => i % 2 === 1).map((item, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay: index * 0.05 }, className: "bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-150", children: [_jsxs("button", { onClick: () => toggleItem(index * 2 + 1), className: "w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-100 transition-colors", children: [_jsx("span", { className: "font-medium text-base text-nusuk-teal", children: faqItems[index * 2 + 1].question }), openItem === index * 2 + 1 ? (_jsx(ChevronUp, { className: "w-5 h-5 text-nusuk-gold" })) : (_jsx(ChevronDown, { className: "w-5 h-5 text-nusuk-gold" }))] }), _jsx(AnimatePresence, { children: openItem === index * 2 + 1 && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.3 }, className: "overflow-hidden", children: _jsx("div", { className: "px-4 pb-3", children: _jsx("p", { className: "text-xs sm:text-sm text-gray-700 leading-relaxed", children: faqItems[index * 2 + 1].answer }) }) })) })] }, index))) })] })] })] }));
};
export default FAQ;
