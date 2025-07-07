import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import SupportPage from '../pages/Support';

const Support = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-4 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-nusuk-gold mb-4">Support & Help Center</h1>
        <p className="text-gray-300 text-base md:text-lg mb-6">
          Need assistance? Our team is here to help you at every step of your Umrah journey. Reach out via your preferred method below, or check our quick FAQs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
        <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-nusuk-gold/80 transition-colors rounded-xl p-6 flex flex-col items-center border border-white/10">
          <MessageCircle className="w-8 h-8 text-nusuk-gold mb-2" />
          <span className="font-semibold text-white mb-1">WhatsApp</span>
          <span className="text-gray-300 text-sm">Chat with us instantly</span>
        </a>
        <a href="tel:+8801234567890" className="bg-white/10 hover:bg-nusuk-gold/80 transition-colors rounded-xl p-6 flex flex-col items-center border border-white/10">
          <Phone className="w-8 h-8 text-nusuk-gold mb-2" />
          <span className="font-semibold text-white mb-1">Call Us</span>
          <span className="text-gray-300 text-sm">+880 1234-567890</span>
        </a>
        <a href="mailto:support@safaralbarakah.com" className="bg-white/10 hover:bg-nusuk-gold/80 transition-colors rounded-xl p-6 flex flex-col items-center border border-white/10">
          <Mail className="w-8 h-8 text-nusuk-gold mb-2" />
          <span className="font-semibold text-white mb-1">Email</span>
          <span className="text-gray-300 text-sm">support@safaralbarakah.com</span>
        </a>
      </div>
      <div className="w-full max-w-2xl bg-white/5 rounded-xl p-8 mb-12 border border-white/10">
        <h2 className="text-xl font-semibold text-nusuk-gold mb-4">Quick FAQ</h2>
        <ul className="text-left text-gray-300 space-y-3 text-sm">
          <li><span className="font-semibold text-white">Q:</span> How do I book a package? <br /><span className="ml-4">A: Visit our Packages page or contact us directly for personalized assistance.</span></li>
          <li><span className="font-semibold text-white">Q:</span> What support is available during my trip? <br /><span className="ml-4">A: Our team is available 24/7 via WhatsApp and phone for all travelers.</span></li>
          <li><span className="font-semibold text-white">Q:</span> Can I get help in Bangla? <br /><span className="ml-4">A: Yes! Our support team speaks Bangla and English.</span></li>
        </ul>
      </div>
      <div className="w-full max-w-2xl bg-white/5 rounded-xl p-8 border border-white/10">
        <h2 className="text-xl font-semibold text-nusuk-gold mb-4">Send Us a Message</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-nusuk-gold" required />
          <input type="email" placeholder="Your Email" className="bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-nusuk-gold" required />
          <textarea placeholder="How can we help you?" rows={4} className="bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-nusuk-gold" required />
          <button type="submit" className="bg-nusuk-gold text-white font-semibold rounded-lg px-6 py-3 mt-2 hover:bg-opacity-90 transition-colors">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Support;
