import React from 'react';
import { Sidebar } from '../components/Sidebar';

export const DashboardDietician: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#F5F5F5]">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 md:ml-64 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-[#E0E5DC] p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#141711]">Dashboard</h1>
              <p className="text-[#4B5563]">Welcome back, Dr. Smith</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-[#4B5563] hover:text-[#7FB069] transition-colors">
                <span className="text-xl">🔔</span>
              </button>
              <div className="w-10 h-10 bg-[#7FB069] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">DS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#4B5563] text-sm font-medium">Total Patients</p>
                  <p className="text-3xl font-bold text-[#141711]">247</p>
                  <p className="text-[#7FB069] text-sm">+12% from last month</p>
                </div>
                <div className="w-12 h-12 bg-[#7FB069]/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#4B5563] text-sm font-medium">Active Plans</p>
                  <p className="text-3xl font-bold text-[#141711]">189</p>
                  <p className="text-[#98D8C8] text-sm">+8% from last month</p>
                </div>
                <div className="w-12 h-12 bg-[#98D8C8]/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#4B5563] text-sm font-medium">Appointments</p>
                  <p className="text-3xl font-bold text-[#141711]">24</p>
                  <p className="text-[#D97706] text-sm">Today</p>
                </div>
                <div className="w-12 h-12 bg-[#D97706]/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📅</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#4B5563] text-sm font-medium">Revenue</p>
                  <p className="text-3xl font-bold text-[#141711]">₹1.2L</p>
                  <p className="text-[#7FB069] text-sm">This month</p>
                </div>
                <div className="w-12 h-12 bg-[#4B5563]/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Patients */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#141711]">Recent Patients</h2>
                <button className="text-[#7FB069] font-semibold hover:text-[#6A9959]">View All</button>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Priya Sharma', condition: 'Weight Management', status: 'Active', avatar: 'PS' },
                  { name: 'Rahul Kumar', condition: 'Digestive Issues', status: 'Consultation', avatar: 'RK' },
                  { name: 'Anita Patel', condition: 'Diabetes Management', status: 'Active', avatar: 'AP' },
                  { name: 'Vikram Singh', condition: 'Hypertension', status: 'Follow-up', avatar: 'VS' }
                ].map((patient, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#7FB069] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{patient.avatar}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-[#141711]">{patient.name}</div>
                        <div className="text-sm text-[#4B5563]">{patient.condition}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        patient.status === 'Active' ? 'bg-[#7FB069]/10 text-[#7FB069]' :
                        patient.status === 'Consultation' ? 'bg-[#D97706]/10 text-[#D97706]' :
                        'bg-[#98D8C8]/10 text-[#98D8C8]'
                      }`}>
                        {patient.status}
                      </span>
                      <button className="text-[#4B5563] hover:text-[#7FB069]">
                        <span className="text-lg">→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-[#141711] mb-6">Today's Schedule</h2>
              <div className="space-y-4">
                {[
                  { time: '09:00 AM', patient: 'Priya Sharma', type: 'Consultation' },
                  { time: '10:30 AM', patient: 'Rahul Kumar', type: 'Follow-up' },
                  { time: '02:00 PM', patient: 'Anita Patel', type: 'Review' },
                  { time: '03:30 PM', patient: 'Vikram Singh', type: 'Consultation' },
                  { time: '05:00 PM', patient: 'Meera Joshi', type: 'Initial' }
                ].map((appointment, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border-l-4 border-[#7FB069] bg-[#7FB069]/5 rounded-r-lg">
                    <div className="text-sm font-semibold text-[#7FB069] min-w-[70px]">
                      {appointment.time}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-[#141711] text-sm">{appointment.patient}</div>
                      <div className="text-xs text-[#4B5563]">{appointment.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-[#141711] mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="flex flex-col items-center p-4 bg-[#7FB069]/10 rounded-lg hover:bg-[#7FB069]/20 transition-colors">
                <span className="text-3xl mb-2">👤</span>
                <span className="text-sm font-semibold text-[#141711]">Add Patient</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-[#98D8C8]/10 rounded-lg hover:bg-[#98D8C8]/20 transition-colors">
                <span className="text-3xl mb-2">📋</span>
                <span className="text-sm font-semibold text-[#141711]">Create Plan</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-[#D97706]/10 rounded-lg hover:bg-[#D97706]/20 transition-colors">
                <span className="text-3xl mb-2">📅</span>
                <span className="text-sm font-semibold text-[#141711]">Schedule</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-[#4B5563]/10 rounded-lg hover:bg-[#4B5563]/20 transition-colors">
                <span className="text-3xl mb-2">📊</span>
                <span className="text-sm font-semibold text-[#141711]">Analytics</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};