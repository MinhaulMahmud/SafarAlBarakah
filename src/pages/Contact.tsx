import React from 'react';

const Contact = () => (
  <section className="py-20 bg-white min-h-screen flex flex-col items-center justify-center">
    <div className="max-w-2xl w-full mx-auto px-4">
      <h2 className="text-3xl font-bold text-nusuk-teal mb-4">Contact Safar Al Barakah</h2>
      <p className="mb-6 text-gray-700">We are here to help you with your Umrah journey. Reach out to us for any queries, support, or partnership opportunities. Our team will respond as soon as possible.</p>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="font-semibold text-nusuk-gold">Phone:</div>
          <div className="mb-2">01810811400</div>
          <div className="font-semibold text-nusuk-gold">Email:</div>
          <div className="mb-2">info.safaralbarakah.com</div>
          <div className="font-semibold text-nusuk-gold">Address:</div>
          <div>114, BK Tower, Lalchand Road, Chawkbazar, Chattogram</div>
          <a href="tel:01810811400" className="btn-primary mt-4 inline-block">Call Now</a>
        </div>
        <div>
          <form className="space-y-4">
            <div>
              <label className="block text-nusuk-teal font-semibold mb-1">Your Name</label>
              <input type="text" className="w-full border border-nusuk-gold rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-nusuk-gold" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-nusuk-teal font-semibold mb-1">Email</label>
              <input type="email" className="w-full border border-nusuk-gold rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-nusuk-gold" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-nusuk-teal font-semibold mb-1">Message</label>
              <textarea className="w-full border border-nusuk-gold rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-nusuk-gold" rows={4} placeholder="How can we help you?" />
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
      <div className="w-full h-72 rounded-lg overflow-hidden shadow-lg border border-nusuk-gold">
        <iframe
          title="Safar Al Barakah Location"
          src="https://www.google.com/maps?q=22.3364,91.8317&z=16&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Contact;
