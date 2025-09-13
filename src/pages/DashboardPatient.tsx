import React from 'react';
import { Navbar } from '../components/Navbar';

export const DashboardPatient: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20 md:pb-4">
      <Navbar userType="patient" />
      
      {/* Header */}
      <div className="bg-gradient-to-br from-[#7FB069] to-[#98D8C8] text-white p-6 mt-16 md:mt-0">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold">Good Morning, Priya!</h1>
              <p className="text-white/80">Your wellness journey continues</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
              <span className="text-xl">🌱</span>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">7</div>
              <div className="text-xs text-white/80">Days Streak</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">85%</div>
              <div className="text-xs text-white/80">Goal Progress</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">1.2kg</div>
              <div className="text-xs text-white/80">Weight Lost</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto p-6 space-y-6">
        {/* Today's Plan */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-[#141711] mb-4">Today's Plan</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-[#7FB069]/10 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🌅</span>
                <div>
                  <div className="font-semibold text-[#141711]">Morning Meal</div>
                  <div className="text-sm text-[#4B5563]">Oats with almonds</div>
                </div>
              </div>
              <button className="text-[#7FB069] font-semibold">View</button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">☀️</span>
                <div>
                  <div className="font-semibold text-[#141711]">Lunch</div>
                  <div className="text-sm text-[#4B5563]">Quinoa bowl with vegetables</div>
                </div>
              </div>
              <button className="text-[#7FB069] font-semibold">View</button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🌙</span>
                <div>
                  <div className="font-semibold text-[#141711]">Dinner</div>
                  <div className="text-sm text-[#4B5563]">Light soup with herbs</div>
                </div>
              </div>
              <button className="text-[#7FB069] font-semibold">View</button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-[#141711] mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center p-4 bg-[#7FB069]/10 rounded-lg hover:bg-[#7FB069]/20 transition-colors">
              <span className="text-3xl mb-2">📊</span>
              <span className="text-sm font-semibold text-[#141711]">Log Meal</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-[#98D8C8]/10 rounded-lg hover:bg-[#98D8C8]/20 transition-colors">
              <span className="text-3xl mb-2">💧</span>
              <span className="text-sm font-semibold text-[#141711]">Water Intake</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-[#D97706]/10 rounded-lg hover:bg-[#D97706]/20 transition-colors">
              <span className="text-3xl mb-2">🧘</span>
              <span className="text-sm font-semibold text-[#141711]">Meditation</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-[#4B5563]/10 rounded-lg hover:bg-[#4B5563]/20 transition-colors">
              <span className="text-3xl mb-2">📝</span>
              <span className="text-sm font-semibold text-[#141711]">Journal</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-[#141711] mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-2">
              <div className="w-2 h-2 bg-[#7FB069] rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-[#141711]">Completed morning meal</div>
                <div className="text-xs text-[#4B5563]">2 hours ago</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-2">
              <div className="w-2 h-2 bg-[#98D8C8] rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-[#141711]">Logged water intake</div>
                <div className="text-xs text-[#4B5563]">4 hours ago</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-2">
              <div className="w-2 h-2 bg-[#D97706] rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-[#141711]">Meditation session completed</div>
                <div className="text-xs text-[#4B5563]">Yesterday</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};