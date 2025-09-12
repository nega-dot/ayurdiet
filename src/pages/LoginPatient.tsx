import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export const LoginPatient: React.FC = () => {
  const [useOTP, setUseOTP] = useState(false);
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    otp: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    navigate('/dashboard/patient');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[5%] left-[8%] w-20 h-20 bg-[#7FB069] rounded-full transform rotate-[-30deg]"></div>
        <div className="absolute top-[2%] right-[10%] w-30 h-30 bg-[#98D8C8] rounded-full transform rotate-[45deg]"></div>
        <div className="absolute bottom-[5%] left-[2%] w-25 h-25 bg-[#4B5563] rounded-full transform rotate-[20deg]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-36 h-36 bg-[#7FB069] rounded-full transform rotate-[-15deg]"></div>
      </div>

      <div className="relative flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 text-[#141711]">
              <div className="w-10 h-10 text-[#7FB069]">
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
              <h1 className="text-2xl font-bold tracking-tight">AyurDiet</h1>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-[#141711]">Welcome Back</h2>
              <p className="text-[#4B5563] mt-2">Get your personalized Ayurvedic diet plan instantly.</p>
            </div>

            {/* Tab Switcher */}
            <div className="grid grid-cols-2 gap-2 rounded-lg bg-[#F5F5F5]/70 p-1 mb-6">
              <button className="bg-white text-[#141711] border-2 border-[#7FB069] rounded-md py-2.5 text-sm font-bold tracking-wide">
                Login
              </button>
              <Link 
                to="/signup/patient"
                className="text-[#4B5563] hover:text-[#7FB069] rounded-md py-2.5 text-sm font-bold tracking-wide text-center transition-colors"
              >
                Signup
              </Link>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                id="identifier"
                type={useOTP ? "tel" : "text"}
                placeholder={useOTP ? "Mobile Number" : "Mobile Number or Email"}
                value={formData.identifier}
                onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                required
              />

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={useOTP}
                    onChange={(e) => setUseOTP(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-[#7FB069] focus:ring-[#7FB069]"
                  />
                  <span className="text-sm text-[#141711]">Use OTP to Login</span>
                </label>
                {!useOTP && (
                  <Link to="/forgot-password" className="text-sm font-medium text-[#D97706] hover:text-orange-700">
                    Forgot Password?
                  </Link>
                )}
              </div>

              {!useOTP && (
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              )}

              {useOTP && (
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                  rightElement={
                    <Button variant="ghost" size="sm" type="button">
                      Send OTP
                    </Button>
                  }
                />
              )}

              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>

            <p className="mt-8 text-center text-xs text-[#4B5563]">
              By continuing, you agree to our{' '}
              <Link to="/terms" className="font-medium text-[#D97706] hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="font-medium text-[#D97706] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};