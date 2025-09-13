import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Features } from './pages/Features';
import { ServicesPricing } from './pages/ServicesPricing';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { LoginPatient } from './pages/LoginPatient';
import { SignupPatient } from './pages/SignupPatient';
import { LoginDietician } from './pages/LoginDietician';
import { SignupDietician } from './pages/SignupDietician';
import { DashboardPatient } from './pages/DashboardPatient';
import { DashboardDietician } from './pages/DashboardDietician';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="features" element={<Features />} />
          <Route path="services-pricing" element={<ServicesPricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        
        {/* Auth routes without layout */}
        <Route path="/login/patient" element={<LoginPatient />} />
        <Route path="/signup/patient" element={<SignupPatient />} />
        <Route path="/login/dietician" element={<LoginDietician />} />
        <Route path="/signup/dietician" element={<SignupDietician />} />
        
        {/* Dashboard routes */}
        <Route path="/dashboard/patient/*" element={<DashboardPatient />} />
        <Route path="/dashboard/dietician/*" element={<DashboardDietician />} />
      </Routes>
    </Router>
  );
}

export default App;