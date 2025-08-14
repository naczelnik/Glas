import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Facebook,
  MousePointer,
  TrendingUp,
  Users,
  DollarSign,
  Link as LinkIcon,
  Zap,
  FileText,
  Target,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', name: 'Dashboard', icon: BarChart3 },
    { path: '/facebook-ads', name: 'Facebook Ads', icon: Facebook },
    { path: '/click-tracking', name: 'Śledzenie Kliknięć', icon: MousePointer },
    { path: '/conversions', name: 'Konwersje', icon: TrendingUp },
    { path: '/customer-journey', name: 'Podróż Klienta', icon: Users },
    { path: '/revenue-attribution', name: 'Atrybucja Przychodów', icon: DollarSign },
    { path: '/utm-campaigns', name: 'UTM & Kampanie', icon: LinkIcon },
    { path: '/automations', name: 'Automatyzacje', icon: Zap },
    { path: '/reports', name: 'Raporty', icon: FileText },
    { path: '/funnels', name: 'Lejki Konwersji', icon: Target },
    { path: '/settings', name: 'Ustawienia', icon: Settings },
  ];

  return (
    <motion.div
      className={`bg-black/20 backdrop-blur-md border-r border-white/10 h-screen flex flex-col transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-xl font-bold text-white">Analytics</h1>
              <p className="text-gray-400 text-sm">Marketing Dashboard</p>
            </motion.div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <motion.li
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : 'text-gray-400 group-hover:text-white'}`} />
                  {!isCollapsed && (
                    <span className="font-medium">{item.name}</span>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <motion.div
          className="p-4 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-3 border border-white/10">
            <p className="text-white text-sm font-medium">Plan Premium</p>
            <p className="text-gray-400 text-xs">Aktywny do 15.03.2024</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Sidebar;
