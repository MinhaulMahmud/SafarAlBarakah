import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const packages = [
	{
		name: '1 Week Economy Umrah Package',
		price: '110,000৳',
		duration: '7 Days',
		details: [
			'3 Days in Madinah | 3 Days in Makkah | 1 Day for Transportation',
			'Direct flight only',
			'Budget hotels (3–4 persons/room), 15–20 min walk to Haram',
			'3 Meals/Day (Deshi & Continental mixed), set menu',
			'Shared AC bus for intercity travel',
			'Umrah Visa & Processing',
			'Ziyarah in Makkah & Madinah',
			'Group Guide & Assistance',
			'Free Ihram for men',
			'Best for: Budget travelers, short-time pilgrims'
		]
	},
	{
		name: 'Economy Umrah Package',
		price: '140,000৳',
		duration: '18 Days',
		details: [
			'8 Days in Makkah | 8 Days in Madinah | 2 Days for Transportation',
			'Direct or transit flight (Transit discount: -5,000৳)',
			'Standard hotels (4–5 persons/room), 10–15 min walk to Haram',
			'3 Meals/Day (Deshi & Arabic combo), buffet or set meals',
			'Private AC bus',
			'Umrah Visa',
			'Full Ziyarah tour in both cities',
			'Group Leader Support',
			'Ihram & Umrah Training Session before departure',
			'Best for: Family & group travelers with moderate budget'
		]
	},
	{
		name: 'Premium Umrah Package',
		price: '165,000৳',
		duration: '18 Days',
		details: [
			'8 Days in Makkah | 8 Days in Madinah | 2 Days for Transportation',
			'Direct or transit flight (Transit discount: -5,000৳)',
			'3-star hotels (3–4 persons/room), within 500m of Haram',
			'3 Meals/Day (Deshi buffet + soft drinks), light snacks on arrival',
			'Private AC transport with luggage handling',
			'Umrah Visa + Processing',
			'Ziyarah in both cities',
			'24/7 Bangladeshi guide support',
			'Ihram, Travel Kit, Digital Umrah Manual',
			'Airport pickup and drop-off in Bangladesh & KSA',
			'Best for: Comfortable travelers, elderly pilgrims, small families'
		]
	},
	{
		name: 'Platinum Umrah Package',
		price: '190,000৳',
		duration: '18 Days',
		details: [
			'8 Days in Makkah | 8 Days in Madinah | 2 Days for Transportation',
			'Direct or transit flight (Transit discount: -5,000৳)',
			'4-star or luxury hotels (2–3 persons/room), <300m from Haram',
			'Premium buffet meals (Deshi, Arabic & International), 24/7 room service (in some hotels)',
			'Luxury AC transport, VIP airport transfers in Saudi Arabia',
			'Umrah Visa + Fast Processing',
			'Dedicated group leader (Bangla, Arabic speaking)',
			'Full guided Ziyarah with historical commentary',
			'Ihram set, Travel Essentials Kit, Premium Umrah Guidebook',
			'Priority check-in/out at hotels, SIM card with data, Health Insurance',
			'Best for: Executives, VIPs, elderly couples, premium seekers'
		]
	}
];

const extraInfo = [
	'Group departure from Dhaka or Chattogram',
	'Full guidance before and during travel',
	'Training session before departure',
	'Female-friendly service with family separation arrangements',
	'Prayer-friendly schedule and local cultural support',
	'Optional Zamzam water delivery available'
];

const Packages = () => (
	<section id="packages" className="py-14 sm:py-16 bg-white text-black relative overflow-hidden">
		{/* Decorative background */}
		<div className="absolute inset-0 bg-pilgrims bg-cover bg-center opacity-5 pointer-events-none" />
		<div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-100/80" />
		<div className="relative z-10 w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
			<div className="text-center mb-12">
				<h2 className="text-2xl md:text-3xl font-bold text-black mb-3 drop-shadow-lg tracking-tight uppercase">
					Umrah Packages
				</h2>
				<p className="text-xs sm:text-sm text-gray-700 max-w-2xl mx-auto">
					Choose the best package for your needs. All packages include visa, flights, accommodation, meals, and guided
					support.
				</p>
			</div>
			{/* Modern Card Carousel Layout */}
			<div className="flex flex-col xl:flex-row gap-8 xl:gap-10 mb-10 items-center xl:items-stretch justify-center">
				{packages.map((pkg, idx) => (
					<motion.div
						key={pkg.name}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: idx * 0.1 }}
						className="relative bg-gradient-to-br from-gray-100/80 to-white border border-gray-200 rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col min-h-[370px] w-full max-w-xs xl:max-w-sm group overflow-hidden hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
					>
						{/* White glow effect */}
						<div className="absolute -top-10 -right-10 w-32 h-32 bg-black/5 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
						<div className="flex items-center gap-2 mb-2">
							<span className="inline-block w-2 h-2 rounded-full bg-black animate-pulse" />
							<h3 className="text-lg sm:text-2xl font-bold text-black drop-shadow tracking-tight">
								{pkg.name}
							</h3>
						</div>
						<div className="flex items-center justify-between mb-1 sm:mb-2">
							<div className="text-base sm:text-lg text-black font-semibold">{pkg.price}</div>
							<div className="text-xs sm:text-sm text-gray-700 px-2 py-0.5 rounded-full bg-black/5 border border-black/10">
								{pkg.duration}
							</div>
						</div>
						<ul className="mb-2 sm:mb-4 space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm flex-1">
							{pkg.details.map((d, i) => (
								<li key={i} className="flex items-start gap-2">
									<CheckCircle className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
									{d}
								</li>
							))}
						</ul>
						<button
							className="mt-auto bg-black text-white font-semibold rounded-lg px-4 py-2 text-xs sm:text-sm shadow hover:bg-gray-800 hover:text-white border border-black/10 transition-colors duration-200"
							onClick={() => {
								const details = pkg.details.slice(0, 4).join('\n- '); // Show first 4 details for brevity
								const msg = encodeURIComponent(
									`Assalamu Alaikum,\nI want to book the '${pkg.name}'.\n\nDetails:\n- Price: ${pkg.price}\n- Duration: ${pkg.duration}\n- ${details}\n\nPlease assist me with the booking process.`
								);
								window.open(`https://wa.me/8801810811400?text=${msg}`, '_blank');
							}}
						>
							Book Now
						</button>
					</motion.div>
				))}
			</div>
			<div className="bg-black/5 border border-gray-200 rounded-xl shadow p-4 sm:p-6 max-w-full sm:max-w-3xl mx-auto backdrop-blur-md">
				<h4 className="text-base sm:text-lg font-bold text-black mb-1 sm:mb-2">
					Additional Information for All Packages:
				</h4>
				<ul className="list-disc pl-4 sm:pl-6 space-y-1 text-gray-700 text-xs sm:text-base">
					{extraInfo.map((info, i) => (
						<li key={i}>{info}</li>
					))}
				</ul>
			</div>
		</div>
	</section>
);

export default Packages;
