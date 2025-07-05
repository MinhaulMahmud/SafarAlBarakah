import React from 'react';
import { motion } from 'framer-motion';
import WeatherWidgetMadinah from '../components/WeatherWidgetMadinah';

const infoCards = [
	{
		title: 'Al-Masjid an-Nabawi',
		desc: 'The Prophet’s Mosque, the second holiest site in Islam, houses the tomb of Prophet Muhammad (peace be upon him).',
		img: 'https://images.pexels.com/photos/13590943/pexels-photo-13590943.jpeg?auto=compress&fit=crop&w=600&q=80',
	},
	{
		title: 'Quba Mosque',
		desc: 'The first mosque built in Islam, established by Prophet Muhammad (peace be upon him) upon his arrival in Madinah.',
		img: 'https://images.pexels.com/photos/14024396/pexels-photo-14024396.jpeg?auto=compress&fit=crop&w=600&q=80',
	},
	{
		title: 'Mount Uhud',
		desc: 'A historic mountain and site of the famous Battle of Uhud, significant in early Islamic history.',
		img: 'https://images.pexels.com/photos/14024397/pexels-photo-14024397.jpeg?auto=compress&fit=crop&w=600&q=80',
	},
	{
		title: 'Rawdah',
		desc: 'A blessed area inside the Prophet’s Mosque, regarded as a garden from the gardens of Paradise.',
		img: 'https://images.pexels.com/photos/13590943/pexels-photo-13590943.jpeg?auto=compress&fit=crop&w=600&q=80',
	},
];

const MadinahPage = () => (
	<div className="bg-white">
		{/* Hero Section */}
		<section
			className="relative min-h-[340px] sm:min-h-[480px] md:min-h-[520px] flex flex-col md:flex-row items-center justify-center bg-cover bg-center"
			style={{
				backgroundImage:
					"url('https://images.pexels.com/photos/13590943/pexels-photo-13590943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=900&dpr=1')",
			}}
		>
			<div className="absolute inset-0 bg-black opacity-50"></div>
			<div className="relative z-10 flex-1 flex flex-col items-center justify-center py-8 sm:py-12 md:py-0 md:items-start md:pl-8 lg:pl-16 w-full">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-3xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-2 sm:mb-4 text-center md:text-left"
				>
					Madinah Al Munawwarah
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
					className="text-base sm:text-lg text-white/90 max-w-xl mb-4 sm:mb-6 text-center md:text-left"
				>
					The radiant city, home to the Prophet’s Mosque and a center of peace,
					spirituality, and Islamic history. Pilgrims visit Madinah to pray,
					reflect, and connect with the legacy of the Prophet Muhammad (peace be
					upon him).
				</motion.p>
			</div>
			<div className="relative z-10 flex-1 flex justify-center md:justify-end w-full md:w-auto md:pr-8 lg:pr-16 mt-4 md:mt-0">
				<WeatherWidgetMadinah />
			</div>
		</section>

		{/* Interactive Info Cards */}
		<section className="py-10 sm:py-16 bg-gradient-to-br from-nusuk-cream to-white">
			<div className="max-w-6xl mx-auto px-2 sm:px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-xl sm:text-3xl font-bold text-nusuk-teal mb-6 sm:mb-10 text-center"
				>
					Sacred Sites & History
				</motion.h2>
				<div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-4">
					{infoCards.map((card, idx) => (
						<motion.div
							key={card.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							whileHover={{ scale: 1.05 }}
							className="bg-white rounded-xl shadow-lg overflow-hidden border border-nusuk-gold cursor-pointer transition-all duration-300 group"
						>
							<img
								src={card.img}
								alt={card.title}
								className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
							/>
							<div className="p-3 sm:p-4">
								<h3 className="text-base sm:text-xl font-bold text-nusuk-gold mb-1 sm:mb-2">
									{card.title}
								</h3>
								<p className="text-gray-700 text-xs sm:text-sm">
									{card.desc}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>

		{/* Description Section */}
		<section className="py-12 sm:py-20 bg-white">
			<div className="max-w-4xl mx-auto px-2 sm:px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-xl sm:text-3xl font-bold text-nusuk-teal mb-4 sm:mb-6 text-center"
				>
					About Madinah Al Munawwarah
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-base sm:text-lg text-gray-700 leading-relaxed text-center md:text-left"
				>
					Madinah Al Munawwarah, the radiant city, holds immense significance in
					Islam as the city where Prophet Muhammad (peace be upon him) migrated
					and established the first Muslim community. It is home to Al-Masjid
					an-Nabawi (The Prophet's Mosque), one of the holiest sites in Islam,
					which houses the tomb of the Prophet Muhammad (peace be upon him).
					Pilgrims visiting Madinah experience a profound sense of peace and
					spirituality, following in the footsteps of the Prophet and his
					companions. The city is also known for its historical sites related to
					early Islamic history, such as the Quba Mosque, the first mosque built
					in Islam, and Mount Uhud.
				</motion.p>
			</div>
		</section>
	</div>
);

export default MadinahPage;
