import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Search, User, Settings, LogOut, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'Nowa konwersja',
      message: 'Kampania Facebook Ads wygenerowała nową konwersję',
      time: '2 min temu',
      type: 'success'
    },
    {
      id: 2,
      title: 'Raport gotowy',
      message: 'Miesięczny raport analityczny jest gotowy do pobrania',
      time: '15 min temu',
      type: 'info'
    },
    {
      id: 3,
      title: 'Budżet kampanii',
      message: 'Kampania Google Ads wykorzystała 80% budżetu',
      time: '1 godz. temu',
      type: 'warning'
    }
  ];

  return (
    <motion.header
      className="bg-black/20 backdrop-blur-md border-b border-white/10 px-8 py-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Szukaj kampanii, raportów..."
              className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <motion.div
                className="absolute right-0 mt-2 w-80 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-4 border-b border-white/10">
                  <h3 className="text-white font-semibold">Powiadomienia</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          notification.type === 'success' ? 'bg-green-500' :
                          notification.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-white text-sm font-medium">{notification.title}</p>
                          <p className="text-gray-400 text-xs mt-1">{notification.message}</p>
                          <p className="text-gray-500 text-xs mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-white/10">
                  <button className="w-full text-blue-400 hover:text-white text-sm transition-colors">
                    Zobacz wszystkie powiadomienia
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-3 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-white text-sm font-medium">Jan Kowalski</p>
                <p className="text-gray-400 text-xs">Administrator</p>
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* User Dropdown */}
            {showUserMenu && (
              <motion.div
                className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2">
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                    <User className="w-4 h-4" />
                    <span className="text-sm">Profil</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm">Ustawienia</span>
                  </button>
                  <hr className="my-2 border-white/10" />
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors">
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm">Wyloguj</span>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
