import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import LandingPagesService from './pages/services/LandingPagesService';
import DigitalCardsService from './pages/services/DigitalCardsService';
import ChatbotsService from './pages/services/ChatbotsService';
import DigitalStoresService from './pages/services/DigitalStoresService';
import EcommerceService from './pages/services/EcommerceService';
import ProjectDetails from './pages/projects/ProjectDetails';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/blog/BlogPost';
import TermsPage from './pages/legal/TermsPage';
import PrivacyPage from './pages/legal/PrivacyPage';
import CookiesPage from './pages/legal/CookiesPage';
import RegulationsPage from './pages/legal/RegulationsPage';
import AccessibilityPage from './pages/legal/AccessibilityPage';
import Chatbot from './components/Chatbot';
import ParticlesBackground from './components/ParticlesBackground';
import { useScrollPosition } from './hooks/useScrollPosition';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  useScrollPosition();

  return (
    <div className="min-h-screen bg-[#0A1128] relative">
      {/* Global Particles Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBackground opacity={0.9} />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/landing-pages" element={<LandingPagesService />} />
            <Route path="/services/digital-cards" element={<DigitalCardsService />} />
            <Route path="/services/chatbots" element={<ChatbotsService />} />
            <Route path="/services/digital-stores" element={<DigitalStoresService />} />
            <Route path="/services/ecommerce" element={<EcommerceService />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/regulations" element={<RegulationsPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
}

export default App;