import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Journey from './components/Journey';
import MobileApp from './components/MobileApp';
import AboutNusuk from './components/AboutNusuk';
import FAQ from './components/FAQ';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PackagesPage from './pages/Packages';
import TicketingPage from './pages/Ticketing';
import MakkahPage from './pages/Makkah';
import MadinahPage from './pages/Madinah';
import WhyUsPage from './pages/WhyUs';
import AboutPage from './pages/About';
import Support from './pages/Support';
import ContactPage from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                {/* Home: Only brief/clickbait info for each section */}
                <About short />
                <Services short />
                <Journey short />
                <MobileApp short />
                <AboutNusuk short />
                <FAQ short />
              </>
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/ticketing" element={<TicketingPage />} />
            <Route path="/makkah" element={<MakkahPage />} />
            <Route path="/madinah" element={<MadinahPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Additional routes for other components */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;