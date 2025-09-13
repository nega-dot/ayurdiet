import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const Logo = () => (
    <Link to="/" className="flex items-center space-x-3">
      <div className="w-8 h-8 text-[#7FB069]">
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_6_543)">
            <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
            <path clipRule="evenodd" d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z" fill="currentColor" fillRule="evenodd"></path>
          </g>
          <defs>
            <clipPath id="clip0_6_543"><rect fill="white" height="48" width="48"></rect></clipPath>
          </defs>
        </svg>
      </div>
      <span className="text-xl font-bold text-[#141711]">AyurDiet</span>
    </Link>
  );

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Services & Pricing', path: '/services-pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E0E5DC]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#7FB069] font-semibold'
                    : 'text-[#4B5563] hover:text-[#7FB069]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="relative">
              <Button 
                variant="ghost" 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-1"
              >
                <span>Login</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#E0E5DC] py-2 z-50">
                  <Link 
                    to="/login/patient" 
                    className="block px-4 py-2 text-[#4B5563] hover:bg-[#7FB069]/10 hover:text-[#7FB069] transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Patient Login
                  </Link>
                  <Link 
                    to="/login/dietician" 
                    className="block px-4 py-2 text-[#4B5563] hover:bg-[#7FB069]/10 hover:text-[#7FB069] transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Dietician Login
                  </Link>
                  <div className="border-t border-[#E0E5DC] my-2"></div>
                  <Link 
                    to="/signup/patient" 
                    className="block px-4 py-2 text-[#4B5563] hover:bg-[#7FB069]/10 hover:text-[#7FB069] transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Patient Signup
                  </Link>
                  <Link 
                    to="/signup/dietician" 
                    className="block px-4 py-2 text-[#4B5563] hover:bg-[#7FB069]/10 hover:text-[#7FB069] transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Dietician Signup
                  </Link>
                  <div className="border-t border-[#E0E5DC] my-2"></div>
                  <Link 
                    to="/dashboard/patient" 
                    className="block px-4 py-2 text-[#4B5563] hover:bg-[#7FB069]/10 hover:text-[#7FB069] transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Patient Dashboard
                  </Link>
                  <Link 
                    to="/dashboard/dietician" 
                    className="block px-4 py-2 text-[#4B5563] hover:bg-[#7FB069]/10 hover:text-[#7FB069] transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Dietician Dashboard
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/signup/patient">
              <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-[#E0E5DC] shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-[#4B5563] hover:text-[#7FB069] py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t space-y-2">
                <Link to="/login/patient" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full">Patient Login</Button>
                </Link>
                <Link to="/login/dietician" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full">Dietician Login</Button>
                </Link>
                <Link to="/signup/patient" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">Patient Signup</Button>
                </Link>
                <Link to="/signup/dietician" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Dietician Signup</Button>
                </Link>
                <div className="border-t border-[#E0E5DC] my-2"></div>
                <Link to="/dashboard/patient" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full">Patient Dashboard</Button>
                </Link>
                <Link to="/dashboard/dietician" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full">Dietician Dashboard</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Overlay for mobile menu */}
      {showUserMenu && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setShowUserMenu(false)}
        ></div>
      )}
    </header>
  );
};