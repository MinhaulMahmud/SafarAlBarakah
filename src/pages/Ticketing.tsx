import React from 'react';

const TicketingPage = () => (
  <section className="py-20 min-h-screen bg-gradient-to-br from-white via-nusuk-gold/10 to-nusuk-teal/10 flex flex-col items-center justify-center">
    <div className="max-w-2xl w-full mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-nusuk-teal mb-4 text-center">Book Your Umrah & Travel Tickets</h2>
      <p className="mb-8 text-gray-700 text-center text-base md:text-lg">
        Secure your Umrah, Hajj, and international travel tickets with Safar Al Barakah. Fast, reliable, and transparent service for all your travel needs.
      </p>
      <form className="bg-white/80 rounded-xl shadow-lg p-8 flex flex-col gap-4 border border-nusuk-gold/20">
        <input type="text" placeholder="Full Name" className="bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-nusuk-teal" required />
        <input type="tel" placeholder="Contact Number" className="bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-nusuk-teal" required />
        <input type="email" placeholder="Email Address" className="bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-nusuk-teal" required />
        <div className="flex flex-col md:flex-row gap-4">
          <input type="text" placeholder="Destination (e.g. Jeddah, Madinah)" className="bg-gray-100 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-nusuk-teal" required />
          <input type="date" className="bg-gray-100 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-nusuk-teal" required />
        </div>
        <select className="bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-nusuk-teal" required>
          <option value="">Select Ticket Type</option>
          <option value="umrah">Umrah</option>
          <option value="hajj">Hajj</option>
          <option value="flight">International Flight</option>
        </select>
        <button type="submit" className="bg-nusuk-teal text-white font-semibold rounded-lg px-6 py-3 mt-2 hover:bg-nusuk-gold transition-colors">Request Ticket</button>
      </form>
      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold text-nusuk-gold mb-2">Why Book With Us?</h3>
        <ul className="text-gray-700 text-sm md:text-base space-y-2">
          <li>✔️ 100% authentic tickets & transparent pricing</li>
          <li>✔️ Dedicated support in Bangla & English</li>
          <li>✔️ Fast booking confirmation</li>
          <li>✔️ Special Umrah & Hajj group rates</li>
        </ul>
      </div>
    </div>
  </section>
);

export default TicketingPage;
