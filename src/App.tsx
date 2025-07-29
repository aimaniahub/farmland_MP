import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import FarmsPage from './pages/FarmsPage';
import FarmDetails from './pages/FarmDetails';
import ServicesPage from './pages/ServicesPage';
import MediaPage from './pages/MediaPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import CareersPage from './pages/CareersPage';
import EnquiryModal from './components/EnquiryModal';

export interface Farm {
  id: string;
  name: string;
  location: string;
  proximity: string;
  startingPrice: number;
  plotSizes: string[];
  availableUnits: number;
  totalUnits: number;
  status: 'ongoing' | 'upcoming' | 'sold-out';
  description: string;
  images: string[];
  features: string[];
  amenities: string[];
  cropTypes: string[];
  area: string;
  paymentPlans: string[];
}

function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedFarm, setSelectedFarm] = useState<Farm | null>(null);

  const handleEnquiry = (farm?: Farm) => {
    setSelectedFarm(farm || null);
    setIsEnquiryModalOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar onEnquiry={() => handleEnquiry()} />
        
        <Routes>
          <Route path="/" element={<HomePage onEnquiry={handleEnquiry} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/farms" element={<FarmsPage onEnquiry={handleEnquiry} />} />
          <Route path="/farms/:id" element={<FarmDetails onEnquiry={handleEnquiry} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>

        <Footer />

        <EnquiryModal
          isOpen={isEnquiryModalOpen}
          onClose={() => setIsEnquiryModalOpen(false)}
          farm={selectedFarm}
        />
      </div>
    </Router>
  );
}

export default App;