import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, MapPin, Camera } from 'lucide-react';
const Journey = () => {
    const journeySteps = [
        {
            icon: _jsx(FileText, { className: "w-5 h-5" }),
            title: "Begin Your Visa Process",
            description: "Guide by a Bangladeshi pilgrim on visa & permission.",
            image: "https://www.kaia.sa/_next/image?url=https%3A%2F%2Fcdn.kaia.sa%2F-%2Fjssmedia%2Fproject%2Fjedco%2Fkaia%2Fhero%2Fhero_photo01.png%3Fh%3D1335%26iar%3D0%26w%3D1994%26hash%3D35E8947325574E664D690FD06C699EA2&w=3840&q=75",
            color: "bg-blue-600",
            link: "https://bangladeshairtravels.com/blog-details/5/A-Step-by-Step-Guide-to-Performing-Umrah-for-First-Time-Pilgrims"
        },
        {
            icon: _jsx(MapPin, { className: "w-5 h-5" }),
            title: "Umrah & Ziyarah",
            description: "Tips & precautions by Bangladeshi pilgrims.",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Kaaba_mirror_edit_jj.jpg",
            color: "bg-green-600",
            link: "https://www.hijazhajjnumrah.com/about-us/blog"
        },
        {
            icon: _jsx(Camera, { className: "w-5 h-5" }),
            title: "Explore Makkah",
            description: "Flight options from Bangladesh explained.",
            image: "https://blog.umrahme.com/wp-content/uploads/2023/09/spiritual_gems.jpg",
            color: "bg-purple-600",
            link: "https://www.holyhajjnumrah.com/blog/flight-options-umrah-bangladesh"
        },
        {
            icon: _jsx(ArrowRight, { className: "w-5 h-5" }),
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
        if (!isMobile)
            return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % journeySteps.length);
        }, 3500);
        return () => clearInterval(timer);
    }, [isMobile, journeySteps.length]);
    return (_jsxs("section", { className: "py-16 bg-gray-900 text-white relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-pilgrims bg-cover bg-center bg-no-repeat opacity-20" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" }), _jsxs("div", { className: "relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-center mb-6 sm:mb-8", children: [_jsx("h2", { className: "text-2xl md:text-3xl font-bold text-nusuk-gold mb-2 sm:mb-3", children: "Your Pilgrimage Journey" }), _jsx("p", { className: "text-xs sm:text-sm text-gray-300 max-w-xl mx-auto", children: "Click a step to read a Bangladeshi pilgrim\u2019s real-world blog on that topic." })] }), _jsx("div", { className: "relative", children: isMobile ? (_jsxs("div", { className: "overflow-hidden", children: [_jsxs(motion.div, { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -30 }, transition: { duration: 0.4, ease: 'easeInOut' }, className: "block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-75 select-none", children: [_jsxs("div", { className: "relative h-48 overflow-hidden", children: [_jsx("img", { src: journeySteps[currentIndex].image, alt: journeySteps[currentIndex].title, className: "w-full h-full object-cover transition-transform duration-75 hover:scale-105" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }), _jsx("div", { className: `absolute top-3 left-3 ${journeySteps[currentIndex].color} text-white p-1.5 rounded-full`, children: journeySteps[currentIndex].icon })] }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "text-base font-semibold text-nusuk-teal mb-1", children: journeySteps[currentIndex].title }), _jsx("p", { className: "text-xs text-gray-600 mb-2", children: journeySteps[currentIndex].description }), _jsxs("a", { href: journeySteps[currentIndex].link, target: "_blank", rel: "noopener noreferrer", className: "text-nusuk-gold flex items-center text-xs font-medium mt-2", children: ["Read Blog ", _jsx(ArrowRight, { className: "w-3 h-3 ml-1" })] })] })] }, currentIndex), _jsx("div", { className: "flex justify-center mt-4 space-x-2", children: journeySteps.map((_, idx) => (_jsx("button", { onClick: () => setCurrentIndex(idx), className: `w-2.5 h-2.5 rounded-full ${currentIndex === idx ? 'bg-nusuk-gold' : 'bg-white/40 hover:bg-white/60'} transition-colors`, "aria-label": `Go to slide ${idx + 1}` }, idx))) })] })) : (_jsx("div", { className: "grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: journeySteps.map((step, i) => (_jsxs(motion.a, { href: step.link, target: "_blank", rel: "noopener noreferrer", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: i * 0.1 }, whileHover: { scale: 1.02 }, className: "block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-75 select-none", children: [_jsxs("div", { className: "relative h-40 sm:h-36 overflow-hidden", children: [_jsx("img", { src: step.image, alt: step.title, className: "w-full h-full object-cover transition-transform duration-75 hover:scale-105" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }), _jsx("div", { className: `absolute top-3 left-3 ${step.color} text-white p-1.5 rounded-full`, children: step.icon })] }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "text-base sm:text-lg font-semibold text-nusuk-teal mb-1", children: step.title }), _jsx("p", { className: "text-xs sm:text-sm text-gray-600 mb-2", children: step.description }), _jsxs("div", { className: "text-nusuk-gold flex items-center text-xs sm:text-sm font-medium", children: ["Read Blog ", _jsx(ArrowRight, { className: "w-3 h-3 ml-1" })] })] })] }, i))) })) })] })] }));
};
export default Journey;
