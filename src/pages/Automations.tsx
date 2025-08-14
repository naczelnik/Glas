import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Play, Pause, Settings, Mail, MessageSquare, Target, Clock } from 'lucide-react';

const Automations: React.FC = () => {
  const automations = [
    {
      id: 1,
      name: 'Welcome Email Series',
      trigger: 'Nowa rejestracja',
      status: 'active',
      icon: Mail,
      color: 'from-blue-500 to-blue-600',
      executions: 1247,
      conversionRate: 18.5,
      description: 'Seria 5 emaili powitalnych dla nowych użytkowników'
    },
    {
      id: 2,
      name: 'Abandoned Cart Recovery',
      trigger: 'Porzucony koszyk',
      status: 'active',
      icon: Target,
      color: 'from-green-500 to-green-600',
      executions: 892,
      conversionRate: 24.3,
      description: 'Przypomnienie o produktach w koszyku po 1h, 24h i 7 dni'
    },
    {
      id: 3,
      name: 'Lead Nurturing Campaign',
      trigger: 'Pobranie lead magnetu',
      status: 'active',
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600',
      executions: 634,
      conversionRate: 12.8,
      description: 'Edukacyjna seria emaili dla potencjalnych klientów'
    },
    {
      id: 4,
      name: 'Re-engagement Campaign',
      trigger: 'Brak aktywności 30 dni',
      status: 'paused',
      icon: Clock,
      color: 'from-orange-500 to-orange-600',
      executions: 456,
      conversionRate: 8.2,
      description: 'Reaktywacja nieaktywnych użytkowników'
    }
  ];

  const triggers = [
    { name: 'Nowa rejestracja', count: 1247, icon: '👋' },
    { name: 'Porzucony koszyk', count: 892, icon: '🛒' },
    { name: 'Zakup produktu', count: 634, icon: '💳' },
    { name: 'Pobranie pliku', count: 456, icon: '📥' },
    { name: 'Odwiedzenie strony', count: 2341, icon: '👁️' },
    { name: 'Kliknięcie w email', count: 1876, icon: '📧' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Automatyzacje</h1>
        <p className="text-gray-400">Zarządzaj automatycznymi kampaniami marketingowymi i sekwencjami</p>
      </motion.div>

      {/* Automation Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Aktywne Automatyzacje</p>
              <p className="text-2xl font-bold text-white">8</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
              <Play className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Wykonania (30 dni)</p>
              <p className="text-2xl font-bold text-white">3,229</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Średnia Konwersja</p>
              <p className="text-2xl font-bold text-white">15.9%</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Zaoszczędzony Czas</p>
              <p className="text-2xl font-bold text-white">127h</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Active Automations */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-white mb-6">Aktywne Automatyzacje</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {automations.map((automation, index) => (
            <motion.div
              key={automation.id}
              className="p-6 bg-white/5 rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 bg-gradient-to-r ${automation.color} rounded-lg`}>
                    <automation.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{automation.name}</h3>
                    <p className="text-gray-400 text-sm">{automation.trigger}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    automation.status === 'active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {automation.status === 'active' ? 'Aktywna' : 'Wstrzymana'}
                  </span>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <Settings className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4">{automation.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-xs">Wykonania</p>
                  <p className="text-white font-semibold">{automation.executions.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Konwersja</p>
                  <p className="text-green-400 font-semibold">{automation.conversionRate}%</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Triggers Overview */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2 className="text-xl font-semibold text-white mb-6">Najpopularniejsze Wyzwalacze</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {triggers.map((trigger, index) => (
            <motion.div
              key={trigger.name}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{trigger.icon}</span>
                <span className="text-gray-300">{trigger.name}</span>
              </div>
              <span className="text-white font-semibold">{trigger.count.toLocaleString()}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Automations;
