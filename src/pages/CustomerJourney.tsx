import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight, Clock, Target, TrendingUp, Eye } from 'lucide-react';

const CustomerJourney: React.FC = () => {
  const journeyStages = [
    {
      id: 1,
      name: 'Świadomość',
      icon: Eye,
      visitors: 12500,
      conversion: 15.2,
      color: 'from-blue-500 to-blue-600',
      description: 'Użytkownicy odkrywają Twoją markę'
    },
    {
      id: 2,
      name: 'Zainteresowanie',
      icon: Target,
      visitors: 1900,
      conversion: 32.1,
      color: 'from-green-500 to-green-600',
      description: 'Przeglądają produkty i treści'
    },
    {
      id: 3,
      name: 'Rozważanie',
      icon: Clock,
      visitors: 610,
      conversion: 45.8,
      color: 'from-yellow-500 to-yellow-600',
      description: 'Porównują opcje i czytają opinie'
    },
    {
      id: 4,
      name: 'Konwersja',
      icon: TrendingUp,
      visitors: 279,
      conversion: 100,
      color: 'from-purple-500 to-purple-600',
      description: 'Dokonują zakupu lub rejestracji'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Podróż Klienta</h1>
        <p className="text-gray-400">Analizuj ścieżkę użytkowników od pierwszego kontaktu do konwersji</p>
      </motion.div>

      {/* Journey Visualization */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-xl font-semibold text-white mb-6">Ścieżka Konwersji</h2>
        
        <div className="flex items-center justify-between">
          {journeyStages.map((stage, index) => (
            <React.Fragment key={stage.id}>
              <motion.div
                className="flex flex-col items-center space-y-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {/* Stage Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${stage.color} rounded-full flex items-center justify-center`}>
                  <stage.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Stage Info */}
                <div className="text-center">
                  <h3 className="text-white font-semibold">{stage.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{stage.description}</p>
                  <div className="mt-3 space-y-1">
                    <p className="text-2xl font-bold text-white">{stage.visitors.toLocaleString()}</p>
                    <p className="text-sm text-gray-400">użytkowników</p>
                    <p className="text-sm text-green-400">{stage.conversion}% konwersja</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Arrow */}
              {index < journeyStages.length - 1 && (
                <ArrowRight className="w-8 h-8 text-gray-400 mx-4" />
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* Journey Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Czas w Każdym Etapie</h3>
          <div className="space-y-4">
            {journeyStages.map((stage, index) => (
              <div key={stage.id} className="flex items-center justify-between">
                <span className="text-gray-300">{stage.name}</span>
                <span className="text-white font-medium">{Math.floor(Math.random() * 10) + 1} dni</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Najczęstsze Punkty Wyjścia</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Strona produktu</span>
              <span className="text-red-400">45%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Koszyk</span>
              <span className="text-red-400">28%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Formularz kontaktowy</span>
              <span className="text-red-400">18%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Strona główna</span>
              <span className="text-red-400">9%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerJourney;
