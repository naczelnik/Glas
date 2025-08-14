import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingDown, Users, ArrowRight, Eye, MousePointer, CreditCard } from 'lucide-react';

const Funnels: React.FC = () => {
  const funnelSteps = [
    {
      id: 1,
      name: 'Odwiedziny strony',
      visitors: 10000,
      icon: Eye,
      color: 'from-blue-500 to-blue-600',
      conversionRate: 100
    },
    {
      id: 2,
      name: 'Przeglądanie produktów',
      visitors: 6500,
      icon: MousePointer,
      color: 'from-green-500 to-green-600',
      conversionRate: 65
    },
    {
      id: 3,
      name: 'Dodanie do koszyka',
      visitors: 2800,
      icon: Target,
      color: 'from-yellow-500 to-yellow-600',
      conversionRate: 28
    },
    {
      id: 4,
      name: 'Rozpoczęcie płatności',
      visitors: 1200,
      icon: CreditCard,
      color: 'from-purple-500 to-purple-600',
      conversionRate: 12
    },
    {
      id: 5,
      name: 'Zakończenie zakupu',
      visitors: 850,
      icon: TrendingDown,
      color: 'from-red-500 to-red-600',
      conversionRate: 8.5
    }
  ];

  const funnelAnalytics = [
    { metric: 'Całkowita konwersja', value: '8.5%', change: '+2.1%' },
    { metric: 'Największy spadek', value: 'Koszyk → Płatność', change: '-57%' },
    { metric: 'Średni czas w lejku', value: '4.2 dni', change: '-0.8 dni' },
    { metric: 'Wartość klienta', value: '245 zł', change: '+12%' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Lejki Konwersji</h1>
        <p className="text-gray-400">Analizuj ścieżkę użytkowników i optymalizuj konwersje</p>
      </motion.div>

      {/* Funnel Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {funnelAnalytics.map((item, index) => (
          <motion.div
            key={item.metric}
            className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
          >
            <div>
              <p className="text-gray-400 text-sm">{item.metric}</p>
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <span className={`text-sm ${
                item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}>
                {item.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Funnel Visualization */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-white mb-8">Lejek Sprzedażowy</h2>
        
        <div className="space-y-6">
          {funnelSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                {/* Funnel Step */}
                <div className="flex items-center space-x-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-semibold">{step.name}</h3>
                      <div className="text-right">
                        <span className="text-white font-bold text-lg">{step.visitors.toLocaleString()}</span>
                        <span className="text-gray-400 text-sm ml-2">użytkowników</span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-4 relative overflow-hidden">
                      <motion.div
                        className={`h-4 bg-gradient-to-r ${step.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${step.conversionRate}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          {step.conversionRate}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Drop-off indicator */}
                {index < funnelSteps.length - 1 && (
                  <div className="flex items-center justify-center mt-4 mb-2">
                    <div className="flex items-center space-x-2 text-red-400">
                      <TrendingDown className="w-4 h-4" />
                      <span className="text-sm">
                        -{((funnelSteps[index].visitors - funnelSteps[index + 1].visitors) / funnelSteps[index].visitors * 100).toFixed(1)}% odpływ
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* Optimization Suggestions */}
      <motion.div
        className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2 className="text-xl font-semibold text-white mb-6">Sugestie Optymalizacji</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-red-400 font-semibold mb-3">🚨 Krytyczny punkt</h3>
            <p className="text-gray-300 text-sm mb-3">
              Największy spadek konwersji występuje między dodaniem do koszyka a rozpoczęciem płatności (57% odpływ).
            </p>
            <p className="text-gray-400 text-xs">
              Sugerowane działania: Uprość proces płatności, dodaj gwarancje bezpieczeństwa, zaoferuj więcej opcji płatności.
            </p>
          </motion.div>
          
          <motion.div
            className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h3 className="text-green-400 font-semibold mb-3">✅ Mocna strona</h3>
            <p className="text-gray-300 text-sm mb-3">
              Dobra konwersja z odwiedzin na przeglądanie produktów (65%). Użytkownicy są zainteresowani ofertą.
            </p>
            <p className="text-gray-400 text-xs">
              Wykorzystaj to: Skoncentruj się na poprawie kolejnych etapów, zachowaj obecną strategię przyciągania ruchu.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Funnels;
