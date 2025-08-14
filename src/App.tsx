import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import FacebookAdsManager from './pages/FacebookAdsManager';
import ClickTracking from './pages/ClickTracking';
import Conversions from './pages/Conversions';
import CustomerJourney from './pages/CustomerJourney';
import RevenueAttribution from './pages/RevenueAttribution';
import UTMCampaigns from './pages/UTMCampaigns';
import Automations from './pages/Automations';
import Reports from './pages/Reports';
import Funnels from './pages/Funnels';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-8 overflow-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/facebook-ads" element={<FacebookAdsManager />} />
                <Route path="/click-tracking" element={<ClickTracking />} />
                <Route path="/conversions" element={<Conversions />} />
                <Route path="/customer-journey" element={<CustomerJourney />} />
                <Route path="/revenue-attribution" element={<RevenueAttribution />} />
                <Route path="/utm-campaigns" element={<UTMCampaigns />} />
                <Route path="/automations" element={<Automations />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/funnels" element={<Funnels />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
