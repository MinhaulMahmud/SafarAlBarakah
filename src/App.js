import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx(Router, { children: _jsxs("div", { className: "min-h-screen bg-white flex flex-col", children: [_jsx(Header, {}), _jsx("main", { className: "flex-1", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx(Hero, {}), _jsx(About, { short: true }), _jsx(Services, { short: true }), _jsx(Journey, { short: true }), _jsx(MobileApp, { short: true }), _jsx(AboutNusuk, { short: true }), _jsx(FAQ, { short: true })] }) }), _jsx(Route, { path: "/about", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/packages", element: _jsx(PackagesPage, {}) }), _jsx(Route, { path: "/ticketing", element: _jsx(TicketingPage, {}) }), _jsx(Route, { path: "/makkah", element: _jsx(MakkahPage, {}) }), _jsx(Route, { path: "/madinah", element: _jsx(MadinahPage, {}) }), _jsx(Route, { path: "/why-us", element: _jsx(WhyUsPage, {}) }), _jsx(Route, { path: "/support", element: _jsx(Support, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactPage, {}) })] }) }), _jsx(Footer, {})] }) }));
}
export default App;
