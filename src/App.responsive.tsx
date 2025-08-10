import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewFooter from './components/NewFooter';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import FarmsPage from './pages/FarmsPage';
import FarmDetails from './pages/FarmDetails';
import ServicesPage from './pages/ServicesPage.tsx';
import MediaPage from './pages/MediaPage.tsx';
import GalleryPage from './pages/GalleryPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import FAQPage from './pages/FAQPage.tsx';
import CareersPage from './pages/CareersPage.tsx';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import WhyManagedFarmland from './pages/WhyManagedFarmland';
import EnquiryModal from './components/EnquiryModal';

export interface Farm {
  id: string;
  name: string;
  location: string;
  proximity: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  startingPrice: string; // Changed to string to match JSON data
  plotSizes: string[];
  availableUnits: number;
  totalUnits: number;
  status: string;
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
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navbar onEnquiry={handleEnquiry} />
        
        <main className="w-full">
          <Routes>
            <Route path="/" element={<HomePage onEnquiry={handleEnquiry} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/farms" element={<FarmsPage onEnquiry={handleEnquiry} />} />
            <Route path="/farms/:id" element={<FarmDetails onEnquiry={handleEnquiry} />} />
            <Route path="/why-managed-farmland" element={<WhyManagedFarmland />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage onEnquiry={handleEnquiry} />} />
          </Routes>
        </main>

        <NewFooter />

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