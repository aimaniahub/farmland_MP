import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import FarmerDashboard from './pages/FarmerDashboard';
import FieldManagement from './pages/FieldManagement';
import TaskManager from './pages/TaskManager';
import InventoryManagement from './pages/InventoryManagement';
import WeatherPage from './pages/WeatherPage';
import ProductShowcase from './pages/ProductShowcase';
import FarmerProfile from './pages/FarmerProfile';
import AdminPanel from './pages/AdminPanel';
import LoginModal from './components/LoginModal';

export type UserRole = 'farmer' | 'admin' | 'public';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  farmName?: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogin = (userData: User) => {
    setUser(userData);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
        <Navbar 
          user={user} 
          onLogin={() => setIsLoginModalOpen(true)}
          onLogout={handleLogout}
        />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<FarmerDashboard user={user} />} />
          <Route path="/fields" element={<FieldManagement user={user} />} />
          <Route path="/tasks" element={<TaskManager user={user} />} />
          <Route path="/inventory" element={<InventoryManagement user={user} />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/products" element={<ProductShowcase />} />
          <Route path="/profile" element={<FarmerProfile user={user} />} />
          <Route path="/admin" element={<AdminPanel user={user} />} />
        </Routes>

        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onLogin={handleLogin}
        />
      </div>
    </Router>
  );
}

export default App;