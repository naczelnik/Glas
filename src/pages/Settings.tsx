import React from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, User, Bell, Shield, Database, Palette, Globe, Key } from 'lucide-react';

const Settings: React.FC = () => {
  const settingsSections = [
    {
      id: 'profile',
      name: 'Profil użytkownika',
      description: 'Zarządzaj swoimi danymi osobowymi i preferencjami konta',
      icon: User,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'notifications',
      name: 'Powiadomienia',
      description: 'Skonfiguruj powiadomienia email i push',
      icon: Bell,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'security',
      name: 'Bezpieczeństwo',
      description: 'Ustawienia hasła, 2FA i sesji',
      icon: Shield,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'integrations',
      name: 'Integracje',
      description: 'Połącz z Facebook Ads, Google Analytics i innymi',
      icon: Database,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'appearance',
      name: 'Wygląd',
      description: 'Personalizuj interfejs i motywy kolorystyczne',
      icon: Palette,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'language',
      name: 'Język i region',
      description: 'Ustaw język interfejsu i format danych',
      icon: Globe,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'api',
      name: 'API i webhooks',
      description: 'Zarządzaj kluczami API i webhookami',
      icon: Key,
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const quickSettings = [
    { name: 'Powiadomienia email', enabled: true },
    { name: 'Automatyczne raporty', enabled: true },
    { name: 'Tryb ciemny', enabled: true },
    { name: 'Dźwięki powiadomień', enabled: false },
    { name: 'Analityka zaawansowana', enabled: true },
    { name: 'Eksport danych', enabled: true }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Ustawienia</h1>
        <p className="text-gray-400">Zarządzaj swoim kontem i preferencjami aplikacji</p>
      </motion.div>

      {/* Quick Settings */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-xl font-semibold text-white mb-6">Szybkie ustawienia</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickSettings.map((setting, index) => (
            <motion.div
              key={setting.name}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <span className="text-gray-300">{setting.name}</span>
              <div className={`w-12 h-6 rounded-full p-1 transition-colors ${
                setting.enabled ? 'bg-blue-600' : 'bg-gray-600'
              }`}>
                <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  setting.enabled ? 'translate-x-6' : 'translate-x-0'
                }`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Settings Sections */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-white mb-6">Wszystkie ustawienia</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {settingsSections.map((section, index) => (
            <motion.div
              key={section.id}
              className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 bg-gradient-to-r ${section.color} rounded-lg group-hover:scale-110 transition-transform`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                    {section.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{section.description}</p>
                  <div className="mt-4">
                    <span className="text-blue-400 text-sm font-medium group-hover:text-white transition-colors">
                      Konfiguruj →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Account Info */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-white mb-6">Informacje o koncie</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white/5 rounded-lg">
            <p className="text-gray-400 text-sm">Plan</p>
            <p className="text-white font-semibold">Premium</p>
            <p className="text-green-400 text-xs mt-1">Aktywny do 15.03.2024</p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-lg">
            <p className="text-gray-400 text-sm">Użycie API</p>
            <p className="text-white font-semibold">2,847 / 10,000</p>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '28.47%' }}></div>
            </div>
          </div>
          
          <div className="p-4 bg-white/5 rounded-lg">
            <p className="text-gray-400 text-sm">Ostatnie logowanie</p>
            <p className="text-white font-semibold">Dzisiaj, 14:32</p>
            <p className="text-gray-400 text-xs mt-1">IP: 192.168.1.1</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;
