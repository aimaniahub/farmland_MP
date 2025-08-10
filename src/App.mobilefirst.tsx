import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewFooter from './components/NewFooter';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import FarmsPage from './pages/FarmsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
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
  startingPrice: string;
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
        {/* Mobile-First Responsive Navigation */}
        <Navbar onEnquiry={handleEnquiry} />
        
        {/* Main Content with Mobile-First Layout */}
        <main className="w-full">
          <Routes>
            <Route path="/" element={<HomePage onEnquiry={handleEnquiry} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/farms" element={<FarmsPage onEnquiry={handleEnquiry} />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage onEnquiry={handleEnquiry} />} />
          </Routes>
        </main>

        {/* Mobile-First Responsive Footer */}
        <NewFooter />

        {/* Mobile-Optimized Modal */}
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