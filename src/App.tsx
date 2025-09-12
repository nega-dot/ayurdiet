import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LoginPatient } from './pages/LoginPatient';
import { SignupPatient } from './pages/SignupPatient';
import { LoginDietician } from './pages/LoginDietician';
import { SignupDietician } from './pages/SignupDietician';
import { DashboardPatient } from './pages/DashboardPatient';
import { DashboardDietician } from './pages/DashboardDietician';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F5F5F5]">
        <Routes>
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/login/patient" replace />} />
          
          {/* Patient Routes */}
          <Route path="/login/patient" element={<LoginPatient />} />
          <Route path="/signup/patient" element={<SignupPatient />} />
          <Route path="/dashboard/patient" element={<DashboardPatient />} />
          
          {/* Dietician Routes */}
          <Route path="/login/dietician" element={<LoginDietician />} />
          <Route path="/signup/dietician" element={<SignupDietician />} />
          <Route path="/dashboard/dietician" element={<DashboardDietician />} />
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/login/patient" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
