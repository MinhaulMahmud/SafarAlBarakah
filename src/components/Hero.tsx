// src/components/Hero.jsx

import React, { useState, useEffect } from 'react';
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
const WavyPattern = () => (
	<div className="absolute bottom-0 left-0 w-full h-32 md:h-48 z-[5]" aria-hidden="true">
		<svg className="w-full h-full" viewBox="0 0 1440 150" preserveAspectRatio="none">
			<defs>
				<clipPath id="waveClip">
					<path d="M0,50 C240,10,480,110,720,50 C960,-10,1200,90,1440,50 L1440,150 L0,150 Z" />
				</clipPath>
			</defs>
			<rect x="0" y="0" width="1440" height="150" fill="#0B101B" clipPath="url(#waveClip)" />
			<g clipPath="url(#waveClip)" fill="none" stroke="#C5A572" strokeWidth="2.5">
				<path d="M-200,80 C200,30,400,130,800,80 C1200,30,1400,130,1640,80" />
				<path d="M-200,95 C250,45,450,145,850,95 C1250,45,1450,145,1690,95" opacity="0.8" />
				<path d="M-200,110 C300,60,500,160,900,110 C1300,60,1500,160,1740,110" opacity="0.6" />
				<path d="M-200,125 C350,75,550,175,950,125 C1350,75,1550,175,1790,125" opacity="0.4" />
			</g>
		</svg>
	</div>
);

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

	return (
		<section className="relative min-h-[70vh] md:min-h-screen flex items-center overflow-hidden bg-black">
			{/* Background Image Slider */}
			<AnimatePresence>
				<motion.div
					key={currentIndex}
					className="absolute inset-0 bg-cover bg-center md:bg-left bg-no-repeat"
					style={{
						backgroundImage: `url(${currentSlide.image})`,
						backgroundPosition: currentSlide.bgPosition,
					}}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, scale: [1.05, 1.15] }}
					exit={{ opacity: 0 }}
					transition={{
						opacity: { duration: 1.5, ease: 'easeInOut' },
						scale: { duration: 9, ease: 'linear' },
					}}
				>
					{/* Enhanced gradient for perfect text readability on the left */}
					<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
				</motion.div>
			</AnimatePresence>

			{/* Main Content Container (Left-aligned) - Responsive padding */}
			<div className="relative z-10 w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
				<div className="max-w-xl text-left text-white">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: -40 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 40 }}
							transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
						>
							{/* Responsive font sizes for title and subtitle */}
							<h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 leading-tight">
								{currentSlide.title}
							</h1>
							<p className="text-sm sm:text-base md:text-lg mb-8 text-gray-200">
								{currentSlide.subtitle}
							</p>
							<motion.a
								href={currentSlide.ctaHref}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-nusuk-gold text-white px-6 py-2 sm:px-10 sm:py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors shadow-lg inline-block text-sm sm:text-base"
							>
								{currentSlide.cta}
							</motion.a>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>

			{/* The duplicated, centered content block has been removed to fix the layout */}

			{/* Wavy Pattern */}
			<WavyPattern />

			{/* Navigation dots - now correctly aligned with the left-aligned content */}
			<div className="absolute bottom-8 w-full mx-auto px-8 sm:px-12 lg:px-24 z-20">
				<div className="flex space-x-3">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							aria-label={`Go to slide ${index + 1}`}
							className={`w-2.5 h-2.5 rounded-full ${
								currentIndex === index ? 'bg-nusuk-gold' : 'bg-white/40 hover:bg-white/60'
							} cursor-pointer transition-colors duration-300`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;